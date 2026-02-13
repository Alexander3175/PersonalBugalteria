import { useEffect, useState } from "react";
import type { ModalProps } from "./modal.interface";
import "./modalStyle.css";

export const Modal = ({ title, description, isOpen, onClose }: ModalProps) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleExport = async () => {
    if (!startDate || !endDate) {
      alert("Будь ласка, оберіть обидві дати");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      alert("Початкова дата не може бути пізніше кінцевої");
      return;
    }

    setIsExporting(true);

    // Симуляція експорту - замініть на вашу логіку
    setTimeout(() => {
      console.log("Експорт даних з", startDate, "до", endDate);
      setIsExporting(false);
      onClose();
      setStartDate("");
      setEndDate("");
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-title-section">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <button
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Закрити модальне вікно"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="modal-content">
            <div className="date-range-section">
              <div className="date-input-group">
                <label htmlFor="start-date">Початкова дата</label>
                <input
                  id="start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="date-input"
                />
              </div>

              <div className="date-separator">—</div>

              <div className="date-input-group">
                <label htmlFor="end-date">Кінцева дата</label>
                <input
                  id="end-date"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="date-input"
                  min={startDate}
                />
              </div>
            </div>

            <div className="info-box">
              <svg
                className="info-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 10V14M10 6.5V7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <p>
                Експорт включає всі дані за обраний період. Файл буде
                завантажено у форматі CSV. Максимальний період — 1 рік.
              </p>
            </div>
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={onClose}
              disabled={isExporting}
            >
              Скасувати
            </button>
            <button
              className="btn btn-primary"
              onClick={handleExport}
              disabled={isExporting || !startDate || !endDate}
            >
              {isExporting ? (
                <>
                  <span className="spinner"></span>
                  Експортування...
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M11.3333 5.33333L8 2M8 2L4.66667 5.33333M8 2V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Експортувати
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
