import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
import { BASE_URL } from "../utils/constants";

const UserCard = ({ user }) => {
  const { _id, photoUrl, firstName, about, lastName, age, gender } = user;

  const dispatch = useDispatch();

  const handleSendRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(_id));
      console.log("🚀 ~ handleSendRequest ~ res:", res);
    } catch (error) {
      console.error(error.response.messages);
    }
  };

  return (
    <div className="card bg-neutral border border-base-200 shadow-2xl rounded-xl w-96 mx-auto">
      <figure className="pt-6">
        <img
          src={photoUrl}
          alt="photo"
          className="w-32 h-32 object-cover rounded-full shadow ring ring-primary ring-offset-base-100 ring-offset-2"
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
        <div className="card-actions gap-4 my-6">
          <button
            className="btn btn-outline btn-error"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
