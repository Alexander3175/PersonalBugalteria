import "../style/lastActivity.css";

export const LastActivityBlock = () => {
  return (
    <div className="wrapper-LastActivity">
      <div className="lastActivity-content">
        <div className="lastActivity-header">
          <div className="lastActivity-header__title">
            <h3>Остання Активність</h3>
            <button>Подивитись все</button>
          </div>
          <p className="lastActivity-header-title__description">
            Нещодавні додавання витрат
          </p>
        </div>
        <div className="lastActivity-items">
          <div className="lastActivity-item">
            <div className="lastActivity-item__item lastActivity-item__title">
              <span>Sasha Balaniuk</span>
              <span>sasabalaniuk7@gmail.com</span>
            </div>
            <div className="lastActivity-item__item  lastActivity-item__status">
              <div className="lastActivity-item-status__status">
                <div className="lastActivity-item-status-circle"></div>
                <p>Зарплатта</p>
              </div>
              <span className="lastActivity-item-status__paid">
                Оплаченно 15/07/2026
              </span>
            </div>
            <div className="lastActivity-item__item  lastActivity-item__price">
              <span>$150</span>
              <span>USD</span>
            </div>
            <button className="lastActivity-item__viewMore">
              Подивитись більше
            </button>
            {/* <div className="lastActivity-item__moreCircle">
              <div className="lastActivity-item-moreCircle__circle"></div>
              <div className="lastActivity-item-moreCircle__circle"></div>
              <div className="lastActivity-item-moreCircle__circle"></div>
            </div> */}
          </div>
          <div className="lastActivity-item">
            <div className="lastActivity-item__item lastActivity-item__title">
              <span>Sasha Balaniuk</span>
              <span>sasabalaniuk7@gmail.com</span>
            </div>
            <div className="lastActivity-item__item  lastActivity-item__status">
              <div className="lastActivity-item-status__status">
                <div className="lastActivity-item-status-circle"></div>
                <p>Зарплатта</p>
              </div>
              <span className="lastActivity-item-status__paid">
                Оплаченно 15/07/2026
              </span>
            </div>
            <div className="lastActivity-item__item  lastActivity-item__price">
              <span>$150</span>
              <span>USD</span>
            </div>
            <button className="lastActivity-item__viewMore">
              Подивитись більше
            </button>
            {/* <div className="lastActivity-item__moreCircle">
              <div className="lastActivity-item-moreCircle__circle"></div>
              <div className="lastActivity-item-moreCircle__circle"></div>
              <div className="lastActivity-item-moreCircle__circle"></div>
            </div> */}
          </div>
          <div className="lastActivity-item">
            <div className="lastActivity-item__item lastActivity-item__title">
              <span>Sasha Balaniuk</span>
              <span>sasabalaniuk7@gmail.com</span>
            </div>
            <div className="lastActivity-item__item  lastActivity-item__status">
              <div className="lastActivity-item-status__status">
                <div className="lastActivity-item-status-circle"></div>
                <p>Зарплатта</p>
              </div>
              <span className="lastActivity-item-status__paid">
                Оплаченно 15/07/2026
              </span>
            </div>
            <div className="lastActivity-item__item  lastActivity-item__price">
              <span>$150</span>
              <span>USD</span>
            </div>
            <button className="lastActivity-item__viewMore">
              Подивитись більше
            </button>
            {/* <div className="lastActivity-item__moreCircle">
              <div className="lastActivity-item-moreCircle__circle"></div>
              <div className="lastActivity-item-moreCircle__circle"></div>
              <div className="lastActivity-item-moreCircle__circle"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
