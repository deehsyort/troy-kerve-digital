import Image from 'next/image'

const Cta = () => {
    return (
        <>
            <div className="font-playfair absolute bottom-16 text-center w-full">
                <p className="text-cta text-white italic">Scroll to</p>
                <p className="text-cta-upper text-white uppercase mb-5">Experience</p>
                <button>
                    <Image
                        alt='Scroll to experience'
                        src='../../assets/arrow.svg'
                        width={28}
                        height={40}
                        className="m-auto"
                    />
                </button>
            </div>
        </>
    )
}

export default Cta;