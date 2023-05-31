import propTypes from 'prop-types'
import Image from 'next/image'

/**
 * Hero component.
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.hasHeading - Determines whether to display the heading in the hero section.
 * @returns {JSX.Element} The rendered Hero component.
 */
const Hero = ({ hasHeading }) => {
    return (
        <>
            <figure>
                <div>
                    <Image
                        alt='Vision mobile'
                        src='../../assets/vision-bg.svg'
                        fill
                        className="sm:block md:hidden lg:hidden object-cover p-mobile"
                    />                    
                    <Image
                        alt='Vision tablet'
                        src='../../assets/vision-bg-tablet.svg'
                        fill
                        className="hidden sm:hidden md:block lg:hidden object-cover p-tablet"
                    />
                    <Image
                        alt='Vision desktop'
                        src='../../assets/vision-bg-desktop.svg'
                        fill
                        className="hidden sm:hidden md:hidden lg:block object-cover p-desktop"
                    />
                </div>

                {hasHeading && (
                    <figcaption 
                        className="absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center" as="h1">
                            <p className="text-hero md:text-hero-md lg:text-hero-lg text-white font-playfair uppercase">Vision</p>
                            <p className="text-hero-subheader md:text-hero-subheader-md lg:text-hero-subheader-lg text-white font-playfair">
                                <span className='italic'>is best </span>experienced.
                            </p>
                    </figcaption>
                )}                
            </figure>
        </>
    )
}

/**
 * PropTypes for the Hero component.
 * @property {boolean} hasHeading - Determines whether to display the heading in the hero section.
 * @property {string} alt - Sets the text for the alt attribute
 * @property {string} src - Setrs the src path for the src attribute
 */
Hero.propTypes = {
    hasHeading: propTypes.bool,
    alt: propTypes.string,
    src: propTypes.string
}

export default Hero;