import Heading from '.'
import notes from '../heading/notes.md'

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

const Template = (args) => <Heading as="h1" {...args}>Heading</Heading>

export const heading = Template.bind({})