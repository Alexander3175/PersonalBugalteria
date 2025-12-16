import "../style/functionalityBlock.css";
export const FunctionalityBlock = () => {
  return (
    <div className="container-functionalityBlock">
      <div className="content-functionalityBlock">
        <div className="functionality-item">
          <div className="imageBox no-select">
            <img src="icons/increase.svg" alt="increase" />
          </div>
          <div className="functionality-item__title">
            <h3>Облік доходів і витрат</h3>
            <p>додавайте операції за кілька секунд</p>
          </div>
        </div>
        <div className="functionality-item">
          <div className="imageBox no-select">
            <img src="icons/analysis.svg" alt="increase" />
          </div>
          <div className="functionality-item__title">
            <h3>Аналітика і графіки</h3>
            <p>бачте свої витрати у зручних діаграмах</p>
          </div>
        </div>
        <div className="functionality-item">
          <div className="imageBox no-select">
            <img src="icons/financial-goals.svg" alt="increase" />
          </div>
          <div className="functionality-item__title">
            <h3>Фінансові цілі</h3>
            <p>ставте мету й відстежуйте прогрес</p>
          </div>
        </div>
        <div className="functionality-item">
          <div className="imageBox no-select">
            <img src="icons/reminder.svg" alt="increase" />
          </div>
          <div className="functionality-item__title">
            <h3>Нагадування та поради </h3>
            <p>не пропускайте важливих платежів</p>
          </div>
        </div>
      </div>
    </div>
  );
};
