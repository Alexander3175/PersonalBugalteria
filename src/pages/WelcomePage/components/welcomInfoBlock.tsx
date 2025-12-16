import "../style/infoBlockStyle.css";
export const WelcomInfoBlock = () => {
  return (
    <div className="container-infoBlock">
      <div className="content-infoBlock">
        <div className="title">
          <h2>Керуйте своїми фінансами легко</h2>
          <p>
            Персональна бухгалтерія, яка допоможе вам бачити, куди зникають
            гроші — і як їх зберегти.
          </p>
        </div>
        <div className="imageBox__logo no-select">
          <img src="/image/FinanceApp.png" alt="FinanceApp" />
        </div>
      </div>
    </div>
  );
};
