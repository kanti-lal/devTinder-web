import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      {/* Fixed NavBar */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      {/* Scrollable main content */}
      <main className="flex-1 overflow-y-auto pt-2 pb-8">
        <Outlet />
      </main>
      {/* Fixed Footer */}
      <div className="sticky bottom-0 z-50">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
