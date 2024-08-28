import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./FooterPage/Footer";
import Header from "./Home/Header";
// import HeroPage from "./Home/HeroPage";
import Navbar from "./Home/Navbar";
import Nomatch from "./NoMatch/Nomatch";
// import Product from './Product/Product';
// import Service from './ServicesPage/Services';
// import LoginForm from './User/LoginForm/LoginForm';
// import SignupForm from './User/SignupForm/SignupForm';
// import Postadd from './Post-add/Postadd';
import Combopage from "./NoMatch/Combopage";
import Gallery from "./Gallery/components/Gallery";
import Contact from "./ContactPage/Contact";
// import Appointment from "./Appointment/Appointment";
const About = lazy(() => import("./About/About"));
const Services = lazy(() => import("./ServicesPage/Services"));
const Products = lazy(() => import("./Product/Product"));
const Postadds = lazy(() => import("./Post-add/Postadd"));
const Login = lazy(() => import("./User/LoginForm/LoginForm"));
const Signin = lazy(() => import("./User/SignupForm/SignupForm"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Combopage />} />
            <Route path="/home" element={<Combopage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/product" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signin />} />
            <Route path="/postad" element={<Postadds />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Nomatch />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>

      {/* <About /> */}
    </div>
  );
}

export default App;
