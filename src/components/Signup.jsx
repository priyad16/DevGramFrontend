import { useState } from "react";
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
  const navigate = useNavigate();

  const handleSignup = async () => {
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await axios.post(
        "/auth/signup",
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
    <div className="flex min-h-screen items-center justify-center bg-base-200 px-4 pb-24" data-theme="nord">
      <div className="card w-full max-w-md bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl font-bold text-primary mb-2">Create Account</h2>
          <p className="text-center text-base-content/70 mb-6">Join us today! Please fill in your details.</p>

          <div className="space-y-4">
            {/* NAME ROW */}
            <div className="flex gap-4">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-medium">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="input input-bordered focus:input-primary w-full"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="input input-bordered focus:input-primary w-full"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                className="input input-bordered focus:input-primary w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* PASSWORD */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered focus:input-primary w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* GENDER */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Gender</span>
              </label>
              <select
                className="select select-bordered focus:select-primary w-full"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option disabled value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Other</option>
              </select>
            </div>
          </div>

          {/* MESSAGES */}
          {successMsg && (
            <div role="alert" className="alert alert-success mt-4 p-3 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{successMsg}</span>
            </div>
          )}

          {errorMsg && (
            <div role="alert" className="alert alert-error mt-4 p-3 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="card-actions mt-6">
            <button
              className="btn btn-primary w-full text-lg shadow-md hover:shadow-lg transition-all"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>

          <div className="mt-2 text-center text-sm">
            Already have an account? <span className="link link-primary cursor-pointer font-medium hover:underline" onClick={() => navigate("/login")}>Login here</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
