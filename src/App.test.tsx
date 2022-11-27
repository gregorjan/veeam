import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders', () => {
    const screen = render(<App />)
    //* baseElement is a wrapper around App. To access App we need to grab first child.
    const app = screen.baseElement.children[0]
    expect(app.hasChildNodes()).toBe(true)
  })
})
