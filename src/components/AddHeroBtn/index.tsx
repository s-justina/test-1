import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AddHeroButton } from "./AddHeroBtn.styles";

const AddHeroBtn: React.FC<{onClick: ()=>void}> = (props) => {
  return (
    <AddHeroButton onClick={props.onClick}>
      <FontAwesomeIcon icon={faPlus} />
      <h3>Add hero</h3>
    </AddHeroButton>
  );
};

export default AddHeroBtn;
