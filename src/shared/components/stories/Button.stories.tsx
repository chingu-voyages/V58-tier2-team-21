import type { Meta, StoryObj as Story } from '@storybook/react'
import Button from '../Button'


const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Click Me'
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary']
        }
    }
} satisfies Meta<typeof Button>

export const Primary: Story = {
    args: {
        variant: 'primary',
    }
}

export const Secondary:Story = {
    args: {
        variant: 'secondary'
    }
}

export default meta