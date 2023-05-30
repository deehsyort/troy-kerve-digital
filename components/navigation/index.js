import Link from 'next/link'

const Nav = ({ className }) => {

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

Nav.defaultProps = {
    className: 'text-marble-title',
  };

export default Nav;