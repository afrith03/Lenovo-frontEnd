import React from 'react'

import { useState } from 'react'
import StatusBar from '../Application/client/status';
import BillToForm from './smocomponents/BillTo';
import SoldToForm from './smocomponents/SoldToForm';
function SmoForm({ Submission }) {
  const [BillTo, setBillTo] = useState({
    number: '',
    name: '',
    customerType: '',
    phone: '',
    primaryContact: '',
    primaryContactEmail: '',
    street: '',
    city: '',
    stateProvince: '',
    zipCode: '',
    country: ''

  });
  const [SoldTo, setSoldTo] = useState({
    number: '',
    name: '',
    customerType: '',
    phone: '',
    primaryContact: '',
    primaryContactEmail: '',
    street: '',
    city: '',
    stateProvince: '',
    zipCode: '',
    country: ''
  })
  function handleChangeBillTo(evt) {
    const value = evt.target.value;
    setBillTo({
      ...BillTo,
      [evt.target.name]: value
    });
  }
  function handleChangeSoldTo(evt) {
    const value = evt.target.value;
    setSoldTo({
      ...SoldTo,
      [evt.target.name]: value
    });
  }

  const billToOnClick =()=>{ 
    console.log(BillTo,SoldTo)
  }
  return (
    <>


      <div className='row' >
        <div className="col-8" style={{
        height: "100vh",
        overflow:"scroll",
        
      }}>
           <SoldToForm SoldTo={SoldTo} setSoldTo={setSoldTo} handleChange={handleChangeSoldTo} />
          <BillToForm BillTo={BillTo} SoldTo={SoldTo} setBillTo={setBillTo} handleChange={handleChangeBillTo} billToOnClick={billToOnClick} />
        </div>
        <div className="col-4"><StatusBar Submission={Submission} /></div>

      </div>

    </>
  )
}

export default SmoForm