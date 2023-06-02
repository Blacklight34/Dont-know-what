import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const RightSignup = () => {
  const [email, setEmail] = useState("");
  const [passType, setPassType] = useState("password");
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handleClick = () => {
    setShowPass(!showPass);
    if (showPass == true) {
      setPassType("password");
    } else {
      setPassType("text");
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleConfirmPass = (e) => {
    setConfirmPassword(e.target.value)
  }
  return (
    <>
      <div className="right_component">
        <div>
          <h3 className="header">Sign Up</h3>
        </div>
        <p>Welcome to E-Commerce. Create a New Account</p>
        <h3>Email Id </h3>
        <input
          className="input_style_1"
          type="text"
          value={email}
          onChange={handleEmailInput}
          placeholder="id@pvppcoe.ac.in"
        ></input>
        <h3>Password</h3>
        <div>
          <input
            className="input_style_2"
            type={passType}
            onChange={handlePassword}
            placeholder="password"
          ></input>
          <button onClick={handleClick} className="show_pass">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-glyphs/20/visible--v1.png"
              alt="visible--v1"
            />
          </button>
        </div>
        <h3>Confirm Password</h3>
        <div>
          <input
            className="input_style_2"
            type={passType}
            onChange={handleConfirmPass}
            placeholder="confirm"
          ></input>
          <button onClick={handleClick} className="show_pass">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-glyphs/20/visible--v1.png"
              alt="visible--v1"
            />
          </button>
        </div>
        {
            (confirmPassword == password) ? null : <div>Passwords Dont Match</div>
        }
        <div className="submission_login">
          <button className="submit" type="submit">
            Sign Up
          </button>
          <Link to="/"><p>Already have a Account</p></Link>
        </div>
      </div>
      <div className="web_footer">
       <p>www.getflytechnologies.com</p>
      </div>
    </>
  );
};
export default RightSignup;
