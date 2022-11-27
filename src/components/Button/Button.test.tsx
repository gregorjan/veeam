import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders', () => {
    const screen = render(<Button>button</Button>)
    const button = screen.getAllByText('button')
    expect(button).toBeInTheDocument()
  })
})
