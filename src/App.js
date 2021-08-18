// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import desktopImage from './img/glenn.png';
import mobileImage from './img/glennMobile.png';
import './App.css';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleWindowResize);
      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  }, []);

const date1 = new Date('10/23/2016');
const date2 = new Date();
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffTime + " milliseconds");
console.log(diffDays + " days");
  return (
    
    <div className="App">
      <header className="App-header">
      <div
>
<div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content">
            <p id = "sval">
                <h1 style={{color: 'firebrick'}}>Glenn has been dead for...{diffDays} days</h1>
                </p>
            </div>
</div>
</div> 
      </header>
    </div>
  );
}

export default App;
