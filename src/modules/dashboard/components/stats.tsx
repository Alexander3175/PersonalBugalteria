import "../style/dashboard.css";

export const StatsBlock = () => {
  return (
    <div className="wrapper-stats">
      <div className="stats-item">
        <div className="stats-header">
          <h3>Дохід</h3>
          <div className="statsImage incomeImage imageBox">
            <img src="/icons/Shape.svg" alt="дохід" />
          </div>
        </div>
        <div className="number">
          <span>40,000</span>
        </div>
        <div className="stats-footer">
          <p>
            <span className="prozent">+8.5%</span>від минулого місяця
          </p>
        </div>
      </div>
      <div className="stats-item">
        <div className="stats-header">
          <h3>Транзакції</h3>
          <div className="statsImage transactionsImage imageBox">
            <img src="/icons/Shape.svg" alt="Транзакції" />
          </div>
        </div>
        <div className="number">
          <span>15200</span>
        </div>
        <div className="stats-footer">
          <p>
            <span className="prozent">+180.5%</span>від минулого місяця
          </p>
        </div>
      </div>
      <div className="stats-item">
        <div className="stats-header">
          <h3>Дохід</h3>
          <div className="statsImage imageBox">
            <img src="/icons/Shape.svg" alt="дохід" />
          </div>
        </div>
        <div className="number">
          <span>40,000</span>
        </div>
        <div className="stats-footer">
          <p>
            <span className="prozent">+8.5%</span>від минулого місяця
          </p>
        </div>
      </div>
    </div>
  );
};
