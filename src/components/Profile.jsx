import { useSelector } from "react-redux";
import { Link } from "react-router";
function Profile() {
  const user = useSelector((state) => state.user);
  return user ? (
    <ul className="list bg-base-100 rounded-box shadow-md w-7/12 m-auto my-10">
      {/* <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Most played songs this week
      </li> */}

      <li className="list-row gap-4 items-center">
        <div>
          <img className="size-10 rounded-box" src={user.avatar} />
        </div>
        <div>
          <div className="text-md">{user.firstName}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {user.bio}
          </div>
        </div>
        <Link to="/editprofile">
        <button
          className="
    px-4 py-2 
    text-sm font-semibold tracking-wide
    rounded-xl
    bg-neutral-900 
    text-gray-200 
    border border-neutral-700
    shadow-[0_4px_12px_rgba(255,255,255,0.08)]
    hover:shadow-[0_6px_15px_rgba(255,255,255,0.15)]
    hover:border-primary
    hover:text-primary
    transition-all duration-200
  "
        >
          Edit Profile
        </button>
        </Link>

        {/* <p className="list-col-wrap text-xs">
          "Remaining Reason" became an instant hit, praised for its haunting
          sound and emotional depth. A viral performance brought it widespread
          recognition, making it one of Dio Lupa’s most iconic tracks.
        </p> */}
      </li>
      {/* ⭐ Skills Section */}
      <li className="p-6">
        <div className="text-xl font-semibold mb-4 opacity-80 tracking-wide">
          Skills
        </div>

        <div className="flex flex-wrap gap-6">
          {user.skills.map((skill, index) => (
            <div
              key={index}
              className="
    flex items-center gap-4 
    w-64 h-20
    bg-neutral-900 
    border border-neutral-700 
    rounded-2xl 
    px-5
    shadow-[0_8px_20px_rgba(255,255,255,0.08)]
    hover:shadow-[0_12px_25px_rgba(255,255,255,0.15)]
    hover:scale-[1.02]
    transition-all
  "
            >
              {/* Number */}
              <div className="text-2xl font-extrabold text-gray-300 flex-shrink-0">
                {index < 10 ? "0" + (index + 1) : index + 1}
              </div>

              {/* Image */}
              <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded-xl flex-shrink-0"></div>

              {/* Skill name */}
              <div className="flex items-center h-full">
                <span className="text-base font-semibold text-gray-200 tracking-wide">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </li>
    </ul>
  ) : (
    <h1>Please login to continue</h1>
  );
}
export default Profile;
