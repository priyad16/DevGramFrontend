import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFeed, removeFeed } from "../utils/feedslice";

function Feed() {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.feed);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://ec2-13-53-32-227.eu-north-1.compute.amazonaws.com/user/feed", {
          withCredentials: true,
        });

        console.log(res.data);
        dispatch(addToFeed(res.data.feed));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);


  const [toast, setToast] = useState({ isVisible: false, message: "", type: "" });

  const showToast = (message, type) => {
    setToast({ isVisible: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  let sendConnection = async (id) => {
    try {
      let res = await axios.post('http://ec2-13-53-32-227.eu-north-1.compute.amazonaws.com/connection/' + "like" + "/" + id,
        {},
        {
          withCredentials: true
        })
      console.log(res);
      dispatch(removeFeed(id));
      showToast("Connection Request Sent", "alert-success");
    }
    catch (err) {
      console.log(err.message);
      showToast("Failed to send request", "alert-error");
    }
  }
  let ignoreConnection = async (id) => {
    try {
      let res = await axios.post('http://ec2-13-53-32-227.eu-north-1.compute.amazonaws.com/connection/' + "ignore" + "/" + id,
        {},
        {
          withCredentials: true
        })
      console.log(res);
      dispatch(removeFeed(id));
      showToast("Connection Ignored", "alert-info");
    }
    catch (err) {
      console.log(err.message);
      showToast("Failed to ignore connection", "alert-error");
    }
  }


  return (
    <>
      {feed ? (
        <div className="min-h-screen bg-base-200 px-4 py-8 relative" data-theme="nord">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">Feed</h2>

          {feed.length === 0 && (
            <div className="flex flex-col items-center justify-center min-h-[50vh] opacity-60">
              <h3 className="text-2xl font-semibold">No new users found</h3>
              <p className="mt-2">Check back later for more suggestions.</p>
            </div>
          )}

          {feed.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
              {feed.map((ele, index) => (
                <div
                  key={index}
                  className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="card-body flex-row items-center p-6 gap-4">
                    {/* Avatar Section */}
                    <div className="avatar">
                      <div className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex items-center justify-center bg-base-300 overflow-hidden">
                        {ele.avatar ? (
                          <img
                            src={ele.avatar}
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
                        {ele.firstName + " " + ele.lastName}
                      </h3>
                      <p className="text-sm opacity-70 line-clamp-2 mt-1">
                        {ele.bio || "No bio available"}
                      </p>
                      <p className="text-xs opacity-50 mt-1 truncate">
                        {ele.skills?.length > 0
                          ? ele.skills.join(" | ")
                          : "No skills added"}
                      </p>
                    </div>

                    {/* Actions Section */}
                    <div className="flex gap-4 shrink-0">
                      <button
                        className="btn btn-success btn-sm text-white w-20"
                        onClick={() => sendConnection(ele._id)}
                      >
                        Like
                      </button>
                      <button
                        className="btn btn-error btn-sm text-white w-20"
                        onClick={() => ignoreConnection(ele._id)}
                      >
                        Ignore
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Toast Notification */}
          {toast.isVisible && (
            <div className="toast toast-top toast-center z-50">
              <div className={`alert ${toast.type} shadow-lg transition-all duration-300 animate-bounce`}>
                <span className="font-semibold text-white">{toast.message}</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center p-8 min-h-screen bg-base-200">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}
    </>
  );

}

export default Feed;
