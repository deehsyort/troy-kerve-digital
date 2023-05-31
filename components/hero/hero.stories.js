import Hero from '.'
import notes from '../hero/notes.md'

export default {
    title: 'Components/Hero',
    component: Hero,
    parameters: {
        notes: notes,
        status: {
            type: 'preview',
        },
    },
}

/**
 * Template function for the hero component.
 * @param {Object} args - The component arguments.
 * @returns {JSX.Element} The rendered hero component.
 */
const Template = (args) => <Hero as="h1" {...args}>Hero</Hero>

export const hero = Template.bind({})