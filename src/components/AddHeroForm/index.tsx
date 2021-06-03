import React from "react";
import {
    FormArea,
    FormTitle,
    StyledField,
    StyledForm,
    StyledLabel,
    SubmitButton,
    FormSection, RandomAvatar, ColumnWrapper, RowWrapper
} from "./AddHeroForm.styles";
import {ErrorMessage, Formik} from "formik";
import CloseModalBtn from "../CloseModalBtn";


const AddHeroForm:React.FC<{
    closeModal: ()=>void,
    avocadoAvatar: string
}> = (props) => {

    return (
        <>
            <FormSection>
                <ColumnWrapper>
                    <RowWrapper>
                        <FormTitle>
                            Add Hero
                        </FormTitle>
                        <CloseModalBtn onClick={props.closeModal}/>
                    </RowWrapper>

                    <RandomAvatar src={props.avocadoAvatar} alt='Avatar'/>
                </ColumnWrapper>


                <FormArea>
                    <Formik
                        initialValues={{
                            avatar_url: "",
                            full_name: "",
                            description: "",
                            type: "",
                        }}
                        // validationSchema={Yup.object({
                        //     firstName: Yup.string().required("Pole wymagane"),
                        //     lastName: Yup.string().required("Pole wymagane"),
                        //     city: Yup.string()
                        //         .min(2, "Pole wymaga podania min. 2 znaków")
                        //         .required("Pole wymagane"),
                        //     postalCode: Yup.string()
                        //         .required("Pole wymagane")
                        //         .matches(
                        //             /[0-9]{2}\-[0-9]{3}/,
                        //             "Kod pocztowy musi mieć poprawny format: NN-NNN"
                        //         ),
                        // })}
                        onSubmit={(values) => {
                            console.log('submit!', values)
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
                            <StyledLabel htmlFor="firstName">Imię</StyledLabel>
                            <StyledField name="firstName" type="text" placeholder="Imię..." />
                            <ErrorMessage name="firstName">
                                {/*{(msg) => <Text>{msg}</Text>}*/}
                                {()=><div>error</div>}
                            </ErrorMessage>

                            <StyledLabel htmlFor="lastName">Nazwisko</StyledLabel>
                            <StyledField
                                name="lastName"
                                type="text"
                                placeholder="Nazwisko..."
                            />
                            <ErrorMessage name="lastName">
                                {/*{(msg) => <Text>{msg}</Text>}*/}
                               {()=><div>error</div>}
                            </ErrorMessage>

                            <StyledLabel htmlFor="city">Miejscowość</StyledLabel>
                            <StyledField
                                name="city"
                                type="city"
                                placeholder="Miejscowość..."
                            />
                            <ErrorMessage name="city">
                                {/*{(msg) => <Text>{msg}</Text>}*/}
                                {()=><div>error</div>}
                            </ErrorMessage>

                            <StyledLabel htmlFor="postalCode">Kod pocztowy</StyledLabel>
                            <StyledField
                                name="postalCode"
                                type="postalCode"
                                placeholder="Kod pocztowy..."
                            />
                            <ErrorMessage name="postalCode">
                                {/*{(msg) => <Text>{msg}</Text>}*/}
                                {()=><div>error</div>}
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