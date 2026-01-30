import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFeed,removeFeed } from "../utils/feedslice";

function Feed() {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.feed);  
    const user= useSelector((state) => state.user); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/feed", {
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
 
  let sendConnection=async(id)=>{
    try{
      let res=await axios.post('http://localhost:3000/connection/'+"like"+"/"+id,
        {},
        {
        withCredentials:true
      })
      console.log(res);
      dispatch(removeFeed(id));
    }
    catch(err){
      console.log(err.message);
    }
  }
  let ignoreConnection=async(id)=>{
    try{
      let res=await axios.post('http://localhost:3000/connection/'+"ignore"+"/"+id,
        {},
        {
        withCredentials:true
      })
      console.log(res);
      dispatch(removeFeed(id));
    }
    catch(err){
      console.log(err.message);
    }
  }
  

  return (
  <>
    {user ? (
      <ul className="list bg-base-100 rounded-box shadow-md w-7/12 my-10 m-auto">
        <li className="p-4 pb-2 text-lg opacity-60 tracking-wide">
          Feed
        </li>

        {/* feed loaded? */}
        {!feed && (
          <li className="p-4 text-center opacity-70">Loading...</li>
        )}

        {/* feed list */}
        {feed &&
          feed.map((ele, index) => (
            <li className="list-row border border-slate-600 " key={index} >
              <div>
                <img
                  className="size-10 rounded-box"
                  src={
                    ele.avatar ||
                    "https://img.daisyui.com/images/profile/demo/1@94.webp"
                  }
                />
              </div>

              <div>
                <div>{ele.firstName + " " + ele.lastName}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {ele.bio}
                </div>
              </div>

              <p className="list-col-wrap text-xs">
                {ele.skills?.length > 0
                  ? ele.skills.join(" | ")
                  : "No skills added"}
              </p>
              <div className="ml-auto flex gap-2 my-2">
              <button className="btn btn-success btn-xs text-md px-4 py-3" onClick={()=>sendConnection(ele._id)}>like</button>
              <button className="btn btn-error btn-xs text-md px-4 py-3" onClick={()=>ignoreConnection(ele._id)}>ignore</button>

            </div>
            </li>
            
          ))}
      </ul>
    ) : (
      <h1>feed</h1>
    )}
  </>
);

}

export default Feed;
