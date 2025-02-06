import { useState } from "react";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({

    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return;
    }

    console.log("Login successful:", formData);
    alert("Login successful!");

    // reset the form data
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="pb-4">
      <div className="container text-light message">
      <h1>Welcome Back!</h1>
      <p className="fst-italic">
        Please Login In.....
      </p>
      </div>
      <form onSubmit={handleSubmit} className="text-light">  
        <label htmlFor="email" className="my-2">
          E-mail
        </label>
        <input
          type="email"
          name="lastName"
          className="form-control py-2"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <label htmlFor="password" className="my-2">
          Password
        </label>
        <input
          type="text"
          name="password"
          className="form-control py-2"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        />
      
        {error && <p className="error-message">{error}</p>}
        <button
          type="submit"
          className="btn-submit mt-5 border-0 w-100 py-3 bg-warning text-light fw-bold rounded-2"
        >
          Login
        </button>
        <p className="mt-3 text-center">
          Don&apos;t have an account? <a href="/">Register</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
