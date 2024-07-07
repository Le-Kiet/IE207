// import logo from "./logo.svg";

import "./TextArea.css";
// import NewCourse from "../components/Login.js";
function TextArea({ width, height, outline, placeholder, label }) {
  return (
    <div className="text-area-wrapper">
      <div className="text-area-input">
        <input
          type="text"
          style={{
            width: width,
            height: height,
            outline: outline,
            overflow: "auto",
            wordWrap: "break-word",
            wordBreak: "break-all",
          }}
          placeholder={placeholder}
          className={`text ${label !== undefined ? "has-label" : ""}`}
        />
        <label
          className={`text-area-label ${placeholder ? "label-float" : ""}`}
        >
          {label}
        </label>
      </div>
    </div>
  );
}

export default TextArea;
