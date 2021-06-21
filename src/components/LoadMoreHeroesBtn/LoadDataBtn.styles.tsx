import styled from "styled-components";

export const LoadMoreButton = styled.button`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.9rem;
  border: 0.5px #fff solid;
  border-radius: 0.5rem;
  width: 50%;
  background-color: #56acda;
  color: #fff;
  transition: 0.3s;

  @media (min-width: 700px) {
    padding: 1rem 1rem;
    width: 15rem;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
