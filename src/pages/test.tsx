import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import "./test.css";
const TestPage = () => {
  return (
    <div className="wrapper-test">
      <aside className="aside-wrapper"></aside>
      <div className="wrapper__header-footer">
        <Header />
        <Footer />
      </div>
    </div>
  );
};
export default TestPage;
