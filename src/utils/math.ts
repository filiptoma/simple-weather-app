// Accurately round the number to specified decimal points.
export const round = (value: number, decimals: number = 2): number => {
  return Number(
    Math.round(parseFloat(value + "e" + decimals)) + "e-" + decimals,
  );
};

// Convert metres/sec to km/hour.
export const ms2kmh = (ms: number): number => {
  return ms * 3.6;
};
