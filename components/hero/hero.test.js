/**
 * @jest-environment jsdom
 */

import { createRoot } from 'react-dom/client'
import Hero from './index'

/**
 * Test to check if the hero renders without crashing.
 */
it('Hero renders without crashing', () => {
    const container = document.createElement('div')
    const root = createRoot(container)
    root.render(<Hero />)
})
