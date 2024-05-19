import HeroImg2 from '../components/HeroImg2';
import NavBar from '../components/NavBar';
import IntroImg from '/contact.webp';

const Gallery = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeroImg2 heading='Our Gallery' image={IntroImg} />
      </main>
    </>
  )
}

export default Gallery;