// Remove diacritics from string and make it lowercase. Useful for searching in string.
export const normalizeString = (s: string): string => {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .toLowerCase();
};

// Check if `what` is substring of `where`.
export const containsNormalized = (what: string, where: string): boolean => {
  const normalizedWhat = normalizeString(what);
  const normalizedWhere = normalizeString(where);
  return normalizedWhere.includes(normalizedWhat);
};
