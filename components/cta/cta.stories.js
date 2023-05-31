import Cta from '.'
import notes from '../cta/notes.md'

export default {
    title: 'Components/Cta',
    component: Cta,
    parameters: {
        notes: notes,
        status: {
            type: 'preview',
        },
    },
}

/**
 * Template function for the cta component.
 * @param {Object} args - The component arguments.
 * @returns {JSX.Element} The rendered cta component.
 */
const Template = (args) => <Cta {...args} />

export const cta = Template.bind({})