import propTypes from 'prop-types'

/**
 * Wrapper component.
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the Wrapper component.
 * @returns {JSX.Element} The rendered Wrapper component.
 */
const Wrapper = ({ children }) => {
    return (
        <>
            <div className="grid grid-rows-1 min-h-screen bg-offwhite">{ children }</div>
        </>
    )
}

/**
 * PropTypes for the Wrapper component.
 * @property {React.ReactNode} children - The content to be rendered inside the Wrapper component.
 */
Wrapper.propTypes = {
    children: propTypes.any
}

export default Wrapper;