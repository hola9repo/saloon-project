import React, { useState } from "react";
import "./SignupForm.css";
import { FaUser, FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signupData = {
      username,
      mobile,
      email,
      password,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
        // Assuming a successful signup, redirect to the home page
        navigate("/");
      } else {
        // Handle error responses
        alert("Signup failed. Please check your details and try again.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="mainsiginincontainer">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>SignUp</h1>
          <div className="input_box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input_box">
            <input
              type="number"
              placeholder="MobileNumber"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <FaMobile className="icon" />
          </div>
          <div className="input_box">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MdEmail className="icon" />
          </div>
          <div className="input_box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <RiLockPasswordFill className="icon" />
          </div>
          <button type="submit">SignUp</button>
          <div className="register">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <hr />
          <p className="or">or</p>
          <div className="input_box0">
            <FcGoogle className="icon0" />
            <p className="input1"> SignUp with Google</p>
          </div>
        </form>
      </div>
    </div>
  );
}
