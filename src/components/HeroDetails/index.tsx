import React from "react";
import { useParams } from 'react-router';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../reducers/root.reducer";
import {HeroesState} from "../../reducers/heroes.reducer";
import {ColumnWrapper, FormTitle, RandomAvatar } from "../AddHeroForm/AddHeroForm.styles";
import {CloseModalButton} from "../CloseModalBtn/CloseModalBtn.styles";
import {useHistory} from "react-router-dom";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { removeHero} from "../../actions/heroes.actions";
import {deleteHero} from "../../utils/API_network_functions";

const HeroDetails = () => {
    const {id} = useParams<{
        id: string
    }>();
    const dispatch = useDispatch()
    const history = useHistory();

    const {heroesList} = useSelector<AppState, HeroesState>(state => state.heroes);
    const heroToDisplay = heroesList.find(hero => hero.id === id);

    if(!heroToDisplay){
        return null
    }

    const onHeroDeletePress = () => {
        deleteHero(heroToDisplay).then(res => {
            debugger
            dispatch(removeHero(heroToDisplay))
            history.push('/')
        }).catch(error => console.warn("Error + ", error))
    }

    return (
        <div>
            <ColumnWrapper>
                <div style={{display: "flex", flexDirection: "column", height: '100vh'}}>
                    <div style={{flex: 1, textAlign: "end", padding: 10}}>
                        <CloseModalButton onClick={() => history.push('/')}>
                            <FontAwesomeIcon icon={faPlus} size='2x' />
                        </CloseModalButton>
                    </div>
                    <div style={{textAlign: "center", flex: 3}}><RandomAvatar src={heroToDisplay.avatar_url}
                                                                              alt="Avatar"/>
                        <FormTitle>{heroToDisplay.full_name}</FormTitle>
                        <FormTitle>{heroToDisplay.type.name}</FormTitle>
                        <div style={{margin: 10}} ></div>
                        <div style={{textAlign: "center"}}>
                            <p>{heroToDisplay.description}</p>
                        </div>
                    </div>
                    <div style={{flex: 1, display: "flex", justifyContent: 'center'}}>
                        <button onClick={onHeroDeletePress} style={{color: 'Red', alignSelf: 'flex-end'}} >Delete hero</button>
                    </div>
                </div>
            </ColumnWrapper>
        </div>
    )
}

export default HeroDetails