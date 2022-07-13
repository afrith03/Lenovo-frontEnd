import './App.css';
import Application from './Application/application';
import Login from './components/login';
//import Index from './app/Client';
//import Form from './components/Form2';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import NoPage from './components/NoPage';
import Signin from './components/Signin';
function App() {
  return (
    <div className="App">



      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}/>
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
