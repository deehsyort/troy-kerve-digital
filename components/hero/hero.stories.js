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

const Template = (args) => <Hero as="h1" {...args}>Hero</Hero>

export const hero = Template.bind({})