import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successful");
  };

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Login</h1>

      <form className="form-box" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;