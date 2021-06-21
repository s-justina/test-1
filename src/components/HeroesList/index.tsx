import React from "react";
import { useHistory } from "react-router-dom";
import { IHero } from "../../interfaces";
import {
  Avatar,
  DetailsHero,
  HeroContainer,
  HeroDescription,
  IntroHero,
  Name,
  Type,
} from "./HeroesList.styles";

const HeroesList: React.FC<{
  heroesToRender: IHero[];
}> = ({ heroesToRender }) => {
  const history = useHistory();

  const onHeroClick = (heroID: string) => {
    history.push(`heroes/${heroID}`);
  };

  const renderListOfHeroes = () => {
    return heroesToRender.map((hero) => {
      return (
        <HeroContainer onClick={() => onHeroClick(hero.id)} key={hero.id}>
          <IntroHero>
            <Avatar src={hero.avatar_url} alt={hero.full_name + " avatar"} />
            <DetailsHero>
              <Name>{hero.full_name}</Name>
              <Type>{hero.type.name}</Type>
            </DetailsHero>
          </IntroHero>
          <HeroDescription>{hero.description}</HeroDescription>
        </HeroContainer>
      );
    });
  };

  return (
    <>
      <div style={{ marginBottom: "5rem" }}>{renderListOfHeroes()}</div>
    </>
  );
};

export default HeroesList;
