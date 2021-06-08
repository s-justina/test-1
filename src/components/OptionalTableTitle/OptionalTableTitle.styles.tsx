import styled from "styled-components";

export const TableTitleWrapper = styled.div`
  display: none;
  margin: 0 auto;
  padding-left: 1rem;
  width: 90%;
  height: 1rem;
  font-size: 0.9rem;
  line-height: 2rem;
  font-weight: 700;
  color: #a0a0a0;

  @media (min-width: 700px) {
    display: flex;
    justify-content: flex-start;
  }
`;

export const IntroSection = styled.div`
  flex: 5;
  display: flex;
  justify-content: flex-start;
`;

export const HeroTitle = styled.p`
  flex: 4;

  @media (min-width: 1034px) {
    flex: 3.8;
  }
`;

export const TypeTitle = styled.p`
  flex: 2;
`;

export const DescriptionSection = styled.div`
  flex: 3.2;
`;

export const DescriptionTitle = styled.p``;
