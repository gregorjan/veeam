import { ComponentProps } from 'react'
import { styled } from '@linaria/react'

interface ButtonProps extends ComponentProps<'button'> {}

const StyledButton = styled.button``

export const Button = ({ children, type = 'button', ...props }: ButtonProps) => {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  )
}
