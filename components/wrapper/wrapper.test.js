/**
 * @jest-environment jsdom
 */

import { createRoot } from 'react-dom/client'
import Wrapper from './index'

/**
 * Test to check if the wrapper renders without crashing.
 */
it('Wrapper renders without crashing', () => {
    const container = document.createElement('div')
    const root = createRoot(container)
    root.render(<Wrapper />)
})
