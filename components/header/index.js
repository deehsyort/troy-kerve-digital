import Nav from '../navigation'
import Heading from '../heading'
import HamburgerMenu from '../hamburger'

/**
 * Header component.
 * @component
 * @returns {JSX.Element} The rendered Header component.
 */

const Header = () => {
    return (
        <>
            <header className='flex justify-between items-center h-nav absolute top-0 z-10 bg-offwhite w-full p-mobile-x md:p-tablet-x lg:p-desktop-x'>
                <Heading as="p">marble</Heading>
                <Nav/>
                <HamburgerMenu/>
            </header>
        </>
    )
}

export default Header;