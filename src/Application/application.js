import React, { useState } from 'react'
import Form from './client/Form2'
import StatusBar from './client/status'
import axios from 'axios';

function Application() {
    const [state, setState] = useState({
        name: "",
        street: "",
        city: "",
        zipCode: ""
    });
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    const Submission = (e) => {
        e.preventDefault();
        console.log("data before post", state);
        axios.post('http://192.168.68.143:5000/api/post/save', state)
            .then(
                (res) => {
                    console.log("data sent", res)
                }
            ).catch((err) => {
                console.log('error', err);
            })
    }
    const Ectraction = () => {
        axios.get('http://192.168.68.143:5000/api/get/fetch')
        .then((res) => {
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='row'>
            <div className="col-8"><Form state={state} setState={setState} handleChange={handleChange} /></div>
            <div className="col-4"><StatusBar Submission={Submission} Ectraction={Ectraction} /></div>
        </div>
    )
}

export default Application