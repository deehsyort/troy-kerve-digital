import Link from 'next/link'

/**
 * Nav component.
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.className='text-marble-title'] - The additional class name for styling the Nav component.
 * @returns {JSX.Element} The rendered Nav component.
 */
const Nav = ({ className }) => {

    /**
     * The classes for styling the Nav component.
     * @type {string}
     */
    const classes = `flex justify-center text-base ${className} font-inter`

    return (
        <>
            <nav className="hidden sm:block">
                <ul className={classes}>
                    <li>
                        <Link className="uppercase" href="/">Strategy + &nbsp;</Link>
                    </li>
                    <li>
                        <Link className="uppercase" href="/">Creative + &nbsp;</Link>
                    </li>
                    <li>
                        <Link className="uppercase" href="/">Marketing + &nbsp;</Link>
                    </li>
                    <li>
                        <Link className="uppercase" href="/">Experience</Link>
                    </li>                                        
                </ul>
            </nav>
        </>
    )
}

/**
 * Default props for the Nav component.
 * @property {string} [className='text-marble-title'] - The additional class name for styling the Nav component.
 */
Nav.defaultProps = {
    className: 'text-marble-title',
  };

export default Nav;