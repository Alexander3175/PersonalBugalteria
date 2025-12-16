import "../style/interfacePreview.css";
export const InterfacePreview = () => {
  return (
    <div className="container-interfacePreview">
      <div className="content-interfacePreview">
        <div className="interfacePreview-item">
          <div className="imageBox__screen no-select">
            <img src="image/fallback.png" alt="screen" />
          </div>
          <button className="bth-starting">
            <span>Розпочати зараз</span>
          </button>
        </div>
      </div>
    </div>
  );
};
