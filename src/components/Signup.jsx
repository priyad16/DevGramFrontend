import {  useState } from "react";
import { useNavigate } from "react-router";

import axios from "axios";
function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignup = async () => {
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await axios.post(
        "http://localhost:3000/auth/signup",
        {
          firstName,
          lastName,
          email,
          password,
          gender,
        },
        {
          withCredentials: true,
        },
      );

      setSuccessMsg(res.data.message || "Signup successful");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setGender("");
      navigate("/login");
      

    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="card w-96 m-auto my-10 border border-slate-600 bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-bold">Create Account</h2>
        </div>

        <span className="text-center text-slate-500 -mt-4">
          Please fill in the details to continue
        </span>

        {/* FIRST NAME */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">First Name</legend>
          <input
            type="text"
            className="input"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </fieldset>

        {/* LAST NAME */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Last Name</legend>
          <input
            type="text"
            className="input"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </fieldset>

        {/* EMAIL */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input
            type="email"
            className="input"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        {/* PASSWORD */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        {/* GENDER */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Gender</legend>
          <select
            className="select select-bordered w-full"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option disabled value="">
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Other</option>
          </select>
        </fieldset>
        {/* SUCCESS MESSAGE */}
        {successMsg && (
          <div className="alert alert-success py-2 text-sm">{successMsg}</div>
        )}

        {/* ERROR MESSAGE */}
        {errorMsg && (
          <div className="alert alert-error py-2 text-sm">{errorMsg}</div>
        )}

        <div className="mt-6">
          <button
            className="btn btn-primary btn-block"
            onClick={() => handleSignup()}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
export default Signup;
