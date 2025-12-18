import { WelcomInfoBlock } from "./components/welcomInfoBlock";
import "./style/index.css";
import { FunctionalityBlock } from "./components/functionalityBlock";
import { InterfacePreview } from "./components/interfacePreview";
const WelcomePage = () => {
  return (
    <>
      <div className="wrapper-welcome">
        <div className="wrapper-conteiner">
          <div className="wrapper-content">
            <WelcomInfoBlock />
            <FunctionalityBlock />
            <InterfacePreview />
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
