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

const Template = (args) => <Cta {...args} />

export const cta = Template.bind({})