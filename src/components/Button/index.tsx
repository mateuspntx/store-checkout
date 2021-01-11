import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  disabled?: boolean;
  variant?: 'border-only' | 'gray' | 'no-color';
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { variant, disabled, rounded, children, ...rest } = props;

  return (
    <ButtonContainer
      variant={variant}
      disabled={disabled}
      rounded={rounded}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
