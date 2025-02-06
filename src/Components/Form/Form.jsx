import { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    console.log("Form submitted successfully:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="pb-4">
      <div className="heading text-light">
            <h1 className="fw-bold">Good Morning</h1>
            <p className="text-capitalize text-light fst-italic">
              Thank you for joining us, Please Register!
            </p>
          </div>
      <form onSubmit={handleSubmit} className="text-light">
        <label htmlFor="firstName" className="my-2">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          className="form-control py-2"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your First Name"
        />
        <label htmlFor="lastName" className="my-2">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          className="form-control py-2"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
        />
        <label htmlFor="email" className="my-2">
          E-mail
        </label>
        <input
          type="email"
          name="lastName"
          className="form-control py-2"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="example123@gmail.com"
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
          placeholder="Enter your password"
        />
        <label htmlFor="firstName" className="my-2">
          Confirm Password
        </label>
        <input
          type="text"
          name="password"
          className="form-control py-2"
          value={formData.password}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        {error && <p className="error-message">{error}</p>}
        <button
          type="submit"
          className="btn-submit mt-5 border-0 w-100 py-3 bg-warning text-light fw-bold rounded-2"
        >
          Submit
        </button>
        <p className="mt-3 text-center">
          Already have an account? <a href="/">Log in</a>
        </p>
      </form>
    </div>
  );
}

export default Form;
