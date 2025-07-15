import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (error) {
      // TODO: handle error
      console.error(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (feed?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] overflow-y-auto px-4 py-10">
        <div className="text-center">
          {/* Animated Icon */}
          <div className="mb-6">
            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-4xl">👥</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white text-sm">0</span>
              </div>
            </div>
          </div>

          {/* Main Text */}
          <h2 className="text-3xl font-bold text-white mb-4">
            No New Users Found
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg mb-6 max-w-md mx-auto">
            We're currently searching for developers in your area. Check back
            soon for new connections!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              🔄 Refresh
            </button>
            <button
              onClick={() => (window.location.href = "/profile")}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              ✏️ Update Profile
            </button>
          </div>

          {/* Tips */}
          <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-white mb-3">
              💡 Tips to find more connections:
            </h3>
            <ul className="text-gray-300 text-sm space-y-2 text-left">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Update your profile with more skills and interests
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Expand your location preferences
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Add more details to your bio
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Check back regularly for new users
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (!feed) return;

  return (
    feed && (
      <div className="flex justify-center py-10 mb-10">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
