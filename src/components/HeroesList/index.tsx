import React, {useEffect, useState} from "react";
import { IHero } from "../../interfaces";
import {
  Avatar,
  DetailsHero,
  HeroContainer,
  HeroDescription,
  IntroHero,
} from "./HeroesList.styles";

const HeroesList: React.FC<{
  heroesToRender: IHero[];
}> = ({ heroesToRender }) => {

  const renderListOfHeroes = () => {
    return heroesToRender.map((hero) => {
      return (
        <HeroContainer key={hero.id}>
          <IntroHero>
            <Avatar src={hero.avatar_url} alt={hero.full_name + " avatar"} />
            <DetailsHero>
              <h3>{hero.full_name}</h3>
              <p>{hero.type.name}</p>
            </DetailsHero>
          </IntroHero>
          <HeroDescription>{hero.description}</HeroDescription>
        </HeroContainer>
      );
    });
  };

  return (
    <>
      <div>{renderListOfHeroes()}</div>
    </>
  );
};

export default HeroesList;
