import styled from "@emotion/styled";
import React, { FC } from "react";

type TCard = {
  title?: string;
  children: string;
}

const StyledCard = styled.div`
  padding: 16px;
  box-shadow: ${props => props.theme.shadows.default};
  border-radius: ${props => props.theme.borders.radius};
`;

const Card: FC<TCard> = ({ title, children }) => {
  return (
    <StyledCard>
      { title && (<h2>{title}</h2>)}
      {children}
    </StyledCard>
  );
};

export default Card;