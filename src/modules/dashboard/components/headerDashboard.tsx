import { Modal } from "@/shared/components/modal/Modal.tsx";
import "../style/headerDashboard.css";
import { useState } from "react";

export const HeaderDashboard = () => {
  const [isExportOpenModal, setIsExportOpenModal] = useState(false);
  const [isAddOpenModal, setIsAddOpenModal] = useState(false);

  return (
    <>
      <header className="wrapper-headerDashboard">
        <h2>Дашбоард</h2>
        <div className="headerDashboard-buttons">
          <button
            className="button-export"
            onClick={() => setIsExportOpenModal(true)}
          >
            Експорт
          </button>
          <button
            onClick={() => {
              setIsAddOpenModal(true);
            }}
          >
            Додати витрати
          </button>
        </div>
      </header>
      <Modal
        title="Експорт данних"
        description="Lorem test"
        isOpen={isExportOpenModal}
        onClose={() => {
          setIsExportOpenModal(false);
        }}
      />

      <Modal
        title="Додати витрати"
        description="Lorem test"
        isOpen={isAddOpenModal}
        onClose={() => {
          setIsAddOpenModal(false);
        }}
      />
    </>
  );
};
