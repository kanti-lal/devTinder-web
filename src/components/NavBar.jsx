import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";
import { removeFeed } from "../utils/feedSlice";
import { useState, useRef, useEffect } from "react";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + "/logout",
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      dispatch(removeFeed());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on navigation
  const handleDropdownSelect = (callback) => {
    setIsDropdownOpen(false);
    if (callback) callback();
  };

  return (
    <div className="navbar bg-neutral bg-opacity-90 backdrop-blur shadow-xl border-b border-base-200 text-neutral-content sticky top-0 z-50">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl font-bold tracking-wide">
          <span role="img" aria-label="logo">
            💻
          </span>{" "}
          DevTinder (cashio)
        </Link>
      </div>
      {user && (
        <div className="flex gap-3 items-center">
          <p className="font-semibold text-neutral-content/80">
            Welcome, {user.firstName}
          </p>
          <div className="relative" ref={dropdownRef}>
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar border border-primary shadow"
              onClick={() => setIsDropdownOpen((open) => !open)}
            >
              <div className="w-10 rounded-full overflow-hidden">
                <img alt="user photo" src={user?.photoUrl} />
              </div>
            </button>
            {isDropdownOpen && (
              <ul className="menu menu-sm dropdown-content bg-neutral text-neutral-content border border-base-200 rounded-box shadow-xl z-50 mt-3 w-52 p-2 absolute right-0">
                <li>
                  <Link
                    to="/profile"
                    className="justify-between"
                    onClick={() => handleDropdownSelect()}
                  >
                    Profile <span className="badge badge-primary">New</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/connections"
                    onClick={() => handleDropdownSelect()}
                  >
                    Connections
                  </Link>
                </li>
                <li>
                  <Link to="/requests" onClick={() => handleDropdownSelect()}>
                    Requests
                  </Link>
                </li>
                <li>
                  <details>
                    <summary>Legal & Support</summary>
                    <ul>
                      <li>
                        <Link
                          to="/privacy-policy"
                          onClick={() => handleDropdownSelect()}
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/terms-and-conditions"
                          onClick={() => handleDropdownSelect()}
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/cancellation-refund"
                          onClick={() => handleDropdownSelect()}
                        >
                          Refund Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shipping-delivery"
                          onClick={() => handleDropdownSelect()}
                        >
                          Shipping & Delivery
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact-us"
                          onClick={() => handleDropdownSelect()}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleDropdownSelect(handleLogout);
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
