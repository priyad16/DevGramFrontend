import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userslice";
function EditProfile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [avatar, setAvatar] = useState(user.avatar);
  const [bio, setBio] = useState(user.bio);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [toastMsg, setToastMsg] = useState("");

  const handleEdit = async () => {
    try {
      const res = await axios.patch(
        "http://localhost:3000/profile/edit",
        { firstName, lastName, avatar, bio, age, gender },
        { withCredentials: true }
      );
      console.log(res);
      dispatch(addUser(res.data.data));
      setToastMsg(res.data.message);
      setTimeout(() => setToastMsg(""), 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 px-4 py-8" data-theme="nord">
      {toastMsg && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-info shadow-lg">
            <span>{toastMsg}</span>
          </div>
        </div>
      )}

      <div className="card w-full max-w-xl bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl font-bold text-primary mb-2">Edit Profile</h2>
          <p className="text-center text-base-content/70 mb-6">Update your personal information.</p>

          <div className="space-y-4">
            {/* FIRST NAME */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">First Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered focus:input-primary w-full"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* LAST NAME */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Last Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered focus:input-primary w-full"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* AVATAR */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Avatar URL</span>
              </label>
              <input
                type="text"
                className="input input-bordered focus:input-primary w-full"
                placeholder="Avatar URL"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </div>

            {/* BIO */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Bio</span>
              </label>
              <textarea
                className="textarea textarea-bordered focus:textarea-primary h-24 w-full"
                placeholder="Tell us about yourself"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* AGE */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Age</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered focus:input-primary w-full"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              {/* GENDER */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Gender</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered focus:input-primary w-full"
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>

          </div>

          <div className="card-actions mt-8">
            <button
              className="btn btn-primary w-full text-lg shadow-md hover:shadow-lg transition-all"
              onClick={handleEdit}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;
