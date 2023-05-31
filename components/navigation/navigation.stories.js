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

/**
 * Template function for the navigation component.
 * @param {Object} args - The component arguments.
 * @returns {JSX.Element} The rendered navigation component.
 */
const Template = (args) => <Nav as="h1" {...args}>Nav</Nav>

export const nav = Template.bind({})