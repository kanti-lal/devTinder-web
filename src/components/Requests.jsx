import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      console.log("🚀 ~ fetchRequest ~ res:", res?.data?.data);

      dispatch(addRequests(res?.data?.data));
    } catch (error) {
      console.error(error?.response?.message);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!requests) return;
  if (requests?.length === 0)
    return <h1 className="flex justify-center my-10">No Request found</h1>;

  const reviewRequest = async (status, _id) => {
    try {
      const res = axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
      console.log("🚀 ~ reviewRequest ~ res:", res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m-4 my-10 mx-auto">
      <h1 className="font-bold text-3xl text-white text-center py-4">
        Connection Requests
      </h1>
      {requests.map((request, index) => {
        const { _id, firstName, lastName, age, gender, about, photoUrl } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className="flex justify-between items-center border bg-base-200 border-base-300 shadow-sm rounded-lg m-3 p-4 w-1/2 mx-auto"
          >
            <div className="flex">
              <div className="min-w-20 min-h-20">
                <img
                  src={photoUrl}
                  className=" w-20 h-20 rounded-full"
                  alt="photo"
                />
              </div>
              <div className="px-4">
                <div className="">
                  <h1 className="flex font-bold text-xl capitalize">
                    {firstName + " " + lastName}
                  </h1>
                  {age && gender && (
                    <p className="my-1">{age + ", " + gender}</p>
                  )}
                  {about && <div>{about}</div>}
                </div>
              </div>
            </div>
            <div className="gap-3 flex">
              <button
                className="btn btn-active btn-primary"
                onClick={() => reviewRequest("rejected", request?._id)}
              >
                Reject
              </button>
              <button
                className="btn btn-active btn-secondary"
                onClick={() => reviewRequest("accepted", request?._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
