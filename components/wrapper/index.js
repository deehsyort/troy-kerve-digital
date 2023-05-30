import propTypes from 'prop-types'

const Wrapper = ({ children }) => {
    return (
        <>
            <div className="grid grid-rows-1 min-h-screen bg-offwhite">{ children }</div>
        </>
    )
}

Wrapper.propTypes = {
    children: propTypes.any
}

export default Wrapper;