import Hamburger from '.'
import notes from '../hamburger/notes.md'

export default {
    title: 'Components/Hamburger',
    component: Hamburger,
    parameters: {
        notes: notes,
        status: {
            type: 'preview',
        },
    },
}

const Template = (args) => <Hamburger {...args} />

export const hamburger = Template.bind({})