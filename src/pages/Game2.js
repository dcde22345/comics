import copy from "copy-to-clipboard";
import { Link } from "react-router-dom";

export const Game2 = () => {
  const handleCopy = (id) => {
    const element = document.querySelector(`#${id}`);
    switch (element.textContent) {
      case "____":
        alert("請先選擇選項喔！");
        break;
      case "have":
        copy("a plate with leftover food on it");
        alert("複製指令成功！");
        break;
      case "a empty plate":
        copy("");
        alert("複製指令成功！");
    }
  };
  return (
    <div className="background2 vw-100 vh-100">
      <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-2 fw-bold mb-5">第二幕</h1>
        <div className="bg-white bg-opacity-75 p-3 border border-3 border-dark mb-5 position-relative">
          <p className="display-4 mb-0">
            I usually{" "}
            <span id="key" className="fw-bold">
              ____
            </span>
            {" "}
            leftover food at lunch.
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
        <div className="d-flex justify-content-space align-items-center">
          <button type="button" className="btn btn-dark m-3">
            <span
              className="display-6"
              onClick={() => {
                document.querySelector("#key").textContent =
                  "have";
              }}
            >
              have
            </span>
          </button>
          <button type="button" className="btn btn-dark m-3">
            <span
              className="display-6"
              onClick={() => {
                document.querySelector("#key").textContent =
                  "have no";
              }}
            >
              have no
            </span>
          </button>
        </div>
        <div className="control">
          <Link className="btn btn-dark px-5 mt-5 mx-3" to="/comics/Game1">
            <span className="display-6 fw-bold">上一幕</span>
          </Link>
          <Link className="btn btn-dark px-5 mt-5 mx-3" to="/comics/Game3">
            <span className="display-6 fw-bold">下一幕</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Game2;
