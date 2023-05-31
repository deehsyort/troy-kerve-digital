/**
 * @jest-environment jsdom
 */

import { createRoot } from 'react-dom/client'
import Heading from './index'

/**
 * Test to check if the heading renders without crashing.
 */
it('Heading renders without crashing', () => {
    const container = document.createElement('div')
    const root = createRoot(container)
    root.render(<Heading />)
})
