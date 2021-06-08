import styled from "styled-components";

export const GreenButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  padding: 1rem;
  border: 0.5px #fff solid;
  border-radius: 0.5rem;
  width: 90%;
  height: 35px;
  background-color: #9acf88;
  color: #fff;

  & h3 {
    padding-left: 1rem;
  }

  @media (min-width: 700px) {
    margin: 1rem 2rem 1rem 5%;
    padding: 1.5rem 1rem;
    width: 8rem;
  }
`;
