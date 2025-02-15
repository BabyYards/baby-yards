type ButtonSize = 'small' | 'medium' | 'large' ;
type ButtonVariant = 'filled' | 'gradient' | 'outlined' | 'text' ;

interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
}
