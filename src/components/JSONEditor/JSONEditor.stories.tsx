import { Meta, StoryFn } from '@storybook/react'

import { JSONEditor } from './JSONEditor'

export default {
  component: JSONEditor,
} as Meta<typeof JSONEditor>

export const Default: StoryFn<typeof JSONEditor> = (args) => <JSONEditor {...args} />
Default.storyName = 'JSONEditor'
