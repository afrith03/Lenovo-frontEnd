function Form({ state, handleChange, Smodata }) {
  return (
    <div className="container">
      <form className="row ">
        <div className="col-md-6">
          <label htmlFor="validationCustom01" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={state.firstName}
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
            value={state.street}
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
            value={state.city}
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom01" className="form-label">
            Zip / Postal code
          </label>
          <input
            type="text"
            className="form-control"
            name="zipCode"
            value={state.zipCode}
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationServer04" className="form-label">
            choose a smo
          </label>
          <select
            className="form-select"
            name="smo"
            value={state.smo}
            onChange={handleChange}
            aria-describedby="validationServer04Feedback"
            required
          >
            <option disabled>Choose a role</option>
            {Smodata.map((element, index) => {
              return <option key={index}>{element.name}</option>;
            })}
          </select>
        </div>
      </form>
    </div>
  );
}
export default Form;
