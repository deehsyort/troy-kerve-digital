import propTypes from 'prop-types'

const Container = ({ children }) => {
    return (
        <>
            <div className="p-mobile md:p-tablet lg:p-desktop">{ children }</div>
        </>
    )
}

Container.propTypes = {
    children: propTypes.any
}

export default Container;