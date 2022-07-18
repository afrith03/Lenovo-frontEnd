import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
function Signin() {
    const endpoint = 'http://192.168.68.143:5000/api/post/save'
    const [SigninData, setSigninData] = useState({
        email:'',
        password:'',
        name:'',
        phone:'',
        country:'',
        role:""
    });
    let navigate = useNavigate()

    function handleChange(evt) {
        const value = evt.target.value;
        setSigninData({
            ...SigninData,
            [evt.target.name]: value
        });
    }

    const Signin = (e) => {
        e.preventDefault();
        console.log("data before post", SigninData);
        axios.post(endpoint, SigninData)
            .then(
                (res) => {
                    console.log("recieved data", res);
                    navigate('/')
                }
            ).catch((err) => {
                console.log('error', err);
            })
        }
  return (<>
    <h1>Sign Up - to Sanovo</h1>
    <div className="container">
  <form className="row " >
    <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Email</label>
    <input type="text" className="form-control" name="email" value={SigninData.email} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Create new PassWord</label>
    <input type="password" className="form-control" name="password" value={SigninData.password} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" value={SigninData.name} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div></div>

    <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Phone Number</label>
    <input type="Number" className="form-control" name="phone" value={SigninData.phone} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div></div>

    <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Country</label>
    <input type="text" className="form-control" name="country" value={SigninData.country} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div></div>
   <div className="col-md-6">
  <label htmlFor="validationServer04" className="form-label">Role</label>
  <select className="form-select" name="role" value={SigninData.role} onChange={handleChange} aria-describedby="validationServer04Feedback" required>
    <option disabled>Choose a role</option>
  <option value="Customer">Customer</option>
  <option value="SMO/TMO">SMO/TMO</option>
  </select>
  <div id="validationServer04Feedback" className="invalid-feedback">
    Please select a valid Role.
  </div>
</div>


 <button onClick={Signin} className="btn btn-success my-1">Sign-in</button>
 <button onClick={()=>{navigate('/')}} className="btn btn-secondary">Back</button>
  </form>

  </div>

    </> )
}

export default Signin