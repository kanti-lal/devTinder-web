import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      dispatch(addConnections(res?.data?.data));
    } catch (error) {
      console.error(error?.response?.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0)
    return <h1 className="flex justify-center my-10">No Request found</h1>;

  return (
    <div className="m-4 my-10 mx-auto">
      <h1 className="font-bold text-3xl text-white text-center py-4">
        Connections
      </h1>
      {connections.map((connection) => {
        const { _id, firstName, lastName, age, gender, about, photoUrl } =
          connection;
        return (
          <div
            key={_id}
            className="flex border bg-base-200 border-base-300 shadow-sm rounded-lg m-3 p-4 w-1/2 mx-auto"
          >
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
                {age && gender && <p className="my-1">{age + ", " + gender}</p>}
                {about && <div>{about}</div>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
