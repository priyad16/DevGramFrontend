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
        "http://ec2-13-53-32-227.eu-north-1.compute.amazonaws.com/auth/login",
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
    <div className="flex min-h-screen items-center justify-center bg-base-200 px-4 pb-24" data-theme="nord">
      <div className="card w-full max-w-md bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl font-bold text-primary mb-2">Welcome Back</h2>
          <p className="text-center text-base-content/70 mb-6">Please login to continue to your account.</p>

          <div className="space-y-4">
            {/* EMAIL FIELD */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered focus:input-primary w-full"
                placeholder="Type here"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
              />
              {errors.email && (
                <span className="text-error text-sm mt-1">{errors.email}</span>
              )}
            </div>

            {/* PASSWORD FIELD */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered focus:input-primary w-full"
                placeholder="Type here"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: "" }));
                }}
              />
              {errors.password && (
                <span className="text-error text-sm mt-1">{errors.password}</span>
              )}
            </div>
          </div>

          <div className="card-actions mt-6">
            <button
              className="btn btn-primary w-full text-lg shadow-md hover:shadow-lg transition-all"
              onClick={handleClick}
            >
              Login
            </button>
          </div>

          <div className="mt-4 text-center text-sm">
            <span className="text-base-content/70">New here? </span>
            <span
              className="link link-primary cursor-pointer font-medium hover:underline"
              onClick={() => navigate("/signup")}
            >
              Create an account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
