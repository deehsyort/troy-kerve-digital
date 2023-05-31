import propTypes from 'prop-types'

/**
 * Heading component.
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.as='h1'] - The HTML element tag to be used for the heading.
 * @param {string} [props.highlighted=''] - The text to be highlighted within the heading.
 * @param {boolean} [props.highlightAll=false] - Determines whether to highlight all occurrences of the text or just the first.
 * @param {React.ReactNode} props.children - The content of the heading.
 * @param {string} [props.className='text-marble'] - The additional class name(s) for styling the heading.
 * @returns {JSX.Element} The rendered Heading component.
 */
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

/**
 * PropTypes for the Heading component.
 * @property {string} [as='h1'] - The HTML element tag to be used for the heading.
 * @property {React.ReactNode} children - The content of the heading.
 * @property {string} [className='text-marble'] - The additional class name(s) for styling the heading.
 * @property {boolean} [highlightAll=false] - Determines whether to highlight all occurrences of the text or just the first.
 * @property {string} [highlighted=''] - The text to be highlighted within the heading.
 */
Heading.propTypes = {
    as: propTypes.string.isRequired,
    children: propTypes.any.isRequired,
    className: propTypes.string,
    highlightAll: propTypes.bool,
    highlighted: propTypes.string
}

export default Heading;