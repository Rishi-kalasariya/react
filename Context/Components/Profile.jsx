import React, { useContext } from "react";
import UserContext from "../context/Context";

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>
    return(
        <div>Welcom {user.Username} </div>
    )
}

export default Profile; 