import copy from "copy-to-clipboard";
import { Link } from "react-router-dom";

export const Game4 = () => {
  const handleCopy = (id) => {
    const element = document.querySelector(`#${id}`);
    switch (element.textContent) {
      case "My lunch, zero food waste":
        copy("a man is smiling to the front and give a victory pose");
        alert("複製指令成功！");
        break;
    }
  };
  return (
    <div className="background2 vw-100 vh-100">
      <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-2 fw-bold mb-5">第四幕</h1>
        <div className="bg-white bg-opacity-75 p-3 border border-3 border-dark mb-5 position-relative">
          <p className="display-4 mb-0">
            <span id="key" className="fw-bold">
              My lunch, zero food waste
            </span>
            .
          </p>
          <button
            type="button"
            className="btn btn-dark position-absolute"
            style={{ top: "0", right: "0", transform: "Translate(0%,-120%)" }}
          >
            <span
              className=""
              onClick={() => {
                handleCopy("key");
              }}
            >
              複製指令
            </span>
          </button>
        </div>
        <div className="control">
          <Link className="btn btn-dark px-5 mt-5" to="/comics/Game3">
            <span className="display-6 fw-bold">上一幕</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Game4;
