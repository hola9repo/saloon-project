import React, {lazy, Suspense} from 'react'
import HeroPage from '../Home/HeroPage';
import Product from '../Product/Product';
import Gallery from '../Gallery/components/Gallery';
import Contact from '../ContactPage/Contact';
// import About from '../About/About'
// import Services from '../ServicesPage/Services';
const About = lazy(() => import('../About/About'));
const Service = lazy(() => import('../ServicesPage/Services'));

const Combopage = () => {
  return (
    <>
      <HeroPage />
      <Suspense fallback={<div>Loading About...</div>}>
         <About />
         <Service />
         <Product/>
         <Gallery/>
         <Contact/>
      </Suspense>
    </>
  )
}

export default Combopage