import React, { useState } from "react";

export default function Login(props) {
  const [details, setDetails] = useState({ username: "", password: "" });
  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((prevValue) => {
      if (name === "username") {
        return {
          username: value,
          password: prevValue.password,
        };
      } else if (name === "password") {
        return {
          username: prevValue.username,
          password: value,
        };
      }
    });
  }
  return (
    <div className=" login-box">
        
      <div className="login">
        <form>
          <h1 className="mb-3">Enter Login Details</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="username"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
           
          </div>
          <div>
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="exampleInputPassword1"
              onChange={handleChange}
            />
            {props.pass&&<p style={{fontSize:"1rem",color:"red"}}>Enter Valid Credentials</p>}
          </div>
          <div className=" form-check" />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => {
              event.preventDefault();
              props.validate(details);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
