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
    <>
    {toastMsg && (
  <div className="toast toast-top toast-center">
    <div className="alert alert-info">
      <span>{toastMsg}</span>
    </div>
  </div>
)}
      
      <div className="card w-96 m-auto my-3 border border-slate-600 bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-center mb-4">
            <h2 className="text-3xl font-bold">Edit Profile</h2>
          </div>

          {/* EMAIL FIELD */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">First Name</legend>
            <input
              type="text"
              className="input"
              placeholder="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Last Name</legend>
            <input
              type="text"
              className="input"
              placeholder="last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Avatar</legend>
            <input
              type="text"
              className="input"
              placeholder="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Bio</legend>
            <input
              type="text"
              className="input"
              placeholder="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Age</legend>
            <input
              type="number"
              className="input"
              placeholder="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Gender</legend>
            <input
              type="text"
              className="input"
              placeholder="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </fieldset>

          <div className="mt-6">
            <button className="btn btn-primary btn-block" onClick={handleEdit}>
              update profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditProfile;
