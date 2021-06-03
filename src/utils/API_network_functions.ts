import axios from "axios";
import {IHero} from "../interfaces";

export const fetchHeroes = async () => {
    return await axios.get("http://localhost:4000/heroes");
};

export const addHero = async (heroData: any) => {
    return await axios.post("http://localhost:4000/heroes", heroData);
}