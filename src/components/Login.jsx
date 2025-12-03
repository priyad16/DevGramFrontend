import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userslice";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (res.data.message) {
        const msg = res.data.message;

        if (msg.includes("user"))
          setErrors((prev) => ({ ...prev, email: msg }));

        if (msg.includes("password"))
          setErrors((prev) => ({ ...prev, password: msg }));

        return;
      }

      dispatch(addUser(res.data));
      setErrors({ email: "", password: "" });
      navigate("/feed");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card w-96 m-auto my-10 border border-slate-600 bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-bold">Welcome back!</h2>
        </div>
        <span className="text-center text-slate-500 -mt-4">
          Please login to continue
        </span>

        {/* EMAIL FIELD */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input
            type="text"
            className="input"
            placeholder="Type here"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
          />

          {/* NEW: Display email error */}
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </fieldset>

        {/* PASSWORD FIELD */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input
            type="password"
            className="input"
            placeholder="Type here"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: "" }));
            }}
          />

          {/* NEW: Display password error */}
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </fieldset>

        <div className="mt-6">
          <button className="btn btn-primary btn-block" onClick={handleClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
