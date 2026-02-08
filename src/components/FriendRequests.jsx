import axios from "axios";
import { useEffect } from "react";
import { addRequests, removeRequest } from "../utils/Requestslice";
import { useSelector, useDispatch } from "react-redux";
function FriendRequests() {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.requests);
  useEffect(() => {
    async function getReq() {
      try {
        const res = await axios.get("http://localhost:3000/user/friendreq", {
          withCredentials: true
        })
        console.log(res);
        dispatch(addRequests(res.data.requests))
      } catch (err) {
        console.log(err);
      }
    }
    getReq();
  }, [])
  let acceptConnection = async (id) => {
    try {
      const res = await axios.patch(
        "http://localhost:3000/connection/review",
        {
          connectionId: id,
          action: "accepted"
        },
        {
          withCredentials: true
        }
      );

      console.log(res.data);
      dispatch(removeRequest(id));
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  let rejectConnection = async (id) => {
    try {
      const res = await axios.patch(
        "http://localhost:3000/connection/review",
        {
          connectionId: id,
          action: "rejected"
        },
        {
          withCredentials: true
        }
      );

      console.log(res.data);
      dispatch(removeRequest(id));
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  let ignoreConnection = async (id) => {
    try {
      const res = await axios.patch(
        "http://localhost:3000/connection/review",
        {
          connectionId: id,
          action: "ignore"
        },
        {
          withCredentials: true
        }
      );

      console.log(res.data);
      dispatch(removeRequest(id));
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-8" data-theme="nord">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">Friend Requests</h2>

      {/* Loading */}
      {!requests && (
        <div className="flex justify-center p-8">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}

      {/* Empty */}
      {requests && requests.length === 0 && (
        <div className="flex flex-col items-center justify-center min-h-[50vh] opacity-60">
          <h3 className="text-2xl font-semibold">No pending requests</h3>
          <p className="mt-2">Check back later for new connections.</p>
        </div>
      )}

      {/* Grid of friend requests */}
      {requests && requests.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {requests.map((user, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="card-body flex-row items-center p-6 gap-4">
                {/* Avatar Section */}
                <div className="avatar">
                  <div className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex items-center justify-center bg-base-300 overflow-hidden">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-12 h-12 text-base-content opacity-50"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 min-w-0">
                  <h3 className="card-title text-lg font-bold truncate">
                    {user.fromId.firstName} {user.lastName}
                  </h3>
                  <p className="text-sm opacity-70 line-clamp-2 mt-1">
                    {user.fromId.bio || "No bio available"}
                  </p>
                </div>

                {/* Actions Section */}
                <div className="flex flex-col gap-4 shrink-0 items-center">
                  <div className="flex gap-2">
                    <button
                      className="btn btn-success btn-sm text-white w-20"
                      onClick={() => acceptConnection(user._id)}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-error btn-sm text-white w-20"
                      onClick={() => rejectConnection(user._id)}
                    >
                      Reject
                    </button>
                  </div>
                  <button
                    className="btn btn-sm w-20 bg-black text-white hover:bg-gray-800 border-none"
                    onClick={() => ignoreConnection(user._id)}
                  >
                    Ignore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

}
export default FriendRequests;