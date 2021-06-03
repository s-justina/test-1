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
  color: #000;
`;

export const RandomAvatar = styled.img`
transform: scale(0.4);
`;

export const FormArea = styled.div`
  margin-top: 3rem;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledField = styled(Field)`
  padding: 0.5rem 1rem;
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;

export const Text = styled.p`
  margin-top: 0.4rem;
  margin-bottom: 1rem;
  font-style: italic;
  font-size: 0.8rem;
  color: red;
`;

export const SubmitButton = styled.button`
  margin-top: 2rem;
  border-radius: 3px;
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
`;
