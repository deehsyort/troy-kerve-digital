/**
 * @jest-environment jsdom
 */

import { createRoot } from 'react-dom/client'
import Container from './index'

/**
 * Test to check if the container renders without crashing.
 */
it('Container renders without crashing', () => {
    const container = document.createElement('div')
    const root = createRoot(container)
    root.render(<Container />)
})
