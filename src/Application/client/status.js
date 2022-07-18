import React from "react";
import { useNavigate } from "react-router-dom";

function StatusBar({ Submission, Ectraction }) {
  let navigate = useNavigate();
  return (
    <>
      <div className="card">
        <h4 className="mx-3 my-1 ">Approval Status</h4>
        <div className="mx-3">
          <div className="d-flex">
            <div className="stateChange"></div>
            <p>Level 1 - Customer Profile</p>
          </div>
          <div className="d-flex">
            <div className="stateChange active"></div>
            <p>Level 2 - Customer SMO/TMO Approval</p>
          </div>
          <div className="d-flex">
            <div className="stateChange"></div>
            <p>Level 3 - Bussiness Operations</p>
          </div>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-dark my-3"
          onClick={Submission}
        >
          Submit
        </button>
        {/* <button type="submit" className='btn btn-dark my-3' onClick={Ectraction}>fetch data</button> */}
        <button
          type="submit"
          className="btn btn-dark my-3"
          onClick={() => {
            navigate("/smo");
          }}
        >
          SMO
        </button>
      </div>
    </>
  );
}

export default StatusBar;
