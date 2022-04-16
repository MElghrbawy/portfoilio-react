// import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import HeroSection from './hero';
import About from './about'
import Skills from './skills'
import Footer from './footer'
import Portfolio from './portfolio'

function App() {
  return (
 
    <>

    <HeroSection />
    <About />
    <Skills />
    <Portfolio/>
    <Footer />
    </>
  );
}

export default App;
