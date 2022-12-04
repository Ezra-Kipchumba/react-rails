import React from 'react'

function Signup() {
  return (
    <div className="forms-page">
      <form className="forms">
        <br></br>
        <h2 className="title">Register</h2>
        <br></br>
        <br></br>
        <div className="form">
          <div className="inputfield">
            <input
              type="text"
              className="form-group form-control"
              placeholder="Fisrt Name"
            />
          </div>
          <div className="inputfield">
            <input
              type="text"
              className="form-group form-control"
              placeholder="Last Name"
            />
          </div>

          <div className="inputfield">
            <input
              type="text"
              className="form-group form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="inputfield">
            <input
              type="text"
              className="form-group form-control"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="inputfield">
            <input
              type="password"
              className="form-group form-control"
              placeholder="Password"
            />
          </div>
          <div className="inputfield">
            <input
              type="password"
              className="form-group form-control"
              placeholder="Confirm Password"
            />
          </div>
          <br></br>
          <div className="inputfield terms">
            <label className="check">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p>Agreed to terms and conditions</p>
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            // onClick={handleSubmit}
          >
            <a href="http://localhost:3000/portal" id="btn">
              Register
            </a>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup