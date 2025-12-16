import "@core/styles/layouts/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-title">
            <h3>Bugalteria</h3>
            <p>Твій простий спосіб керувати фінансами</p>
          </div>
          <div className="copyright">
            &copy; 2025 Personal Accounting. Усі права захищено.
          </div>
          <div className="social">
            <a href="#" className="imageBox no-select">
              <img src="/icons/instagram.svg" alt="instagram" />
            </a>
            <a href="#" className="imageBox no-select">
              <img src="/icons/telegram.svg" alt="telegram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
