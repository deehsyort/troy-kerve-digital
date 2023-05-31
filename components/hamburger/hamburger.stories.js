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

/**
 * Template function for the hamburger component.
 * @param {Object} args - The component arguments.
 * @returns {JSX.Element} The rendered hamburger component.
 */
const Template = (args) => <Hamburger {...args} />

export const hamburger = Template.bind({})