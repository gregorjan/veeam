import { ComponentProps } from 'react'
import { styled } from '@linaria/react'
import { borderRadius, colors, rem, spacers } from '@styles'

interface StyledProps {
  variant?: 'primary' | 'secondary'
}
interface ButtonProps extends ComponentProps<'button'>, StyledProps {}

const StyledButton = styled.button<StyledProps>`
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 500;
  border-radius: ${borderRadius.sm};
  background-color: ${colors.transparent};
  padding: ${rem(spacers.spacer3)} ${rem(spacers.spacer4)};
  color: ${({ variant }) => (variant === 'primary' ? colors.white : colors.black)};
  background: ${({ variant }) => (variant === 'primary' ? colors.black : colors.transparent)};
  border: 1px solid ${({ variant }) => (variant === 'primary' ? colors.transparent : colors.black)};
`

export const Button = ({ children, type = 'button', variant = 'primary', ...props }: ButtonProps) => {
  return (
    <StyledButton type={type} variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}
