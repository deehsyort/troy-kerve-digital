/**
 * Container component.
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the container.
 * @returns {JSX.Element} The rendered container component.
 */

import propTypes from 'prop-types'

const Container = ({ children }) => {
    return (
        <>
            <div className="p-mobile md:p-tablet lg:p-desktop">{ children }</div>
        </>
    )
}

/**
 * PropTypes for the Container component.
 * @property {React.ReactNode} children - The content to be rendered inside the Container component.
 */
Container.propTypes = {
    children: propTypes.any
}

export default Container;