import { useEffect, useState } from "react";
import axios from "axios";

function Connections() {
  const [connections, setConnections] = useState(null);

  useEffect(() => {
    async function fetchConnections() {
      try {
        const res = await axios.get(
          "/user/connections",
          { withCredentials: true }
        );
        setConnections(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchConnections();
  }, []);

  return (
    <div className="min-h-screen bg-base-200 px-4 py-8" data-theme="nord">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">Connections</h2>

      {!connections && (
        <div className="flex justify-center p-8">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}

      {connections && connections.length === 0 && (
        <div className="flex flex-col items-center justify-center min-h-[50vh] opacity-60">
          <h3 className="text-2xl font-semibold">No connections yet</h3>
          <p className="mt-2">Start connecting with people to see them here.</p>
        </div>
      )}

      {connections && connections.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {connections.map((user, index) => (
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
                    {user.firstName}
                  </h3>
                  <p className="text-sm opacity-70 line-clamp-2 mt-1">
                    {user.bio || "No bio available"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Connections;
