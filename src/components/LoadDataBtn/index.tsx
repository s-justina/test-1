import React from "react";
import { LoadMoreButton } from "./LoadDataBtn.styles";

const LoadDataBtn: React.FC<{ onClick: () => void; disabled: boolean }> = (
  props
) => {
  return (
    <LoadMoreButton onClick={props.onClick} disabled={props.disabled}>
      <h3>{props.disabled ? "That's all heroes!" : "Load more"}</h3>
    </LoadMoreButton>
  );
};

export default LoadDataBtn;
