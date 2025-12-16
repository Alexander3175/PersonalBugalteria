import "@core/styles/error.css";

const ErrorPage = () => {
  return (
    <>
      <div className="error">404</div>
      <br />
      <br />
      <span className="info">File not found</span>
      <img
        src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
        className="static"
      />
    </>
  );
};
export default ErrorPage;
