import React from "react";
import * as Yup from "yup";
import {
  FormArea,
  FormTitle,
  StyledField,
  StyledForm,
  StyledLabel,
  SubmitButton,
  FormSection,
  RandomAvatar,
  ColumnWrapper,
  RowWrapper,
  Text,
} from "./AddHeroForm.styles";
import { ErrorMessage, Formik } from "formik";
import CloseModalBtn from "../CloseModalBtn";

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
              avatar_url: Yup.string().required("Pole wymagane"),
              full_name: Yup.string().required("Pole wymagane"),
              description: Yup.string()
                .min(5, "Must be 5 charcaters or more")
                .max(200, "Must be 200 characters or less")
                .required("Pole wymagane"),
              type: Yup.string().required("Please select a type").oneOf(types),
            })}
            onSubmit={(values) => {
              console.log("submit!", values);
              // const { firstName, lastName, city, postalCode } = values;
              // const dataToSend = {
              //     first_name: firstName,
              //     last_name: lastName,
              //     city,
              //     zip_code: postalCode,
              //     order: orderSummary.books,
              // };
              // sendOrder(dataToSend)
              //     .then((res) => {
              //         const { data } = res.data;
              //         console.log("response", data);
              //         toast.success("✔️ Zamówienie zrealizowane pomyślnie!", {
              //             position: "bottom-center",
              //             autoClose: 5000,
              //             hideProgressBar: false,
              //             closeOnClick: true,
              //             pauseOnHover: true,
              //             draggable: true,
              //             progress: undefined,
              //         });
              //     })
              //     .catch(function (error) {
              //         console.log("error", error);
              //         toast.error(
              //             "❌️Coś poszło nie tak! Spróbuj ponownie później.",
              //             {
              //                 position: "bottom-center",
              //                 autoClose: 5000,
              //                 hideProgressBar: false,
              //                 closeOnClick: true,
              //                 pauseOnHover: true,
              //                 draggable: true,
              //                 progress: undefined,
              //             }
              //         );
              //     });
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
              <StyledField as="select" name="type">
                <option value="">Select type</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </StyledField>

              <ErrorMessage name="type">
                {(msg) => <Text>{msg}</Text>}
              </ErrorMessage>

              <StyledLabel htmlFor="description">Description</StyledLabel>
              <StyledField name="description" type="text" />
              <ErrorMessage name="description">
                {(msg) => <Text>{msg}</Text>}
              </ErrorMessage>

              <SubmitButton type="submit">Submit</SubmitButton>
              {/*<ToastContainer*/}
              {/*    position="bottom-center"*/}
              {/*    autoClose={5000}*/}
              {/*    hideProgressBar={false}*/}
              {/*    newestOnTop={false}*/}
              {/*    closeOnClick*/}
              {/*    rtl={false}*/}
              {/*    pauseOnFocusLoss*/}
              {/*    draggable*/}
              {/*    pauseOnHover*/}
              {/*/>*/}
            </StyledForm>
          </Formik>
        </FormArea>
      </FormSection>
    </>
  );
};

export default AddHeroForm;
