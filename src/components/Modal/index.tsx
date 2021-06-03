import React from "react";
import ReactDOM from "react-dom";

const Modal:React.FC<{}> = ({children}) => {
  const modalArea = document.querySelector("#modal") as HTMLElement;
  return (
    ReactDOM.createPortal(
      <div className="overlay">
        <div className="overlayContent">{children}</div>
      </div>,
      modalArea
    )
  );
};

export default Modal;
