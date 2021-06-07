import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../reducers/root.reducer";
import React, {useEffect, useState} from "react";
import {fetchHeroes} from "../../utils/API_network_functions";
import {addFetchedHeroes, displayMoreHeroes} from "../../actions/heroes.actions";
import GreenBtn from "../GreenBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import HeroesList from "../HeroesList";
import LoadMoreHeroesBtn from "../LoadMoreHeroesBtn";
import Modal from "../Modal";
import AddHeroForm from "../AddHeroForm";
import {HeroesState} from "../../reducers/heroes.reducer";

const Home = () => {
    const {
        heroesListToDisplay,
        heroesList,
        currentPage,
        perPage
    } = useSelector<AppState, HeroesState>(state => state.heroes);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        if (heroesList.length === 0) {
            fetchHeroes()
                .then((res) => {
                    const {data} = res.data;

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
        dispatch(displayMoreHeroes())
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    if (heroesList.length === 0) {
        return (
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <h1>"Loading..."</h1>
            </div>
        );
    }

    return (
        <>
            <GreenBtn onClick={toggleModal}> <FontAwesomeIcon icon={faPlus}/>
                <h3>Add hero</h3></GreenBtn>
            <HeroesList heroesToRender={heroesListToDisplay}/>
            <LoadMoreHeroesBtn onClick={handleShowMorePosts} disabled={currentPage * perPage >= heroesList.length}/>
            {showModal ? (
                <Modal>
                    <AddHeroForm closeModal={toggleModal}
                    />
                </Modal>
            ) : null}
        </>
    )
}

export default Home