import Header from "@/app/components/Header";
import { WelcomInfoBlock } from "./components/welcomInfoBlock";
import "./style/index.css";
import { FunctionalityBlock } from "./components/functionalityBlock";
import { InterfacePreview } from "./components/interfacePreview";
import Footer from "@/app/components/Footer";
const WelcomePage = () => {
  return (
    <>
      <Header />
      <div className="wrapper-welcome">
        <div className="wrapper-conteiner">
          <div className="wrapper-content">
            <WelcomInfoBlock />
            <FunctionalityBlock />
            <InterfacePreview />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WelcomePage;
