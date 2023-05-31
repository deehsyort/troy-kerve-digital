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

/**
 * Template function for the header component.
 * @param {Object} args - The component arguments.
 * @returns {JSX.Element} The rendered header component.
 */
const Template = (args) => <Header {...args} />

export const header = Template.bind({})