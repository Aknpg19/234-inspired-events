import HeroImg2 from '../components/HeroImg2';
import NavBar from '../components/NavBar';
import IntroImg from '/contact.webp';

const Contact = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeroImg2 heading='Contact Us' image={IntroImg} />
      </main>
    </>

  )
}

export default Contact;