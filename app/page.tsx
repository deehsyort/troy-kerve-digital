import Wrapper from '../components/wrapper'
import Header from '../components/header'
import Hero from '../components/Hero'
import Container from '../components/container'
import Cta from '../components/cta'

export default function Home() {
  return (
    <Wrapper>
      <Header/>
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
