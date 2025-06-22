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
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure className="">
          <img src={photoUrl} alt="photo" className="" />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title text-3xl capitalize">
            {firstName + " " + lastName}
          </h1>
          {age && gender && <p>{age + ", " + gender}</p>}
          <p className="py-3">{about}</p>
          <div className="card-actions gap-4 my-10">
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
