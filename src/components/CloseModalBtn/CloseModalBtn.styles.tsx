import styled from "styled-components";

export const CloseModalButton = styled.button`
  border: none;
  height: 2rem;
  color: #aaa;
  transform: rotate(45deg);
  transition: 0.3s;

  @media (min-width: 700px) {
    &:hover {
      cursor: pointer;
      transform: rotate(45deg) scale(1.2);
    }
  }
`;
