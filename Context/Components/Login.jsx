import React, { useContext, useState } from "react";
import UserContext from "../context/Context";

function Login() {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const{setuser} = useContext(UserContext)

    const Submit = (e) => {
        e.preventDefault()
        setuser({Username,Password})
    }

    return(
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={Username} onChange={(e) => setUsername(e.target.value) } placeholder="Username"/>
            <input type="text" value={Password} onChange={(e) => setPassword(e.target.value) }placeholder="Password"/>
            <button onClick={Submit} >Submit</button>
        </div>
    )
}

export default Login;