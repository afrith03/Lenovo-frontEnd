import './App.css';
import Application from './Application/application';
import Login from './components/login';
//import Index from './app/Client';
//import Form from './components/Form2';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import NoPage from './components/NoPage';
import Signin from './components/Signin';
import { useState } from 'react';
function App() {
  
  const [Token, setToken] = useState("")
  return (
    <div className="App">



      <BrowserRouter>
        <Navbar Token={Token} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Login Token={Token} setToken={setToken} />}/>
          <Route path="signin" element={<Signin />} />
          <Route path="application" element={<Application />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>


      {/* <Application/> */}
    </div>
  );
}

export default App;
