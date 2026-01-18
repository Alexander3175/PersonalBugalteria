import "../style/aside.css";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside-conteiner">
        <div className="aside-content">
          <div className="userInformation">
            <div className="imageBox no-select">
              <img src="/icons/user-profile_svg.svg" alt="user-profile" />
            </div>
            <h3>Username</h3>
          </div>
          <div className="userFunctionality userFunctionality-items">
            <div className="userFunctionality_item userFunctionality_item__dashboards userFunctionality_item__dashboards--active">
              <div className="imageBox no-select">
                <img src="/icons/aside/dashboard_svg.svg" alt="dashboard" />
              </div>
              <h4>Дашборд</h4>
            </div>
            <div className="userFunctionality_item userFunctionality_item__transactions">
              <div className="imageBox no-select">
                <img src="/icons/aside/transaction_svg.svg" alt="transaction" />
              </div>
              <h4>Операції</h4>
            </div>
            <div className="userFunctionality_item userFunctionality_item__analytics">
              <div className="imageBox no-select">
                <img src="/icons/aside/analytics_svg.svg" alt="analytics" />
              </div>
              <h4>Аналітика</h4>
            </div>
          </div>
          <div className="userFunctionality userSettings-items">
            <div className="userSettings_item userSettings_settings">
              <div className="imageBox no-select">
                <img src="/icons/aside/settings_svg.svg" alt="settings" />
              </div>
              <h4>Налаштування</h4>
            </div>
            <div className="userSettings_item userSettings_notification">
              <div className="imageBox no-select">
                <img src="/icons/aside/notification.svg" alt="notification" />
              </div>
              <h4>Сповіщення</h4>
            </div>
            <div className="userSettings_item userSettings_theme">
              <div className="imageBox no-select">
                <img src="/icons/aside/theme.svg" alt="theme" />
              </div>
              <h4>Тема</h4>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
