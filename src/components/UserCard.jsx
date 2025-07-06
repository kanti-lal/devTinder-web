import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
import { BASE_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const UserCard = ({ user, isProfile = false }) => {
  const { _id, photoUrl, firstName, about, lastName, age, gender } = user;
  const [isAnimating, setIsAnimating] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const dispatch = useDispatch();

  const handleSendRequest = async (status, _id) => {
    if (isAnimating) return; // Prevent multiple clicks

    setIsAnimating(true);
    setSwipeDirection(status === "interested" ? "right" : "left");
    setToastMessage(
      status === "interested" ? "Request sent! 🎉" : "User ignored 👋"
    );
    setToastType(status === "interested" ? "success" : "info");

    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );

      // Show toast
      setShowToast(true);

      // Animate card out
      setTimeout(() => {
        dispatch(removeFeed(_id));
        setIsAnimating(false);
        setSwipeDirection(null);
      }, 300);
    } catch (error) {
      console.error(error.response?.messages);
      setToastMessage("Something went wrong! 😔");
      setToastType("error");
      setShowToast(true);
      setIsAnimating(false);
      setSwipeDirection(null);
    }
  };

  // Hide toast after 3 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const getAnimationStyle = () => {
    if (!isAnimating) return {};

    if (swipeDirection === "right") {
      return {
        animation: "swipeRight 0.3s ease-out forwards",
      };
    } else if (swipeDirection === "left") {
      return {
        animation: "swipeLeft 0.3s ease-out forwards",
      };
    }
    return {};
  };

  const getToastClasses = () => {
    const baseClasses =
      "fixed top-10 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300";

    switch (toastType) {
      case "success":
        return `${baseClasses} bg-green-500 text-white`;
      case "error":
        return `${baseClasses} bg-red-500 text-white`;
      case "info":
        return `${baseClasses} bg-blue-500 text-white`;
      default:
        return `${baseClasses} bg-gray-800 text-white`;
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className={getToastClasses()}>
          <div className="flex items-center space-x-2 h-5">
            <span className="text-lg">
              {toastType === "success"
                ? "✅"
                : toastType === "error"
                ? "❌"
                : "ℹ️"}
            </span>
            <span className="font-medium">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* User Card */}
      <div
        className={`card bg-neutral border border-base-200 shadow-2xl rounded-xl w-96 mx-auto transition-all duration-300 ${
          isAnimating ? "pointer-events-none" : ""
        }`}
        style={getAnimationStyle()}
      >
        <figure className="pt-6">
          <img
            src={photoUrl}
            alt="photo"
            className="w-40 h-40 object-cover rounded-full border-2 border-primary"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title text-3xl capitalize mb-1 text-neutral-content">
            {firstName + " " + lastName}
          </h1>
          {age && gender && (
            <p className="text-base-content/70 mb-1">{age + ", " + gender}</p>
          )}
          <p className="py-2 text-base-content/80">{about}</p>
          {!isProfile && (
            <div className="card-actions gap-4 my-6">
              <button
                className={`btn btn-outline btn-error transition-all duration-200 hover:scale-105 ${
                  isAnimating ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => handleSendRequest("ignored", _id)}
                disabled={isAnimating}
              >
                ❌ Ignore
              </button>
              <button
                className={`btn btn-primary transition-all duration-200 hover:scale-105 ${
                  isAnimating ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => handleSendRequest("interested", _id)}
                disabled={isAnimating}
              >
                ❤️ Interested
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes swipeRight {
            0% {
              transform: translateX(0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateX(200%) rotate(20deg);
              opacity: 0;
            }
          }
          
          @keyframes swipeLeft {
            0% {
              transform: translateX(0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateX(-200%) rotate(-20deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default UserCard;
