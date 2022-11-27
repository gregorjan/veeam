import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button/Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    contact: { control: 'radio', options: ['button', 'submit', 'reset'] },
  },
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (args) => <Button {...args} />
Default.storyName = 'Button'
Default.args = {
  children: 'button',
}
