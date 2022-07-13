import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
function Login() {
    const endpoint = 'http://192.168.68.143:5000/api/post/signin'
    const [LoginData, setLoginData] = useState({
        email:'',
        password:''
    });
    let navigate = useNavigate()
    function handleChange(evt) {
        const value = evt.target.value;
        setLoginData({
            ...LoginData,
            [evt.target.name]: value
        });
    }

    const Login = (e) => {
        e.preventDefault();
        console.log("data before post", LoginData);
        axios.post(endpoint, LoginData)
            .then(
                (res) => {
                    console.log("recieved data", res);
                    navigate('/application')
                }
            ).catch((err) => {
                console.log('error', err);
            })
        }

        const onSignUp = () => {
          navigate('/signin')
        }
  return (<>
    <h1>Login - to Sanovo</h1>
    <div className="container">
  <form className="row " >
    <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Email</label>
    <input type="text" className="form-control" name="email" value={LoginData.email} onChange={handleChange} required />
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
 <button onClick={Login} className="btn btn-success my-5">Login</button>
 <div onClick={onSignUp} className="btn btn-warning my-5">Don't Have an Account</div>
  </div>
  </form>
  </div>

    </> )

}

export default Login