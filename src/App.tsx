import React, { useEffect, useState } from "react";
import { fetchHeroes } from "./utils/API_network_functions";
import HeroesList from "./components/HeroesList";
import AddHeroBtn from "./components/AddHeroBtn";
import { HeroseI } from "./interfaces";
import LoadDataBtn from "./components/LoadDataBtn";
import Modal from "./components/Modal";
import AddHeroForm from "./components/AddHeroForm";
const postsPerPage = 5;
let arrayForHoldingPosts: HeroseI[] = [];
let avocadoAvatar: string = "";

function App() {
  const [heroes, setHeroes] = useState<HeroseI[]>([]);
  const [postsToShow, setPostsToShow] = useState<HeroseI[]>([]);
  const [next, setNext] = useState(postsPerPage);
  const [disable, setDisable] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (heroes.length === 0) {
      fetchHeroes()
        .then((res) => {
          const { data } = res.data;
          setTimeout(() => {
            setHeroes(data);
          }, 2000);
          return data;
        })
        .then((heroes) => loopWithSlice(0, postsPerPage, heroes))
        .catch(function (error) {
          console.log("error", error);
        });
    }

    const avocado = heroes.find((hero) => hero.full_name === "The Avocado");
    avocadoAvatar = avocado ? avocado.avatar_url : "";
  }, []);
  //console.log("heroes", heroes);
  //console.log("postsToShow", postsToShow);

  const loopWithSlice = (
    start: number,
    end: number,
    fetchedHeroes?: HeroseI[]
  ) => {
    const slicedPosts = fetchedHeroes
      ? fetchedHeroes.slice(start, end)
      : heroes.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
    console.log("next", next + postsPerPage);
    console.log("heroes", heroes.length);
    if (next + postsPerPage >= heroes.length) {
      setDisable(!disable);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
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
      <AddHeroBtn onClick={toggleModal} />
      <HeroesList heroesToRender={postsToShow} />
      <LoadDataBtn onClick={handleShowMorePosts} disabled={disable} />
      {showModal ? (
        <Modal>
          <AddHeroForm closeModal={toggleModal} avocadoAvatar={avocadoAvatar} />
        </Modal>
      ) : null}
    </>
  );
}

export default App;
