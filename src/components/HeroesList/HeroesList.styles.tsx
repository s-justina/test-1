import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  width: 90%;
  background-color: #fff;

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    min-height: 5rem;
    cursor: pointer;
  }
`;

export const IntroHero = styled.div`
  display: flex;
  flex: 5;
  align-items: center;
  margin-bottom: 0.5rem;

  @media (min-width: 700px) {
    margin: 0;
    justify-content: flex-start;
  }
`;

export const Avatar = styled.img`
  flex: 0.5;
  margin-right: 1.5rem;
  min-height: 3rem;
  min-width: 3rem;
  max-height: 4rem;
  max-width: 4rem;
  width: 15%;
  height: 15%;
`;

export const DetailsHero = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Name = styled.h3`
  flex: 3;
`;

export const Type = styled.p`
  flex: 2;
`;

export const HeroDescription = styled.div`
  flex: 3;
  font-size: 1rem;
`;
