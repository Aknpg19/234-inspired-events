import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <span className='blur'></span>
        <span className='blur'></span>
        <span className='blur'></span>
        <span className='blur'></span>
        <span className='blur'></span>
        <span className='blur'></span>
        <span className='blur'></span>
      </div>
      <div className="content">
        <h1>The Luxe Event Connoisseurs!</h1>
        <p>&quot;Where moments become memories, dreams take flight, and every detail finds its perfect place. Welcome to a world of seamless events, exquisite rentals, and unforgettable journeys.&quot;</p>
        <div>
            <Link to='/' className='btn'>Book a free Consultation</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg;