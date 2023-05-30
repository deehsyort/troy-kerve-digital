import './globals.css'
import Header from '../components/header'

export const metadata = {
  title: 'Troy - Kerve Digital',
  description: 'Front End Dev test for Kerve Digital',
}

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