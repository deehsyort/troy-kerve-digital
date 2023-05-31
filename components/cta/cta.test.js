/**
 * @jest-environment jsdom
 */

import { createRoot } from 'react-dom/client'
import Cta from './index'

/**
 * Test to check if the cta renders without crashing.
 */
it('Cta renders without crashing', () => {
    const container = document.createElement('div')
    const root = createRoot(container)
    root.render(<Cta />)
})
