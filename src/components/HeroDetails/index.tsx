import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../reducers/root.reducer";
import { HeroesState } from "../../reducers/heroes.reducer";
import { useHistory } from "react-router-dom";
import { removeHero } from "../../actions/heroes.actions";
import { deleteHero } from "../../utils/API_network_functions";
import Modal from "../Modal";
import {
  BtnTxt,
  CloseBtnPosition,
  ColumnWrapper,
  DeleteBtn,
  DeleteBtnPosition,
  HeroAvatar,
  HeroDedailPosition,
  HeroDescription,
  HeroName,
  HeroTitle,
} from "./HeroDetails.styles";
import CloseModalBtn from "../CloseModalBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const HeroDetails = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const dispatch = useDispatch();
  const history = useHistory();

  const { heroesList } = useSelector<AppState, HeroesState>(
    (state) => state.heroes
  );
  const heroToDisplay = heroesList.find((hero) => hero.id === id);

  if (heroesList.length === 0) {
    return null;
  }

  if (!heroToDisplay) {
    history.push("/error");
    return null;
  }

  const onHeroDeletePress = () => {
    deleteHero(heroToDisplay)
      .then((res) => {
        dispatch(removeHero(heroToDisplay));
        history.push("/");
      })
      .catch((error) => console.warn("Error + ", error));
  };

  return (
    <>
      <Modal>
        <ColumnWrapper>
          <CloseBtnPosition>
            <CloseModalBtn
              onClick={() =>
                history.push("/", {
                  hideHeroDetailsModal: true,
                })
              }
            />
          </CloseBtnPosition>

          <HeroDedailPosition>
            <HeroAvatar src={heroToDisplay.avatar_url} alt="Avatar" />
            <HeroTitle>{heroToDisplay.full_name}</HeroTitle>
            <HeroName>{heroToDisplay.type.name}</HeroName>
            <HeroDescription>{heroToDisplay.description}</HeroDescription>
          </HeroDedailPosition>
          <DeleteBtnPosition>
            <DeleteBtn onClick={onHeroDeletePress}>
              <FontAwesomeIcon icon={faTrash} />
              <BtnTxt>Delete hero</BtnTxt>
            </DeleteBtn>
          </DeleteBtnPosition>
        </ColumnWrapper>
      </Modal>
    </>
  );
};

export default HeroDetails;
