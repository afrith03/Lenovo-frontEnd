import "./App.css";
import axios from "axios";
import Application from "./Application/application";
import Login from "./components/login";
//import Index from './app/Client';
//import Form from './components/Form2';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoPage from "./components/NoPage";
import Signin from "./components/Signin";
import { useState } from "react";
import SmoForm from "./components/SmoForm";
function App() {
  const [Loader, setLoader] = useState(false);
  const [Token, setToken] = useState("");
  const [Smodata, setSmodata] = useState("");

  //FORM SUBMISSION
  const [state, setState] = useState({
    name: "",
    street: "",
    city: "",
    zipCode: "",
    smo: "",
  });

  const Submission = (e) => {
    e.preventDefault();
    console.log("data before post", state);

    let config = {
      headers: {
        token: Token,
      },
    };

    axios
      .post(
        "http://192.168.68.143:5000/api/post/customerDetails",
        state,
        config
      )
      .then((res) => {
        console.log("data sent", res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar Token={Token} setToken={setToken} />
        <Routes>
          <Route
            path="/"
            element={
              <Login
                Smodata={Smodata}
                setSmodata={setSmodata}
                Token={Token}
                Loader={Loader}
                setLoader={setLoader}
                setToken={setToken}
              />
            }
          />

          <Route path="signin" element={<Signin />} />
          <Route
            path="application"
            element={
              <Application
                Smodata={Smodata}
                Token={Token}
                Submission={Submission}
                state={state}
                setState={setState}
              />
            }
          />
          <Route path="smo" element={<SmoForm Submission={Submission} />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

      {/* <Application/> */}
    </div>
  );
}

export default App;
