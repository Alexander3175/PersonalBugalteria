export function usePagination<T>(
  items: T[],
  pageSize: number,
  currentPage: number,
) {
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const start = (safePage - 1) * pageSize;
  const paginatedItems = items.slice(start, start + pageSize);

  return {
    paginatedItems,
    totalPages,
    totalItems,
    from: totalItems === 0 ? 0 : start + 1,
    to: Math.min(start + pageSize, totalItems),
  };
}
