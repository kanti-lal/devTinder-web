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

  // Check if user was redirected from a protected route

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
            <p className="text-xs text-red-500">{error}</p>
          </div>
          <div className="card-actions flex justify-center">
            <button
              className="btn btn-primary px-6 w-full"
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
