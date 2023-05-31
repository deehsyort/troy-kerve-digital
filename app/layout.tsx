import './globals.css'
import Header from '../components/header'

/**
 * Metadata object for the RootLayout component.
 * @typedef {Object} Metadata
 * @property {string} title - The title of the page.
 * @property {string} description - The description of the page.
 */

/**
 * The metadata object for the RootLayout component.
 * @type {Metadata}
 */
export const metadata = {
  title: 'Troy - Kerve Digital',
  description: 'Front End Dev test for Kerve Digital',
}

/**
 * RootLayout component for the application.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements of the component.
 * @returns {JSX.Element} The rendered RootLayout component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  )
}