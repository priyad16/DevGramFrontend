import { useSelector } from "react-redux"
function Profile(){
    const user=useSelector((state)=>state.user);
    return (

       ( user)? <h1>hello {user.firstName}</h1>:<h1>hello,user</h1>
    )
}
export default Profile;