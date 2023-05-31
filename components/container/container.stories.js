import Container from '.'
import notes from '../container/notes.md'

export default {
    title: 'Components/Container',
    component: Container,
    parameters: {
        notes: notes,
        status: {
            type: 'preview',
        },
    },
}

/**
 * Template function for the Container component.
 * @param {Object} args - The component arguments.
 * @returns {JSX.Element} The rendered Container component.
 */
const Template = (args) => <Container {...args} />

export const container = Template.bind({})