import styled from "styled-components";
import { Field, Form } from "formik";

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormSection = styled(ColumnWrapper)`
  padding: 1rem;
`;

export const FormTitle = styled.h3`
  font-weight: 700;
`;

export const RandomAvatar = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const FormArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledField = styled(Field)`
  padding: 0.5rem 1rem;
  width: 100%;
  height: 3rem;
  border-radius: 0.7rem;
  border: none;
  background-color: #fff;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0 0.5em 0.5rem;
  color: #aaa;
  font-size: 1rem;
  font-weight: 700;
  position: relative;
`;

export const Text = styled.p`
  margin-top: 0.1rem;
  margin-bottom: 0.2rem;
  margin-left: 0.3rem;
  font-style: italic;
  font-size: 0.8rem;
  color: red;
`;
