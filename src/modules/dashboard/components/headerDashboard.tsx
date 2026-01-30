import "../style/headerDashboard.css";

export const HeaderDashboard = () => {
  return (
    <header className="wrapper-headerDashboard">
      <h2>Дашбоард</h2>
      <div className="headerDashboard-buttons">
        <button>Експорт</button>
        <button>Додати витрати</button>
      </div>
    </header>
  );
};
