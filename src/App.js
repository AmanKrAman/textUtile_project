import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';


// import {
//   Routes,
//   Route
 
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

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
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Navbar title="TestUtils" aboutText="About us" mode={mode} /> */}
      {/* you can directly navigate navbar and in that case your original title will be shown but 
in this case you can fix navbar and can change the title according to ypour requirements. similarly with any variables*/}
      <Navbar title="TestUtils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
               {/* ----------------------------------------------------------------- */}
      {/* <BrowserRouter>
      <div className="container my-3" >
          <Routes>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
          </Routes>
      </div>
    </BrowserRouter> */}
      {/* <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}/>} />
        </Routes>
      </div>
   </Router> */}
                {/* ----------------------------------------------------------- */}
        <div className="container my-3">
          {/* <Routes> */}
          {/* /users-->component1 
          /user/home/--> component2 */}
            {/* <Route exact path="/about" element={<About />}> </Route> */}
           <TextForm showAlert={showAlert} heading='Enter the text to analyze below.' mode={mode} />
          {/* </Routes> */}
        </div>
      
      {/* <About /> */}




    </>
  );

}

export default App;
