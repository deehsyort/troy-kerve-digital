import Heading from '.'
import notes from '../heading/notes.mdx'

/**
 * Template function for the heading component.
 * @param {Object} args - The component arguments.
 * @returns {JSX.Element} The rendered heading component.
 */
export default {
    title: 'Components/Heading',
    component: Heading,
    parameters: {
        notes: notes,
        status: {
            type: 'preview',
        },
    },
}

/**
 * Template function for the heading component.
 * @param {Object} args - The component arguments.
 * @returns {JSX.Element} The rendered heading component.
 */
const Template = (args) => <Heading as="h1" {...args}>Heading</Heading>

export const heading = Template.bind({})