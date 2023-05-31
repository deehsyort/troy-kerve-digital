/**
 * @jest-environment jsdom
 */

import { createRoot } from 'react-dom/client'
import Nav from './index'

/**
 * Test to check if the navigation renders without crashing.
 */
it('Navigation renders without crashing', () => {
    const container = document.createElement('div')
    const root = createRoot(container)
    root.render(<Nav />)
})
