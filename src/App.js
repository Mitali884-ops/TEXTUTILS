
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light') //whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode has been enabled", "success");
        document.title = "Textutils- Dark Mode";
        // setInterval(() => {
        //   document.title = "Textutils is amazing";
        // }, 2000);
        // setInterval(() => {
        //   document.title = "Install textutils now";
        // }, 1500);
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'whiite';
        showAlert("Light mode has been enabled", "success");
        document.title = "Textutils- Light Mode";
      }
  }
  return(
<>   
{/* <Navbar/>
<Navbar title="TextUtils1" aboutText="About Textutils"/> */}
{/* <Router> */}
 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>

<div className="container my-3">
{/* <Routes>
          <Route exact path="/about"
          element={<About />}>
              
          </Route> */}
          {/* <Route exact path="/" */}
              {<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> }
          {/* </Route> */}
{/* </Routes> */}
</div> 
{/* </Router>   */}
</>
  );
}

export default App;
