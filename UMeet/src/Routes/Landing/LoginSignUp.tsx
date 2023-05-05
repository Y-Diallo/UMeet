import { useState } from "react";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../scripts/colors.ts";

import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function LoginSignUp() {
    const [needSignUp, setNeedSignUp] = useState(false);
		
    return (
    <div style={{margin:"auto"}}>
        <div
            style={{backgroundColor:SECONDARY_COLOR,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"}}
        >
            {needSignUp ? <SignUp/> : <SignIn/>}
            <input style={{color:SECONDARY_COLOR, backgroundColor:PRIMARY_COLOR, maxWidth:"25vw", width:"20em", margin:"2em"}} type="button" value={needSignUp ? "registered?":"not registered?"} onClick={(event) => setNeedSignUp(!needSignUp)}/>
        </div>
    </div>
    );
}

export default LoginSignUp;