import { differenceInMinutes, format, fromUnixTime, isValid } from "date-fns";

export const FMT_HUMAN = "EEEE, dd MMM yyyy | h:mm a";
export const FMT_HUMAN_COMPACT = "eee, dd MMM yyyy | h:mm a";
export const FMT_TIME = "h:mm a";
export const FMT_DATE_COMPACT = "EEE, dd";

// Format a date to specified string template.
export const formatDate = (
  d: Date | string | number | null | undefined,
  fmt: string,
): string => {
  if (!d || !isValid(d)) {
    return "Invalid date";
  }
  return format(d, fmt);
};

// Format duration between two Date objects.
export const formatDuration = (from: Date, to: Date): string => {
  const duration = differenceInMinutes(from, to);

  const h = Math.floor(duration / 60);
  const m = duration % 60;

  return `${h}h ${m}m`;
};

// Convert UNIX timestamp to JavaScript Date.
export const ts2date = (ts: number): Date => {
  return fromUnixTime(ts);
};
