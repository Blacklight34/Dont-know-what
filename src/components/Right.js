import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Right = () => {
  const [email, setEmail] = useState("");
  const [passType, setPassType] = useState("password");
  const [showPass, setShowPass] = useState(false);
  const [password, setPass] = useState("");
  const [prompt, setPrompt] = useState(false);

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
  const handleDetails = () => {
    if (password == null) {
      setPrompt(false);
    } else {
      setPrompt(true);
    }
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  return (
    <>
      <div className="right_component">
        <div>
          <h3 className="header">Login</h3>
        </div>
        <p>Welcome to &lt;product name&gt;. Please Login to your account</p>
        <h3>College Id </h3>
        {prompt ? (
          <input
            className="input_style_1_modal"
            type="text"
            placeholder="id@pvppcoe.ac.in"
          ></input>
        ) : (
          <input
            className="input_style_1"
            type="text"
            value={email}
            onChange={handleEmailInput}
            placeholder="id@pvppcoe.ac.in"
          ></input>
        )}
        <h3>Password</h3>
        {prompt ? (
          <div>
            <input
              className="input_style_2_modal"
              placeholder="password"
            ></input>
            <button className="show_pass">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/20/visible--v1.png"
                alt="visible--v1"
              />
            </button>
          </div>
        ) : (
          <div>
            <input
              className="input_style_2"
              type={passType}
              onChange={handlePass}
              value={password}
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
        )}
        {password.length < 8 && password.length != 0 ? (
          <div>minlength is 8 chars</div>
        ) : null}
        <div className="submission_login">
          <button className="submit" type="submit" onClick={handleDetails}>
            Login
          </button>
          <Link to="/signup">
            <p>Create Account</p>
          </Link>
        </div>
      </div>
      <div className="web_footer">
        <p>www.getflytechnologies.com</p>
      </div>
    </>
  );
};
export default Right;
