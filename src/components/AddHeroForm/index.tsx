import React from "react";
import * as Yup from "yup";
import {
  FormArea,
  FormTitle,
  StyledField,
  StyledForm,
  StyledLabel,
  FormSection,
  RandomAvatar,
  ColumnWrapper,
  RowWrapper,
  Text,
} from "./AddHeroForm.styles";
import { ErrorMessage, Formik, Field } from "formik";
import CloseModalBtn from "../CloseModalBtn";
import GreenBtn from "../GreenBtn";
import {toast, ToastContainer} from "react-toastify";
import {addHero} from "../../utils/API_network_functions";

const types = ["red", "green", "blue"];

const AddHeroForm: React.FC<{
  closeModal: () => void;
  avocadoAvatar: string;
}> = (props) => {

  return (
    <>
      <FormSection>
        <ColumnWrapper>
          <RowWrapper>
            <FormTitle>Add Hero</FormTitle>
            <CloseModalBtn onClick={props.closeModal} />
          </RowWrapper>
          <RandomAvatar src={props.avocadoAvatar} alt="Avatar" />
        </ColumnWrapper>

        <FormArea>
          <Formik
            initialValues={{
              avatar_url: "",
              full_name: "",
              description: "",
              type: "",
            }}
            validationSchema={Yup.object({
              avatar_url: Yup.string().required("Is required"),
              full_name: Yup.string().required("Is required"),
              description: Yup.string()
                .min(5, "Must be 5 characters or more")
                .max(200, "Must be 200 characters or less")
                .required("Is required"),
              type: Yup.string().required("Please select a type").oneOf(types),
            })}
            onSubmit={({avatar_url,
                           full_name,
                           description,
                           type}) => {
              const dataToSend = {
                  avatar_url,
                  full_name,
                  description,
                  type: "ckph4y3o900ah08630hfafi1e"
              };

              addHero(dataToSend)
                  .then((res) => {
                      const { data } = res.data;
                      console.log("response", res);
                      toast.success("✔️ Hero added!", {
                          position: "bottom-center",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                      });
                  })
                  .catch(function (error) {
                      console.log("error", error);
                      toast.error(
                          "❌️Error in add hero!",
                          {
                              position: "bottom-center",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                          }
                      );
                  });
            }}
          >
            <StyledForm>
              <StyledLabel htmlFor="avatar_url">Avatar URL</StyledLabel>
              <StyledField name="avatar_url" type="text" />
              <ErrorMessage name="avatar_url">
                {(msg) => <Text>{msg}</Text>}
              </ErrorMessage>

              <StyledLabel htmlFor="full_name">Full name</StyledLabel>
              <StyledField name="full_name" type="text" />
              <ErrorMessage name="full_name">
                {(msg) => <Text>{msg}</Text>}
              </ErrorMessage>

              <StyledLabel htmlFor="type">Type</StyledLabel>
              <Field className='styled-select' as="select" name="type">
                <option value="">Select type</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>

              <ErrorMessage name="type">
                {(msg) => <Text>{msg}</Text>}
              </ErrorMessage>

              <StyledLabel htmlFor="description">Description</StyledLabel>
              <Field className='styled-select higher' name="description"  component="textarea"
                           rows="5" />
              <ErrorMessage name="description">
                {(msg) => <Text>{msg}</Text>}
              </ErrorMessage>

              <GreenBtn className='wider' type="submit"><h3>Submit</h3></GreenBtn>
              <ToastContainer
                  position="bottom-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
              />
            </StyledForm>
          </Formik>
        </FormArea>
      </FormSection>
    </>
  );
};

export default AddHeroForm;
