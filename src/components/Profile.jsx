import { useSelector } from "react-redux";
import { Link } from "react-router";
function Profile() {
  const user = useSelector((state) => state.user);
  return user ? (
    <div className="flex min-h-[80vh] items-center justify-center bg-base-200 p-6" data-theme="nord">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl overflow-hidden">
        {/* Banner / Header Background */}
        <div className="h-32 bg-primary/10 w-full"></div>

        <div className="card-body pt-0 relative">
          {/* Avatar & Header Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 mb-6 gap-6">
            <div className="avatar ring ring-primary ring-offset-base-100 ring-offset-2 rounded-full shadow-lg">
              <div className="w-32 rounded-full">
                <img src={user.avatar} alt="Profile" />
              </div>
            </div>

            <div className="text-center sm:text-left flex-1 mt-2 sm:mt-0">
              <h2 className="text-3xl font-bold text-base-content">{user.firstName} {user.lastName}</h2>
              <p className="font-medium text-primary mt-1">{user.bio || "Full Stack Developer"}</p>
            </div>

            <div className="mt-4 sm:mt-0">
              <Link to="/editprofile">
                <button className="btn btn-primary px-6 shadow-md hover:shadow-lg transition-all">
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>

          <div className="divider"></div>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* About / Bio Placeholder if needed, currently using bio in header */}

            {/* Skills Section */}
            <div className="col-span-full">
              <h3 className="text-lg font-bold text-base-content/80 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Skills & Expertise
              </h3>

              <div className="flex flex-wrap gap-3">
                {user.skills && user.skills.length > 0 ? (
                  user.skills.map((skill, index) => (
                    <div key={index} className="badge badge-lg badge-outline gap-2 p-4 hover:bg-primary hover:text-primary-content transition-colors cursor-default">
                      <span className="font-bold opacity-50">{index + 1}.</span>
                      {skill}
                    </div>
                  ))
                ) : (
                  <p className="text-base-content/50 italic">No skills added yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-base-content/70">Please login to continue</h1>
        <Link to="/login" className="btn btn-link text-primary mt-2">Go to Login</Link>
      </div>
    </div>
  );
}
export default Profile;
