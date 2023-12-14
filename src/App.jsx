import React, {useState} from 'react';
import './App.css';

function App(){
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  const[currentTime, setCurrentTime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }  
  setInterval(UpdateTime, 1000);

  return(
    <div className='timer'>
      <h1>{date}</h1>
      <h1>{currentTime}</h1>
    </div> 
  );
};
export default App;