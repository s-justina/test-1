import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../reducers/root.reducer";
import {IHero} from "../../interfaces";
import React, {useEffect, useState} from "react";
import {fetchHeroes} from "../../utils/API_network_functions";
import {addFetchedHeroes, displayMoreHeroes, setHeroList} from "../../actions/heroes.actions";
import GreenBtn from "../GreenBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import HeroesList from "../HeroesList";
import LoadDataBtn from "../LoadDataBtn";
import Modal from "../Modal";
import AddHeroForm from "../AddHeroForm";
import {HeroesState} from "../../reducers/heroes.reducer";

let avocadoAvatar: string = "";

const Home = () => {
    const {heroesListToDisplay, heroesList, currentPage, perPage} = useSelector<AppState, HeroesState>(state => state.heroes);
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

                    const avocado = data.find((hero: IHero) => hero.full_name === "The Avocado");
                    avocadoAvatar = avocado ? avocado.avatar_url : "";
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
            <LoadDataBtn onClick={handleShowMorePosts} disabled={currentPage*perPage >= heroesList.length}/>
            {showModal ? (
                <Modal>
                    <AddHeroForm closeModal={toggleModal} avocadoAvatar={avocadoAvatar}/>
                </Modal>
            ) : null}
        </>
    )
}

export default Home