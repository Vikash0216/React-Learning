import { useState,useContext } from "react";
import UserContext from "../context/UserContext";
const Profile = () => {
    const { user } = useContext(UserContext);
  
    if (!user) 
      return <div className="flex justify-center items-center min-h-screen text-gray-700 text-lg">Please Login</div>;
  
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-semibold text-blue-600">
        Hello {user.userName} Your password is {user.password}
      </div>
    );
  };
 export default Profile;