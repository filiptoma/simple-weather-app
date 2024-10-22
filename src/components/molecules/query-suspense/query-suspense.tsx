import { UseQueryResult } from "@tanstack/react-query";

import { Loading } from "../../atoms/loading";
import { QueryError } from "../../atoms/query-error";

export type QuerySuspenseProps<T> = {
  query: UseQueryResult<T>;
  children: (data: T) => React.ReactNode;
};

export const QuerySuspense = <T,>({
  query,
  children,
}: QuerySuspenseProps<T>) => {
  const { data, refetch, isLoading, isError } = query;

  if (isLoading) {
    return <Loading className="min-h-64" />;
  }

  if (isError) {
    return <QueryError refetch={refetch} className="min-h-64" />;
  }

  return data ? <>{children(data)}</> : null;
};
