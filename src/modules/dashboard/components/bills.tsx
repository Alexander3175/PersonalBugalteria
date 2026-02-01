import "../style/bills.css";

export const BillsBlock = () => {
  return (
    <div className="wrapper-bills">
      <div className="bills-content">
        <div className="bills-header">
          <h3>Рахунки</h3>
          <div className="bills-header__icon">
            <div className="imageBox">
              <img src="" alt="image" />
            </div>
          </div>
        </div>
        <div className="bills-items">
          <div
            className="
          bills-item"
          >
            <div className="bills-item__bill">
              <span>Рахунок: </span>
              <span>123E123456782257T2386976</span>
            </div>
            <div className="bills-item__income">
              <span>+</span>
              <span>2030</span>
            </div>
            <div className="bills-item__result">
              <span>+1.8%</span>
              <span>від минулого місяця</span>
            </div>
          </div>
          <div
            className="
          bills-item"
          >
            <div className="bills-item__bill">
              <span>Рахунок: </span>
              <span>123E123456782257T2386976</span>
            </div>
            <div className="bills-item__income">
              <span>+</span>
              <span>2030</span>
            </div>
            <div className="bills-item__result">
              <span>+1.8%</span>
              <span>від минулого місяця</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
