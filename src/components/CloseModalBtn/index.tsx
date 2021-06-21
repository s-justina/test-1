import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { CloseModalButton } from "./CloseModalBtn.styles";

const CloseModalBtn: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <CloseModalButton onClick={props.onClick}>
      <FontAwesomeIcon icon={faPlus} size="2x" />
    </CloseModalButton>
  );
};

export default CloseModalBtn;
