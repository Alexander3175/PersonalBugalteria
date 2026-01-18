import { useUser } from "@/store/store";
import "../style/header.css";
import { Link, useNavigate } from "react-router";
import { useAuth } from "@/modules/auth/hooks/isAuth";
const Header = () => {
  const navigate = useNavigate();
  const logout = useUser((state) => state.logout);
  const isAuth = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <header className="header">
      <div className="header-conteiner">
        <div className="header-content">
          <h2 className="header-title">
            <Link to="/" className="router-link">
              bugalteria
            </Link>
          </h2>
          <div className="header_search no-select">
            <input type="text" placeholder="Пошук..." />
          </div>
          <div className="header_actions">
            {!isAuth && (
              <button className="notification no-select">
                <div className="imageBox">
                  <img src="/icons/Shape.svg" alt="notification" />
                </div>
              </button>
            )}
            {!isAuth && (
              <button className="theme no-select">
                <div className="imageBox">
                  <img src="/icons/sun-svgrepo-com 1.svg" alt="theme" />
                </div>
              </button>
            )}
            <button className="profile no-select">
              <Link to="/auth">
                <div className="imageBox">
                  <img src="/icons/profile-svgrepo-com 1.svg" alt="profile" />
                </div>
              </Link>
            </button>
            {isAuth && (
              <button className="exit no-select" onClick={handleLogout}>
                <div className="imageBox">
                  <img src="/icons/aside/exit_svg.svg" alt="exit" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
