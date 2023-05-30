/**
 * @jest-environment jsdom
 */

import { createRoot } from 'react-dom/client'
import Hero from './index'

it('Hambvurger menu renders without crashing', () => {
    const container = document.createElement('div')
    const root = createRoot(container)
    root.render(<Hero />)
})
