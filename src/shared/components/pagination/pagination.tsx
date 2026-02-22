import { getPageNumbers } from "./helperGetNumbers";
import type { PaginationProps } from "./IPagination";
import "./paginationStyle.css";

export const Pagination = ({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 25, 50, 100],
}: PaginationProps) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const from = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const to = Math.min(currentPage * pageSize, totalItems);

  const pages = getPageNumbers(currentPage, totalPages);

  const go = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };
  return (
    <>
      <div className={`pag-root`}>
        <div className="pag-left">
          <span className="pag-info">
            {totalItems === 0 ? (
              "Немає записів"
            ) : (
              <>
                <strong>
                  {from}–{to}
                </strong>
                з <strong>{totalItems}</strong>
              </>
            )}
          </span>

          {onPageSizeChange && (
            <label className="pag-size-label">
              Рядків:
              <select
                className="pag-size-select"
                value={pageSize}
                onChange={(e) => {
                  onPageSizeChange(Number(e.target.value));
                  onPageChange(1);
                }}
              >
                {pageSizeOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>

        <nav className="pag-nav" aria-label="Пагінація">
          <button
            className="pag-btn pag-arrow"
            onClick={() => go(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Попередня сторінка"
          >
            ‹
          </button>

          {pages.map((page, i) =>
            page === "..." ? (
              <span key={`e${i}`} className="pag-ellipsis">
                …
              </span>
            ) : (
              <button
                key={page}
                className={`pag-btn pag-num ${page === currentPage ? "pag-active" : ""}`}
                onClick={() => go(page as number)}
                aria-label={`Сторінка ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </button>
            ),
          )}

          <button
            className="pag-btn pag-arrow"
            onClick={() => go(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Наступна сторінка"
          >
            ›
          </button>
        </nav>
      </div>
    </>
  );
};
