import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
function Login({ Token, setToken, Loader, setLoader, setSmodata,Smodata}) {
 
   //LOGIN FUNCTION
   const navigate = useNavigate();
   const endpoint = 'http://192.168.68.143:5000/api/post/signin'
   const [LoginData, setLoginData] = useState({
     email: '',
     password: ''
   });
 
  function handleChange(evt) {
    const value = evt.target.value;
    setLoginData({
      ...LoginData,
      [evt.target.name]: value
    });
  }

  
  const Login = (e) => {
    e.preventDefault();
    setLoader(true)
    console.log("data before post", LoginData);
    axios.post(endpoint, LoginData)
      .then(
        (res) => {
          setLoader(false)
          console.log("recieved data", res);
          setSmodata(res.data.SMOs);
          // navigate('/application')
          // const tokenfrom = res.data.token;
          setToken(res.data.token);
          if (res.data.role === "Customer") {
            navigate('/application')
          } else if (res.data.role === "SMO/TMO") {
            navigate('/smo')
          }

        }
      ).catch((err) => {
        console.log('error', err);

        if (window.confirm("there is some Problem with the server Do you want to Retry...?")) {
          console.log('second login')
          Login();
          setLoader(false)
        }
        else {
          navigate('/')
          setLoader(false)
        }
      })
  }
 
  const onSignUp = () => {
    navigate('/signin')
  }
  useEffect(() => {
    if (Token === "") {
      // login page
      navigate("/")
    } else {
    }
  }, [Token, navigate]);
  return (<>
    <h1>Login - to Sanovo</h1>
    <div className="container">
      {JSON.stringify(Token)}
      <form className="row " onSubmit={Login} >
        <div className="col-md-6">
          <label htmlFor="validationCustom01" className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={LoginData.email} onChange={handleChange} required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom01" className="form-label">PassWord</label>
          <input type="password" className="form-control" name="password" value={LoginData.password} onChange={handleChange} required />
          <div className="valid-feedback">
            Looks good!
          </div>
          <button type='submit' className="btn btn-success my-5" disabled={Loader}>
            {Loader && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
            Login</button>

          <button onClick={onSignUp} className="btn btn-warning my-5">Don't Have an Account</button>
        </div>
      </form>
    </div>

  </>)

}

export default Login