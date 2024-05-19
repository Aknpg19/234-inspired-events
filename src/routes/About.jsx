import HeroImg2 from '../components/HeroImg2';
import NavBar from '../components/NavBar';
import IntroImg from '/about.webp';

const About = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeroImg2 heading='About Us' image={IntroImg} />
      </main>
    </>
  )
}

export default About;