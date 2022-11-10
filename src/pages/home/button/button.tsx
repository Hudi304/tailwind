import "./button.scss"


type ButtonVariants = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';

type ButtonPropTypes = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariants;
};

const ButtonVariantClasses: Record<ButtonVariants, string> = {
  danger:
    'button-base-danger',
  ghost:
    'button-base-ghost',
  primary:
    'button-base-primary',
  secondary:
    'button-base-secondary',
    // 'button-base-secondary-vanilla',
  success:
    'button-base-success',
};

const Button = ({
  children,
  className,
  variant,
  type = 'button',
  ...props
}: React.PropsWithChildren<ButtonPropTypes>) => {
  const typographyVariantClassName = ButtonVariantClasses[variant];
  return (
    <button
      className={
        `button-base ${typographyVariantClassName}`
      }
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
