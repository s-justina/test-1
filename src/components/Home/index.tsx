import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../reducers/root.reducer";
import React, { useEffect, useState } from "react";
import { fetchHeroes } from "../../utils/API_network_functions";
import {
  addFetchedHeroes,
  displayMoreHeroes,
} from "../../actions/heroes.actions";
import GreenBtn from "../GreenBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import HeroesList from "../HeroesList";
import LoadMoreHeroesBtn from "../LoadMoreHeroesBtn";
import Modal from "../Modal";
import AddHeroForm from "../AddHeroForm";
import { HeroesState } from "../../reducers/heroes.reducer";
import Spinner from "../Spinner";
import OptionalTableTitle from "../OptionalTableTitle";

const Home = () => {
  const { heroesListToDisplay, heroesList, currentPage, perPage } = useSelector<
    AppState,
    HeroesState
  >((state) => state.heroes);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (heroesList.length === 0) {
      fetchHeroes()
        .then((res) => {
          const { data } = res.data;

          setTimeout(() => {
            dispatch(addFetchedHeroes(data));
          }, 2000);
        })
        .catch(function (error) {
          console.log("error", error);
        });
    }
  }, []);

  const handleShowMorePosts = () => {
    dispatch(displayMoreHeroes());
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  if (heroesList.length === 0) {
    return (
      <div
          id={'spinner'}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div
      style={{
        pointerEvents: showModal ? "none" : "all",
        filter: showModal ? "blur(0.5px)" : undefined,
        height: "100vh",
      }}
    >
      <GreenBtn onClick={toggleModal}>
        {" "}
        <FontAwesomeIcon icon={faPlus} />
        <h3>Add hero</h3>
      </GreenBtn>
      <OptionalTableTitle />
      <HeroesList heroesToRender={heroesListToDisplay} />
      <LoadMoreHeroesBtn
        onClick={handleShowMorePosts}
        disabled={currentPage * perPage >= heroesList.length}
      />
      {showModal ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            opacity: 0.5,
          }}
        />
      ) : null}
      {showModal ? (
        <Modal>
          <AddHeroForm closeModal={toggleModal} />
        </Modal>
      ) : null}
    </div>
  );
};
export default Home;
