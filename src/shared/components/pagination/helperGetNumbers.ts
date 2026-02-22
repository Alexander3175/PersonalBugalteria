export function getPageNumbers(
  current: number,
  total: number,
): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const delta = 2;
  const range: number[] = [];

  for (
    let i = Math.max(2, current - delta);
    i <= Math.min(total - 1, current + delta);
    i++
  ) {
    range.push(i);
  }

  const pages: (number | "...")[] = [1];

  if (range[0] > 2) pages.push("...");
  pages.push(...range);
  if (range[range.length - 1] < total - 1) pages.push("...");
  pages.push(total);

  return pages;
}
