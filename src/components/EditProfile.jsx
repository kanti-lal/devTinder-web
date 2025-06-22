import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.user));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <>
      <div className="flex justify-center my-10 gap-10 mb-24">
        <div className="flex justify-center ">
          <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body ">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  value={firstName}
                  type="text"
                  className="input"
                  placeholder="enter first name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">LastName</legend>
                <input
                  value={lastName}
                  type="text"
                  className="input"
                  placeholder="enter lastname"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Photo Url</legend>
                <input
                  value={photoUrl}
                  type="text"
                  className="input"
                  placeholder="photo url "
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input
                  value={age}
                  type="text"
                  className="input"
                  placeholder="age "
                  onChange={(e) => setAge(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">About</legend>
                <input
                  value={about}
                  type="text"
                  className="input"
                  placeholder="about "
                  onChange={(e) => setAbout(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender</legend>
                <input
                  value={gender}
                  type="text"
                  className="input"
                  placeholder="gender "
                  onChange={(e) => setGender(e.target.value)}
                />
              </fieldset>
              <div>
                <p className="text-xs text-red-500">{error}</p>
              </div>
              <div className="card-actions flex justify-center">
                <button
                  className="btn btn-primary px-6 my-4 "
                  onClick={saveProfile}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, photoUrl, age, gender, about }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span>Profile Saved Successfully</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
