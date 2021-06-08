import React from "react";
import {
  DescriptionSection,
  DescriptionTitle,
  HeroTitle,
  IntroSection,
  TableTitleWrapper,
  TypeTitle,
} from "./OptionalTableTitle.styles";

const OptionalTableTitle = () => {
  return (
    <TableTitleWrapper>
      <IntroSection>
        <HeroTitle>Heroes</HeroTitle>
        <TypeTitle>Type</TypeTitle>
      </IntroSection>
      <DescriptionSection>
        <DescriptionTitle>Description</DescriptionTitle>
      </DescriptionSection>
    </TableTitleWrapper>
  );
};

export default OptionalTableTitle;
