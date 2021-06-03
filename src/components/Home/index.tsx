import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../reducers/root.reducer";
import {IHero} from "../../interfaces";
import React, {useEffect, useState} from "react";
import {fetchHeroes} from "../../utils/API_network_functions";
import {addFetchedHeroes} from "../../actions/heroes.actions";
import GreenBtn from "../GreenBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import HeroesList from "../HeroesList";
import LoadDataBtn from "../LoadDataBtn";
import Modal from "../Modal";
import AddHeroForm from "../AddHeroForm";

const postsPerPage = 5;
let arrayForHoldingPosts: IHero[] = [];
let avocadoAvatar: string = "";

const Home = () => {
    const heroes = useSelector<AppState, IHero[]>(state => state.heroes);
    const [postsToShow, setPostsToShow] = useState<IHero[]>([]);
    const [next, setNext] = useState(postsPerPage);
    const [disable, setDisable] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()
    console.log('heroes: ', heroes);
    useEffect(() => {
        if (heroes.length === 0) {
            fetchHeroes()
                .then((res) => {
                    const {data} = res.data;

                    setTimeout(() => {
                        dispatch(addFetchedHeroes(data));
                    }, 2000);
                    loopWithSlice(0, postsPerPage, data)
                    const avocado = data.find((hero: IHero) => hero.full_name === "The Avocado");
                    avocadoAvatar = avocado ? avocado.avatar_url : "";
                })
                .catch(function (error) {
                    console.log("error", error);
                });
        }
    }, []);

    const loopWithSlice = (
        start: number,
        end: number,
        fetchedHeroes?: IHero[]
    ) => {
        const slicedPosts = fetchedHeroes
            ? fetchedHeroes.slice(start, end)
            : heroes.slice(start, end);
        arrayForHoldingPosts = [...slicedPosts];
        setPostsToShow(arrayForHoldingPosts);
    };

    const handleShowMorePosts = () => {
        loopWithSlice(0, next + postsPerPage);
        if (next < heroes.length) {
            setNext(next + postsPerPage);
        }

        console.log("next", next + postsPerPage);
        console.log("heroes", heroes.length);
        if (next + postsPerPage >= heroes.length) {
            setDisable(true);
        }
    };

    const toggleModal = () => {
        setShowModal(!showModal);
        if (next >= heroes.length) {
            loopWithSlice(0, next);

        } else {
            setDisable(false)
        }
    };

    if (heroes.length === 0) {
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
            <HeroesList heroesToRender={postsToShow}/>
            <LoadDataBtn onClick={handleShowMorePosts} disabled={disable}/>
            {showModal ? (
                <Modal>
                    <AddHeroForm closeModal={toggleModal} avocadoAvatar={avocadoAvatar}/>
                </Modal>
            ) : null}
        </>
    )
}

export default Home