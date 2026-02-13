import "../style/dashboard.css";

export const StatsBlock = () => {
  return (
    <div className="wrapper-stats">
      <div className="stats-item">
        <div className="stats-header">
          <h3>Дохід</h3>
          <div className="statsImage incomeImage imageBox no-select">
            <img src="/icons/sales-amount-svgrepo-com.svg" alt="дохід" />
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
          <div className="statsImage transactionsImage imageBox no-select">
            <img src="/icons/transaction-svgrepo-com.svg" alt="Транзакції" />
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
          <h3>Заощадження</h3>
          <div className="statsImage savingsImage imageBox no-select">
            <img src="/icons/savings-hog-svgrepo-com.svg" alt="заощядження" />
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
          <h3>Загальний Баланс</h3>
          <div className="statsImage balanceImage imageBox no-select">
            <img src="/icons/balance-1-svgrepo-com.svg" alt="дохід" />
          </div>
        </div>
        <div className="number">
          <span>401,000</span>
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
