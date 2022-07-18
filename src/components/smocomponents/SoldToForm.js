import React from 'react'

function SoldToForm({SoldTo,handleChange}) {
 
  
    return (
 <>
 <div className="container">
  <form className="row " >
    <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Number</label>
    <input type="text" className="form-control" name="number" value={SoldTo.number} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" value={SoldTo.name} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Customer Type</label>
    <input type="text" className="form-control" name="customerType" value={SoldTo.customerType} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Phone</label>
    <input type="phone" className="form-control" name="phone" value={SoldTo.phone} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Primary Contact</label>
    <input type="text" className="form-control" name="primaryContact" value={SoldTo.primaryContact} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Primary Contact Email Id</label>
    <input type="email" className="form-control" name="primaryContactEmail" value={SoldTo.primaryContactEmail} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Street</label>
    <input type="text" className="form-control" name="street" value={SoldTo.street} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">City</label>
    <input type="text" className="form-control" name="city" value={SoldTo.city} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">State</label>
    <input type="text" className="form-control" name="stateProvince" value={SoldTo.stateProvince} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Zip/Postal</label>
    <input type="text" className="form-control" name="zipCode" value={SoldTo.zipCode} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Country</label>
    <input type="text" className="form-control" name="country" value={SoldTo.country} onChange={handleChange} required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  
  </form>
  </div>

 
   </> 
  )
}

export default SoldToForm