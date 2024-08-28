import React from 'react'
import './Services.css'

function Services() {
  return (
    <div className='services-container'>
      {/* READ MORE */}
      <div className="read-more-cards-container">
        {/* Our Services */}
        <h1 className='our-services-quote'>OUR SERCVICES</h1>
        <div className="read-more-cards-wrapper">

          {/* hair styling */}
          <div className="read-more-card">
            <img className='read-more-img' src={require('./images/hair-styling.jpg')} alt="" />
            <h2 className='read-more-title'>HAIR STYLING</h2>
            <p className='read-more-discription'>Our expert stylists will give you the best hair care and styling services</p>
            <a className='read-more-btn' href=" ">READ MORE</a>
          </div>
          {/* hair treatment */}
          <div className="read-more-card">
            <img className='read-more-img' src={require('./images/hair-treatment.jpg')} alt="" />
            <h2 className='read-more-title'>HAIR TREATMENT</h2>
            <p className='read-more-discription'>Our expert stylists will give you the best hair care and styling services</p>
            <a className='read-more-btn' href=" ">READ MORE</a>
          </div>
          {/* beard cutting */}
          <div className="read-more-card">
            <img className='read-more-img' src={require('./images/beard-cutting.jpg')} alt="" />
            <h2 className='read-more-title'>BEARD CUTTING</h2>
            <p className='read-more-discription'>Our expert stylists will give you the best trimming and styling services</p>
            <a className='read-more-btn' href=" ">READ MORE</a>
          </div>
          {/* hair cutting */}
          <div className="read-more-card">
            <img className='read-more-img' src={require('./images/hair-cutting.jpg')} alt="" />
            <h2 className='read-more-title'>HAIR CUTTING</h2>
            <p className='read-more-discription'>Our expert stylists will give you the best hair care and styling services</p>
            <a className='read-more-btn' href=" ">READ MORE</a>
          </div>
          {/* hair trimming */}
          <div className="read-more-card">
            <img className='read-more-img' src={require('./images/hair-triming.jpg')} alt="" />
            <h2 className='read-more-title'>HAIR TRIMMING</h2>
            <p className='read-more-discription'>Our expert stylists will give you the best hair care and styling services</p>
            <a className='read-more-btn' href=" ">READ MORE</a>
          </div>
          {/* beard styling */}
          <div className="read-more-card">
            <img className='read-more-img' src={require('./images/beard-styling.jpg')} alt="" />
            <h2 className='read-more-title'>BEARD STYLING</h2>
            <p className='read-more-discription'>Our expert stylists will give you the best trimming and styling services</p>
            <a className='read-more-btn' href=" ">READ MORE</a>
          </div>

        </div>
      </div>

      {/* OUR PREMIUM SERVICES */}
      <div className="our-services-container">
        <h3 className='our-services-banner'>OUR SERVICES</h3>

        {/* We Bring Out Your Inner Style */}
        <h1 className='our-services-quote'>
          Premium services
        </h1>

        <div className="our-services-wrapper">

          {/* card 1 */}
          <div className="our-services-card">
            <img src={require('./images/premiumServicesImg/rebonding.jpg')} alt="" className="service-img" />

            <div className="service-type">
              <h3>
                STRAIGHTENING
                <br />
                REBOUNDING PERMING
              </h3>
            </div>

            <div className="service-charge">
              <span className="price">
                $20
              </span>
            </div>

          </div>

          {/* card 2 */}
          <div className="our-services-card">

            <img src={require('./images/premiumServicesImg/keratine.jpg')} alt="" className="service-img" />

            <div className="service-type">
              <h3>
                KERATINE
                <br />
                TREATMENT
              </h3>
            </div>

            <div className="service-charge">
              <span className="price">
                $20
              </span>
            </div>

          </div>

          {/* card 3 */}
          <div className="our-services-card">

            <img src={require('./images/premiumServicesImg/shaving.jpg')} alt="" className="service-img" />

            <div className="service-type">
              <h3>
                SHAVING &
                <br />
                TRIMING
              </h3>
            </div>

            <div className="service-charge">
              <span className="price">
                $20
              </span>
            </div>

          </div>

          {/* card 4 */}
          <div className="our-services-card">

            <img src={require('./images/premiumServicesImg/bridal.jpg')} alt="" className="service-img" />

            <div className="service-type">
              <h3>
                BRIDAL
                <br />
                MAKEUP
              </h3>
            </div>

            <div className="service-charge">
              <span className="price">
                $20
              </span>
            </div>

          </div>

          {/* card 5 */}
          <div className="our-services-card">

            <img src={require('./images/premiumServicesImg/de-stress-spa.jpg')} alt="" className="service-img" />

            <div className="service-type">
              <h3>
                DE-STRESS
                <br />
                SPA
              </h3>
            </div>

            <div className="service-charge">
              <span className="price">
                $20
              </span>
            </div>

          </div>

          {/* card 6 */}
          <div className="our-services-card">

            <img src={require('./images/premiumServicesImg/moisturization.jpg')} alt="" className="service-img" />

            <div className="service-type">
              <h3>
                ADVANCED
                <br />
                HAIR MOISTURISING
              </h3>
            </div>

            <div className="service-charge">
              <span className="price">
                $20
              </span>
            </div>

          </div>

          {/* card 7 */}
          <div className="our-services-card">

            <img src={require('./images/premiumServicesImg/scalp-treatmeant.jpg')} alt="" className="service-img" />

            <div className="service-type">
              <h3>
                SCALP
                <br />
                TREATMENT
              </h3>
            </div>

            <div className="service-charge">
              <span className="price">
                $20
              </span>
            </div>

          </div>

          {/* card 8 */}
          <div className="our-services-card">

            <img src={require('./images/premiumServicesImg/hair-volumanizer.jpg')} alt="" className="service-img" />

            <div className="service-type">
              <h3>
                HAIR
                <br />
                VOLUMIZING
              </h3>
            </div>

            <div className="service-charge">
              <span className="price">
                $20
              </span>
            </div>

          </div>

          {/* card 9 */}
          <div className="our-services-card">

            <img src={require('./images/premiumServicesImg/manicure.jpg')} alt="" className="service-img" />

            <div className="service-type">
              <h3>
                SPA
                <br />
                MANICURE
              </h3>
            </div>

            <div className="service-charge">
              <span className="price">
                $20
              </span>
            </div>

          </div>

          {/* card 10 */}
          <div className="our-services-card">

            <img src={require('./images/premiumServicesImg/pedicure.jpg')} alt="" className="service-img" />

            <div className="service-type">
              <h3>
                SPA
                <br />
                PEDICURE
              </h3>
            </div>

            <div className="service-charge">
              <span className="price">
                $20
              </span>
            </div>

          </div>

          {/* card 11 */}
          <div className="our-services-card">

            <img src={require('./images/premiumServicesImg/rejuvenation.jpg')} alt="" className="service-img" />

            <div className="service-type">
              <h3>
                BODY
                <br />
                REJUVENATION
              </h3>
            </div>

            <div className="service-charge">
              <span className="price">
                $20
              </span>
            </div>

          </div>

          {/* card 12 */}
          <div className="our-services-card">

            <img src={require('./images/premiumServicesImg/waxing-3.jpg')} alt="" className="service-img" />

            <div className="service-type">
              <h3>
                BODY
                <br />
                WAXING
              </h3>
            </div>

            <div className="service-charge">
              <span className="price">
                $20
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Services