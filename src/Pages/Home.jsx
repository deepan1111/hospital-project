import React from 'react'
import Header from '../components/Header'
import "../Pages/homestyle.css"
const Home = () => {
  return (
    <div>
        <Header/>
          <section class="hero-section">
    <div class="hero-content">
      <h1>Your Health, Our Priority</h1>
      <p>Access healthcare services, support those in need, or make a donation today.</p>
      <div class="cards-container">
        <div class="card">
          <div class="icon">🏥</div>
          <h2>Find a Hospital</h2>
          <p>Locate the nearest hospital and get the care you need.</p>
          <a href="#" class="btn">Search Now</a>
        </div>
        <div class="card">
          <div class="icon">🤝</div>
          <h2>Needy</h2>
          <p>Support individuals in need of medical assistance.</p>
          <a href="#" class="btn">Learn More</a>
        </div>

        <div class="card">
          <div class="icon">❤️</div>
          <h2>Donate</h2>
          <p>Contribute to healthcare initiatives and save lives.</p>
          <a href="#" class="btn">Donate Now</a>
        </div>
      </div>
    </div>
  </section>
    </div>

    
  )
}

export default Home