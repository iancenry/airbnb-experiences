import heroImg from '../images/hero-img.png'

const Hero = () => {
  return (
    <section className='hero'>
        <img src={heroImg} alt="" className='hero-img'/>
        <div className="hero-content">
            <h1>Online Experiences</h1>
            <p>Join unique intercative activities led by one-of-a-kind hosts - all without leaving your home.</p>
            <p>Scroll to see more &#10140;</p>
        </div>
    </section>
  )
}

export default Hero