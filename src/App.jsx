import React from 'react';
import './index.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Settings from './components/settings/settings';
import Login from './components/login/login';
import Support from './components/support/support';



export default function App() {

  return (
  <>
        <Settings />
        <Header />
        <Login/>
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Support/>
        <Contact />
        <Footer />
  </>            
  )
}

/* 

        <Settings />
        <Header />
        <Login/>
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Support/>
        <Contact />
        <Footer />
        */