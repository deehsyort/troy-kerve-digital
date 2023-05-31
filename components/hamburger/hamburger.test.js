/**
 * @jest-environment jsdom
 */

import { createRoot } from 'react-dom/client'
import Hamburger from './index'

/**
 * Test to check if the hamburger menu renders without crashing.
 */
it('Hamburger menu renders without crashing', () => {
    const container = document.createElement('div')
    const root = createRoot(container)
    root.render(<Hamburger />)
})
