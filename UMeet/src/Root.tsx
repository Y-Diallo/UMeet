import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Example from "./Example";
import { createContext, useState } from "react";
import LoginSignUp from "./Routes/Landing/LoginSignUp";
import Landing from "./Routes/Landing/Landing";
import Home from "./Routes/Landing/Home";

export const userContext = createContext<{user: any | null, setUser: (user: any | null) => void}>({user: null, setUser: () => {}});


function Root() {
  const [user, setUser] = useState<any | null>(null);
  // if(user == null){
  //   const userString = localStorage.getItem("user");
  //   if(userString != null){
  //     setUser(JSON.parse(userString));
  //   }
  //   if(userString == null && window.location.pathname != "/"){
  //     setUser(null);
  //   }
  // }
  // if(user != null){
  //   localStorage.setItem("user", JSON.stringify(user));
  // }
//npm run dev
    return ( 
    <userContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Landing/>}/>
          <Route path="/login" element={<LoginSignUp/>}/>
          <Route path="/home" element={user == null? <Landing/>:<Home/>}/>
          <Route path="/search" element={<Example/>}/>
          <Route path="/profile/:userId" element={<Example/>}/>
          <Route path="/profile/:userId/edit" element={<Example/>}/>
          <Route path="/events" element={<Example/>}/>
          <Route path="/create_event" element={<Example/>}/>
          <Route path="/event_details/:eventId" element={<Example/>}/>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
     );
}

export default Root;