import Wrapper from '../components/wrapper'
import Hero from '../components/hero'
import Container from '../components/container'
import Cta from '../components/cta'

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Hero
          hasHeading
          alt="Hero Image" 
          src="../../assets/vision-bg.svg" 
        />
        <Cta/>
      </Container>
    </Wrapper>
  )
}
