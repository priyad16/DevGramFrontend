import axios from "axios";
import { useEffect } from "react";
import { addRequests } from "../utils/Requestslice";
import { useSelector,useDispatch } from "react-redux";
function FriendRequests(){
    const dispatch = useDispatch();
    const requests = useSelector((state) => state.requests);
    useEffect(()=>{
        async function getReq(){
            try{
        const res=await axios.get("http://localhost:3000/user/friendreq",{
            withCredentials:true
        })
        console.log(res);
        dispatch(addRequests(res.data.requests))
    }catch(err){
        console.log(err);
    }
    }
    getReq();
    },[])

   return (
    <ul className="list bg-base-100 rounded-box shadow-md w-7/12 my-10 m-auto">

      <li className="p-4 pb-2 text-lg opacity-60 tracking-wide">
        Friend Requests
      </li>

      {/* Loading */}
      {!requests && (
        <li className="p-4 text-center opacity-70">Loading...</li>
      )}

      {/* Empty */}
      {requests && requests.length === 0 && (
        <li className="p-4 text-center opacity-50">No friend requests</li>
      )}

      {/* List of friend requests */}
      {requests &&
        requests.map((user, index) => (
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
              <div>{user.fromId.firstName} {user.lastName}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {user.fromId.bio || "No bio"}
              </div>
            </div>

            
            <div className="ml-auto flex gap-2 my-2">
              <button className="btn btn-success btn-xs text-md px-4 py-3">Accept</button>
              <button className="btn btn-error btn-xs text-md px-4 py-3">Reject</button>
            </div>
           
          </li>
        ))}
    </ul>
  );

}
export default FriendRequests;