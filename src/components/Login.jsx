import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("kanti@gmail.com");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("Kanti@123");
  const [error, setError] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user was redirected from a protected route
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data));
      navigate(from, { replace: true });
    } catch (error) {
      setError(error?.response?.data);
    }
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/profile");
    } catch (error) {
      setError(error?.response?.data || "something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-base-200 to-base-100">
      <div className="card card-bordered bg-neutral border border-base-200 shadow-2xl rounded-xl w-96 my-auto">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl font-bold mb-2 text-neutral-content">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>

          {/* Show redirect message if user was redirected */}
          {from !== "/" && (
            <div className="alert alert-warning mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <span>Please log in to access {from}</span>
            </div>
          )}

          {!isLoginForm && (
            <>
              <fieldset className="fieldset mb-2">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  value={firstName}
                  type="text"
                  className="input input-bordered input-primary w-full"
                  placeholder="Enter first name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset mb-2">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  value={lastName}
                  type="text"
                  className="input input-bordered input-primary w-full"
                  placeholder="Enter last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>
            </>
          )}
          <fieldset className="fieldset mb-2">
            <legend className="fieldset-legend">Email ID</legend>
            <input
              value={emailId}
              type="text"
              className="input input-bordered input-primary w-full"
              placeholder="enter emailId id"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset mb-2">
            <legend className="fieldset-legend">Password</legend>
            <input
              value={password}
              type="password"
              className="input input-bordered input-primary w-full"
              placeholder="enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <div>
            <p className="text-xs text-red-500 min-h-[1.5em]">{error}</p>
          </div>
          <div className="card-actions flex justify-center mt-2">
            <button
              className="btn btn-primary px-6 my-5 w-full"
              onClick={isLoginForm ? handleLogin : handleSignup}
            >
              {isLoginForm ? "Login" : "Signup"}
            </button>
          </div>
          <p
            className="text-primary cursor-pointer text-center py-2 hover:underline select-none"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm ? "New User? Signup her" : "Existing User? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
