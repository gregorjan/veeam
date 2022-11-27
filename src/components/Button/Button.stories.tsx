import { Meta, StoryFn } from '@storybook/react'

import { Button } from './Button'

export default {
  component: Button,
  argTypes: {
    children: { control: 'text' },
    type: { control: 'radio', options: ['button', 'submit', 'reset'] },
  },
} as Meta<typeof Button>

export const Default: StoryFn<typeof Button> = (args) => <Button {...args} />
Default.storyName = 'Button'
Default.args = {
  children: 'button',
}
