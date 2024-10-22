import { z } from "zod";

// Parse schema with Zod. If validation fails, throws an error.
export const parseWithSchema = <T>(data: unknown, schema: z.ZodType<T>): T => {
  return schema.parse(data);
};

// Safe parse schema with Zod. If validation fails, does not throw an error and always returns the parsed object.
export const safeParseWithSchema = <T>(
  data: unknown,
  schema: z.ZodType<T>,
): T => {
  const result = schema.safeParse(data);

  if (result.success) {
    return result.data;
  } else {
    console.warn("Schema parsing failed.");
    for (const issue of result.error.issues) {
      console.warn(issue);
      if (issue.code === "invalid_type") {
        if (issue.received === "null") {
          // Keep parsed null values
          modifyFieldValue(data, issue.path, "update", null);
        }
        if (issue.received === "undefined") {
          // Delete parsed undefined values
          modifyFieldValue(data, issue.path, "delete");
        }
      }
    }

    return data as T;
  }
};

// Modify (update or delete) object's field value at specified path.
const modifyFieldValue = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: any,
  path: (string | number)[],
  action: "update" | "delete",
  value?: unknown,
) => {
  let current = obj;

  // Check if path is valid
  for (const key of path.slice(0, -1)) {
    if (current[key] === undefined) {
      // Key does not exist, terminate
      return;
    }
    current = current[key];
  }

  const lastKey = path[path.length - 1];

  if (action === "update") {
    current[lastKey] = value;
  }
  if (action === "delete") {
    delete current[lastKey];
  }
};
