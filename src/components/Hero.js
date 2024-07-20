import main from "../images/main.jpeg";

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <img src={main} alt="" />
      <div className='hero-banner'>
        <h1>backroads app</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href='#tours' className='btn hero-btn '>
          explore tours
        </a>
      </div>
    </section>
  )
}
export default Hero
