import { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export const Button = ({ children, type = 'button', ...props }: ButtonProps) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  )
}
