import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  variant?: 'border-only' | 'gray' | 'no-color';
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = 'button',
    variant,
    disabled,
    rounded,
    children,
    ...rest
  } = props;

  return (
    <ButtonContainer
      className="pointer"
      type={type}
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
