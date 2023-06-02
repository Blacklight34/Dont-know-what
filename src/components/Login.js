import React from "react";
import Left from './Left'
import Right from './Right'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="main_component">
      <div>
        <Left />
      </div>
      <div>
        <Right />
      </div>
    </div>
  );
};
export default Login;
