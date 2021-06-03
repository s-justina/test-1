import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  width: 90%;
  background-color: #fff;
`;

export const IntroHero = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const Avatar = styled.img`
  margin-right: 1.5rem;
  width: 15%;
  height: 15%;
`;

export const DetailsHero = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroDescription = styled.div`
  font-size: 1rem;
`;
