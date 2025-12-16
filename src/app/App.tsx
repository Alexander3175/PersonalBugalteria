import "@core/styles/global.css";
import "@core/styles/variables.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import Aside from "./components/Aside";

const App = () => {
  return (
    <div className="wrapper">
      <Aside />
      <div className="main-conteiner">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
