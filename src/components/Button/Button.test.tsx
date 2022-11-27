import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders', () => {
    const screen = render(<Button>button</Button>)
    const button = screen.getByText('button')
    expect(button).toBeInTheDocument()
  })
  describe('type prop', () => {
    it('defaults to type button', () => {
      const screen = render(<Button>button</Button>)
      const button = screen.getByText('button')
      expect(button).toHaveAttribute('type', 'button')
    })
    it('overrides to type button', () => {
      const screen = render(<Button type="button">button</Button>)
      const button = screen.getByText('button')
      expect(button).toHaveAttribute('type', 'button')
    })
    it('overrides to type submit', () => {
      const screen = render(<Button type="submit">button</Button>)
      const button = screen.getByText('button')
      expect(button).toHaveAttribute('type', 'submit')
    })
    it('overrides to type reset', () => {
      const screen = render(<Button type="reset">button</Button>)
      const button = screen.getByText('button')
      expect(button).toHaveAttribute('type', 'reset')
    })
  })
  describe('variant prop', () => {
    it('defaults to primary variant', () => {
      const screen = render(<Button>button</Button>)
      const button = screen.getByText('button')
      expect(button).toMatchSnapshot()
    })
    it('overides to primary variant', () => {
      const screen = render(<Button variant="primary">button</Button>)
      const button = screen.getByText('button')
      expect(button).toMatchSnapshot()
    })
    it('overides to secondary variant', () => {
      const screen = render(<Button variant="secondary">button</Button>)
      const button = screen.getByText('button')
      expect(button).toMatchSnapshot()
    })
  })
})
