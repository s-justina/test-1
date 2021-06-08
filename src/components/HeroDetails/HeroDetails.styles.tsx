import styled from "styled-components";

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const CloseBtnPosition = styled.div`
  flex: 1;
  max-height: 3rem;
  text-align: end;
`;

export const HeroDedailPosition = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1.3rem;
`;

export const HeroAvatar = styled.img`
  margin: 1rem auto;
  width: 5rem;
  height: 5rem;
`;

export const HeroTitle = styled.h3`
  padding: 0.3rem;
  font-size: 1.5rem;
`;

export const HeroName = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

export const HeroDescription = styled.p`
  text-align: justify;
  text-align-last: center;
`;

export const DeleteBtnPosition = styled.div`
  flex: 1;
  margin: 0.2rem auto;
`;

export const DeleteBtn = styled.div`
  padding: 1rem;
  width: 10rem;
  color: #d22b2b;
  transition: 0.3s;

  @media (min-width: 700px) {
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
`;

export const BtnTxt = styled.span`
  padding-left: 0.7rem;
  font-weight: 700;
`;
