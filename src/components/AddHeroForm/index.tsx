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
import { addHero } from "../../utils/API_network_functions";
import { useDispatch, useSelector } from "react-redux";
import { addCreatedHero } from "../../actions/heroes.actions";
import { AppState } from "../../reducers/root.reducer";
import { IHero, IHeroType } from "../../interfaces";
import { HeroesState } from "../../reducers/heroes.reducer";

const AddHeroForm: React.FC<{
  closeModal: () => void;
}> = (props) => {
  const dispatch = useDispatch();
  const heroTypes = useSelector<AppState, IHeroType[]>(
    (state) => state.heroTypes
  );
  const heroes = useSelector<AppState, HeroesState>((state) => state.heroes);
  const avocado = heroes.heroesList.find(
    (hero: IHero) => hero.full_name === "The Avocado"
  );
  const avocadoAvatar = avocado ? avocado.avatar_url : "";
  const options = heroTypes.map((heroType) => {
    return <option value={heroType.id}>{heroType.name}</option>;
  });

  return (
    <>
      <FormSection>
        <ColumnWrapper>
          <RowWrapper>
            <FormTitle>Add Hero</FormTitle>
            <CloseModalBtn onClick={props.closeModal} />
          </RowWrapper>
          <RandomAvatar src={avocadoAvatar} alt="Avatar" />
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
              type: Yup.string().required("Please select a type"),
            })}
            onSubmit={(
              { avatar_url, full_name, description, type },
              { resetForm }
            ) => {
              const dataToSend = {
                avatar_url,
                full_name,
                description,
                type,
              };

              addHero(dataToSend)
                .then((res) => {
                  const { data } = res;
                  console.log("response", res);
                  dispatch(addCreatedHero(data));
                  props.closeModal();
                })
                .catch(function (error) {
                  console.log("error", error);
                })
                .finally(() => resetForm());
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
              <Field className="styled-select" as="select" name="type">
                <option value="">Select type</option>
                {options}
              </Field>

              <ErrorMessage name="type">
                {(msg) => <Text>{msg}</Text>}
              </ErrorMessage>

              <StyledLabel htmlFor="description">Description</StyledLabel>
              <Field
                className="styled-select higher"
                name="description"
                component="textarea"
                rows="5"
              />
              <ErrorMessage name="description">
                {(msg) => <Text>{msg}</Text>}
              </ErrorMessage>

              <GreenBtn className="wider" type="submit">
                <h3>Submit</h3>
              </GreenBtn>
            </StyledForm>
          </Formik>
        </FormArea>
      </FormSection>
    </>
  );
};

export default AddHeroForm;
