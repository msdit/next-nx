import { Story, Meta } from '@storybook/react'
import { Input, InputProps } from './input'

export default {
    component: Input,
    title: 'Input',
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const TextField = Template.bind({})
TextField.args = {
    id: 'name',
    label: 'Fist Name',
    disabled: false,
    value: '',
    placeholder: 'placeholder',
}
