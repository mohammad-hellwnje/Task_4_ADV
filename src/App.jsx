import './App.css';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import logo from './assets/img/logo.png';
import CardContainer from './components/CardContainer/CardContainer';
import About from './components/About/About';
import Service from './components/Service/Service';
import FormBox from './components/FormBox/FormBox';
import Department from './components/Department/Department';
import Testimonial from './components/Testimonial/Testimonial';
import Doctor from './components/Doctor/Doctor';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './components/Gallery/Gallery';
import Pricing from './components/Pricing/Pricing';
import Frquently from './components/Frquently/Frquently';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { navItems, topBarInfo } from './Data/NavData/NavData';
import { heroImages } from './Data/HeroData/HeroData';
import {usefulLinks ,companyInfo,services,hicSolutasetp,nobisIllum,socialLinks} from './Data/FooterData/FooterData'
function App() {


  return (
    <>
      <NavBar logoImage={logo} navItems={navItems} topBarInfo={topBarInfo} />
      <Hero images={heroImages} />
      <CardContainer />
      <About />
      <Service />
      <FormBox />
      <Department />
      <Testimonial />
      <Doctor />
      <Gallery />
      <Pricing />
      <Frquently />
      <Contact />
      <Footer 
        companyInfo={companyInfo} 
        usefulLinks={usefulLinks}
        services={services}
        hicSolutasetp={hicSolutasetp}
        nobisIllum={nobisIllum}
        socialLinks={socialLinks}
      />
    </>
  );
}

export default App;
