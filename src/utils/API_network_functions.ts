import axios from "axios";

export const fetchHeroes = async () => {
    return await axios.get("http://localhost:4000/heroes");
};