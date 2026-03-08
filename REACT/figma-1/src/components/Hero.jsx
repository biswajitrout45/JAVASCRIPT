import { useState, useEffect } from 'react'
import '../styles/hero.css'
import heroImage from '../assets/hero.svg'

const slides = [
  {
    id: 1,
    title: 'Lessons and insights',
    highlight: 'from 8 years',
    subtitle: 'Where to grow your business as a photographer: site or social media?',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor',
    highlight: 'sit amet consectetur',
    subtitle: 'Adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Ut enim ad minim',
    highlight: 'veniam quis nostrud',
    subtitle: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.',
  },
]

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={slide.id} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
                <div className="hero-content">
                    <h1 className="hero-title">
                     {slide.title}
                     <br />
                     <span className="hero-highlight">{slide.highlight}</span>
                    </h1>
                    <p className="hero-subtitle">{slide.subtitle}</p>
                    <button className="hero-btn">Register</button>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="Hero illustration" />
                </div>
            </div>
          ))}
        </div>

        <div className="hero-pagination">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero