import { useState } from "react";
// import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../scripts/colors.tsx";

import SignIn from "./Components/SignIn.tsx";
import SignUp from "./Components/SignUp.tsx";

function LoginSignUp() {
    const [needSignUp, setNeedSignUp] = useState(false);
		
    return (
    <div style={{display:"flex", width:"auto", height:"100vh"}}>
        <div
        className="bg-white"
            style={{
            flexGrow:1,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"}}
        >
            {needSignUp ? <SignUp setNeedSignUp={setNeedSignUp}/> : <SignIn setNeedSignUp={setNeedSignUp}/>}
        </div>
    </div>
    );
}

export default LoginSignUp;