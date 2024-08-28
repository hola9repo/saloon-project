import './About.css'
import sl1 from './assets/slide1.jpeg'
import sl2 from './assets/slide2.jpg'
import sl3 from './assets/slide3.jpg'
import sl4 from './assets/slide4.jpeg'
import sl5 from './assets/slide5.jpg'
import style1 from './assets/style1.jpg'
import style2 from './assets/style2.jpg'


function App() {


  return (
    <>
      <h1 id='heading'>AboutUs</h1>
      <div class="hair-style">
        <div class="hair-style-image">
          <img src={style1} alt="" />
        </div>
        <div class="hair-style-section">
          <h2>HAIR CUTTING & STYLING</h2>
          <h1>Expert Hair Styling Services For Men</h1>
          <p>Sport the latest fashions and trends. Get your hair styled by our professional and expert hair stylists for men.</p>
          <button>BOOK NOW</button>
        </div>
      </div>

      <div class="hair-style">
        <div class="hair-style-section">
          <h2>BEARD TRIMMING & STYLING</h2>
          <h1>Professional Beard Styling Services For Men</h1>
          <p>Our professional barbers will provide you with the best beard styling services for you. Choose your look and express your style with fashionably trimmed beards.</p>
          <button>BOOK NOW</button>
        </div>
        <div class="hair-style-image2">
          <img src={style2} alt="" />
        </div>
      </div>

      <div id='team'><h1>Our Professionals</h1></div>
      <div class="logo-head"><h1>Meet The Team</h1></div>
      <div className="logos">


        <div className="logo-slide">
          <img src={sl1} alt="" />
          <img src={sl2} alt="" />
          <img src={sl3} alt="" />
          <img src={sl4} alt="" />
          <img src={sl5} alt="" />
        </div>
        <div className="logo-slide">
          <img src={sl1} alt="" />
          <img src={sl2} alt="" />
          <img src={sl3} alt="" />
          <img src={sl4} alt="" />
          <img src={sl5} alt="" />
        </div>
      </div>

    </>
  )
}

export default App
