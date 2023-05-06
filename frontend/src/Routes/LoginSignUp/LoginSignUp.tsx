import { useState } from "react";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../scripts/colors.tsx";

import SignIn from "./Components/SignIn.tsx";
import SignUp from "./Components/SignUp.tsx";

function LoginSignUp() {
    const [needSignUp, setNeedSignUp] = useState(false);
		
    return (
    <div style={{display:"flex", width:"auto", height:"auto"}}>
        <div
            style={{backgroundColor:SECONDARY_COLOR,
            flexGrow:1,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"}}
        >
            {needSignUp ? <SignUp/> : <SignIn/>}
            <input style={{
                color:SECONDARY_COLOR,
                backgroundColor:PRIMARY_COLOR,
                maxWidth:"50vw", 
                width:"20em", 
                margin:"2em"
            }} type="button" value={needSignUp ? "registered?":"not registered?"} onClick={(event) => setNeedSignUp(!needSignUp)}/>
        </div>
    </div>
    );
}

export default LoginSignUp;