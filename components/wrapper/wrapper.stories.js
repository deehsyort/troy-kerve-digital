import Wrapper from '.'
import notes from '../wrapper/notes.md'

export default {
    title: 'Components/Wrapper',
    component: Wrapper,
    parameters: {
        notes: notes,
        status: {
            type: 'preview',
        },
    },
}

/**
 * Template function for the wrapper component.
 * @param {Object} args - The component arguments.
 * @returns {JSX.Element} The rendered wrapper component.
 */
const Template = (args) => <Wrapper {...args}>Lorem ipsum</Wrapper>

export const wrapper = Template.bind({})