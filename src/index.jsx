import React from "react";
import ReactDOM from "react-dom/client";
import useMightyMouse from "react-hook-mighty-mouse";
import "./styles.scss";

function App() {
  const {
    selectedElement: {
      position: { angle: angleLeftEye },
    },
  } = useMightyMouse(true, "left-eye", { x: 45, y: 45 });

  const {
    selectedElement: {
      position: { angle: angleRightEye },
    },
  } = useMightyMouse(true, "right-eye", { x: 45, y: 45 });

  const redEye =
    (angleLeftEye < 30 || (angleLeftEye < 360 && angleLeftEye > 330)) &&
    angleRightEye > 150 &&
    angleRightEye < 210;

  const styleLeftEye = {
    transform: `rotate(${-angleLeftEye}deg)`,
    backgroundColor: redEye ? "#f8c6c6" : "#f3efef",
    transition: `all 0.15s ease`,
  };

  const styleRightEye = {
    transform: `rotate(${-angleRightEye}deg)`,
    backgroundColor: redEye ? "#f8c6c6" : "#f3efef",
    transition: `all 0.15s ease`,
  };

  return (
    <>
      <div className="eyes-follow-tired">
        <div className="container">
          <div className="eyelid" />
          <div className="eyes">
            <div id="left-eye" className="eye" style={styleLeftEye}>
              <div className="pupil" />
            </div>
            <div id="right-eye" className="eye" style={styleRightEye}>
              <div className="pupil" />
            </div>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <div className="row">
          <div className="header">Contact</div>
          <div className="content">
            <p>
              👋 [at] kokkonias.de
              <br />
              <a href="http://kokkonias.de/B244F545.asc">PGP public key</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
