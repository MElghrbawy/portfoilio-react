// import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import HeroSection from './components/hero';
import About from './components/about'
import Skills from './components/skills'
import Footer from './components/footer'
import Portfolio from './components/portfolio'

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
