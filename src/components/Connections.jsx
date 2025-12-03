import { useEffect, useState } from "react";
import axios from "axios";

function Connections() {
  const [connections, setConnections] = useState(null);

  useEffect(() => {
    async function fetchConnections() {
      try {
        const res = await axios.get(
          "http://localhost:3000/user/connections",
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
    <ul className="list bg-base-100 rounded-box shadow-md w-7/12 my-10 m-auto">
      <li className="p-4 pb-2 text-lg opacity-60 tracking-wide">
        Connections
      </li>

      {!connections && (
        <li className="p-4 text-center opacity-70">Loading...</li>
      )}

      {connections && connections.length === 0 && (
        <li className="p-4 text-center opacity-50">
          No connections yet
        </li>
      )}

      {connections &&
        connections.map((user, index) => (
          <li
            className="list-row border border-slate-600"
            key={index}
          >
            <div>
              <img
                className="size-10 rounded-box"
                src={
                  user.avatar ||
                  "https://img.daisyui.com/images/profile/demo/1@94.webp"
                }
              />
            </div>

            <div>
              <div>{user.firstName}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {user.bio || "No bio"}
              </div>
            </div>

            {/* <p className="list-col-wrap text-xs">
              {user.skills?.length > 0
                ? user.skills.join(" | ")
                : "No skills added"}
            </p> */}
          </li>
        ))}
    </ul>
  );
}

export default Connections;
