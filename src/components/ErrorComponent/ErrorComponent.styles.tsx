import styled from "styled-components";

export const ErrorWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ErrorTitle = styled.h1`
  margin: 0 auto;
  font-size: 5rem;
  color: #3498db;

  @media (min-width: 650px) {
    font-size: 8rem;
  }
`;

export const ErrorContent = styled.h3`
  margin: 2rem;
  font-size: 1rem;
  text-align: center;

  @media (min-width: 650px) {
    font-size: 2rem;
  }
`;

export const ErrorBtn = styled.button`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border: 2px solid #3498db;
  border-radius: 0.4rem;
  font-size: 1rem;
  font-weight: 700;
  color: #3498db;

  @media (min-width: 650px) {
    cursor: pointer;
    padding: 1rem 1.5rem;
    transition: 0.3s;

    &:hover {
      color: #fff;
      background-color: #3498db;
    }
  }
`;
