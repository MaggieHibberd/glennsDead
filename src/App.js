
import React, { useState, useEffect } from 'react';
import background from "./img/glenn.png";
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

const currentDate = new Date();
const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();
const dateString = currentDayOfMonth + "/" + (currentMonth + 1) + "/" + currentYear;

const today = new Date();
const date1 = new Date('10/23/2016');
const date2 = new Date('08/14/2021');
const date3 = new Date();
const diffTime = Math.abs(date3 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffTime + " milliseconds");
console.log(diffDays + " days");
  return (
    
    <div className="App">
      <header className="App-header">
     
      <div
  
  // style={{
  //   height:'auto',width:'100%',
  //   backgroundImage: `url('${process.env.PUBLIC_URL}./img/glenn.png')`,
  // }}

>
<div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            {/* <div className="App-content"> */}
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <h1>Glenn has been dead for...{diffDays} days</h1>
                </div>
            {/* </div> */}
</div>

{/* <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
    <h1> Glenn has been dead for...{diffDays} days</h1>
</div> */}
 
</div>
      {/* <div style={{ backgroundImage:`url(require(${background}))`}}>
      GLEN IS DEAD
    </div> */}
        {/* <img src={glenn} className="glenn" alt="glenn" />
        <p>
        
        </p> */}
        
        
      </header>
    </div>
  );
}

export default App;
