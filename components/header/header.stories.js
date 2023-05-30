import Header from '.'
import notes from '../header/notes.md'

export default {
    title: 'Components/Header',
    component: Header,
    parameters: {
        notes: notes,
        status: {
            type: 'preview',
        },
    },
}

const Template = (args) => <Header {...args} />

export const header = Template.bind({})