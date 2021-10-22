import { withTheme } from 'styled-components';
import gsap from 'gsap/all';
import { useEffect } from 'react';
import './App.scss';
import Home from './pages/Home';

function App({theme}) {

  useEffect(() => {
    const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
    tl.to(".text", {y: "0%", duration: 1, stagger: 0.25});
    tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
    tl.to(".intro", {y: "-100%", duration: 1}, "-=1")
    tl.to(".statistics-card", {opacity: "1", duration: 3, stagger: .9, ease: "bounce.out"}, "+=1");
  }, [])

  return (
    <div className="App">
      <Home theme={theme}/>
      <div className="intro">
        <div className="text-container">
          <h1 className="hide">
            <span className="text">Pensa,</span>
          </h1>
          <h1 className="hide">
            <span className="text">credi</span>
          </h1>
          <h1 className="hide">
            <span className="text">sogna</span>
          </h1>
          <h1 className="hide">
            <span className="text">e osa</span>
          </h1>
        </div>
      </div>
      <div className="slider"></div>
    </div>
  );
}

export default withTheme(App);
