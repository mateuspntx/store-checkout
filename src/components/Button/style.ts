import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'border-only' | 'gray' | 'no-color';
  disabled?: boolean;
  rounded?: boolean;
}

const borderOnly = css`
  background-color: none;
  border: 1px solid ${(props) => props.theme.colors.quaternary};
`;

const noColor = css`
  background: none;
`;

const grayColor = css`
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
`;

const roundedButton = css`
  border-radius: 100px;
  padding: 0 20px;
`;

const disabledButton = css`
  background-color: none;
  filter: grayscale(100%);
`;

export const ButtonContainer = styled.button<ButtonProps>`
  border: 0;
  border-radius: 5px;
  padding: 5px;

  ${(props) => props.rounded && roundedButton}

  ${(props) => props.disabled && disabledButton}

  ${(props) => {
    switch (props.variant) {
      case 'no-color':
        return noColor;
      case 'gray':
        return grayColor;
      default:
        return borderOnly;
    }
  }}
`;
