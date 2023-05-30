import propTypes from 'prop-types'

const Heading = ({ as = 'h1', highlighted = '', highlightAll = false, children, className = 'text-marble' }) => {
    const validHeadingLevels = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    const safeHeading = as ? as.toLowerCase() : ''
    const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p'

    const headingText = highlighted
        ? children.replace(
            new RegExp(`\\b${highlighted}\\b`, highlightAll ? 'g' : ''),
            `<span class='text-slate-50'>${highlighted}>/span>`
        )
        : children

    const classes = `text-logo text-center font-montreal ${className}`;

    return (
        <Title
            className={classes}
            dangerouslySetInnerHTML={{
                __html: headingText,
            }}
        />
    )
}

Heading.propTypes = {
    as: propTypes.string.isRequired,
    children: propTypes.any.isRequired,
    className: propTypes.string,
    highlightAll: propTypes.bool,
    highlighted: propTypes.string
}

export default Heading;