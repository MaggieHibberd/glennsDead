// import logo from './logo.svg';
import background from "./img/glenn.png";
import './App.css';

function App() {

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
  style={{
    height:'auto',width:'100%',
    background: `url('${process.env.PUBLIC_URL}./img/glenn.png')`,
    size: '100% 100%'
  }}

>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
    <h1> Glenn has been dead...{diffDays} days</h1>

</div>
 
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
