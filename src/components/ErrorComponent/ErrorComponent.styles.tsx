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
`;

export const ErrorContent = styled.h3`
  margin: 2rem;
  font-size: 2rem;
  text-align: center;
`;

export const ErrorBtn = styled.button`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border: 2px solid #3498db;
  border-radius: 0.4rem;
  font-size: 1rem;
  font-weight: 700;
  color: #3498db;
`;
