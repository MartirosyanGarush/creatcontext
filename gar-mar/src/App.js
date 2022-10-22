import React, { useState } from 'react';
import './App.css';
import About from './taskcomp1/About';
import Main from './taskcomp1/Main';

export const inputContext = React.createContext(null);

function App() {
  const [name, setname] = useState("")
  const[age,setAge]=useState("")
  let obj = {
    name,
    setname,
    age,
    setAge
  }

  return (
    <div className="App">
      <inputContext.Provider value={obj}>
        <Main />
        <About />
      </inputContext.Provider>

    </div>
  );
}

export default App;
