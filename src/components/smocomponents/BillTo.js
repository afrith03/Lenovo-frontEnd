import React from "react";

function BillToForm({
  BillTo,
  handleChange,
  billToOnClick,
  setBillTo,
  SoldTo,
}) {
  return (
    <>
      <div className="container">
        <hr />
        <h5>Bill to</h5>

        <div className={"form-check form-switch"}>
          <input
            className="form-check-input"
            onClick={() => {
              setBillTo(SoldTo);
            }}
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Bill to Same as Sold To?
          </label>
        </div>

        <form className="row ">
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Number
            </label>
            <input
              type="text"
              className="form-control"
              name="number"
              value={BillTo.number}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={BillTo.name}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Customer Type
            </label>
            <input
              type="text"
              className="form-control"
              name="customerType"
              value={BillTo.customerType}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Phone
            </label>
            <input
              type="phone"
              className="form-control"
              name="phone"
              value={BillTo.phone}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Primary Contact
            </label>
            <input
              type="text"
              className="form-control"
              name="primaryContact"
              value={BillTo.primaryContact}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Primary Contact Email Id
            </label>
            <input
              type="email"
              className="form-control"
              name="primaryContactEmail"
              value={BillTo.primaryContactEmail}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Street
            </label>
            <input
              type="text"
              className="form-control"
              name="street"
              value={BillTo.street}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={BillTo.city}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              name="stateProvince"
              value={BillTo.stateProvince}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Zip/Postal
            </label>
            <input
              type="text"
              className="form-control"
              name="zipCode"
              value={BillTo.zipCode}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              name="country"
              value={BillTo.country}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <button onClick={billToOnClick} className="btn btn-dark">
            COnsole log
          </button>
        </form>
      </div>
    </>
  );
}

export default BillToForm;
