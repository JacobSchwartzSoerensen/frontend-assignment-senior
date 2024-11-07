import styled from "@emotion/styled";
import React, { FC } from "react";

// Define the type for the button
type TButton = {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

// Define the styled button
const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primaryDarker};
  border-radius: ${props => props.theme.borders.radius};
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color .1s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.primaryDarker};
  }
`;

const Button: FC<TButton> = ({ children, onClick, ariaLabel, disabled }) => {
  return <StyledButton
    onClick={onClick}
    aria-label={ariaLabel}
    disabled={disabled}
  >
    {children}
  </StyledButton>;
};

export default Button;