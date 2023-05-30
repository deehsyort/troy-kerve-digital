/**
 * @jest-environment jsdom
 */

import { createRoot } from 'react-dom/client'
import Heading from './index'

it('Hambvurger menu renders without crashing', () => {
    const container = document.createElement('div')
    const root = createRoot(container)
    root.render(<Heading />)
})
