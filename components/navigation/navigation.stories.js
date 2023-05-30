import Nav from '.'
import notes from '../navigation/notes.md'

export default {
    title: 'Components/Nav',
    component: Nav,
    parameters: {
        notes: notes,
        status: {
            type: 'preview',
        },
    },
}

const Template = (args) => <Nav as="h1" {...args}>Nav</Nav>

export const nav = Template.bind({})