import React, { useState } from "react";
import UserContext from "./Context";

const ContextProvider = ({children}) => {
    const [user, setuser] = useState(null)

    //childrens are components like div 
    //childrens that we are getting we are 
    //passing them as it is
    return(
        //pass all the parameters needed in value
    <UserContext.Provider value={{user, setuser}}> 
    {children}
    </UserContext.Provider>
    //children is wrapped in UserContext
    )
}

export default ContextProvider