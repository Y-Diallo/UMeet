import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./Example";
import { createContext, useState } from "react";
import LoginSignUp from "./Routes/LoginSignUp/LoginSignUp";
import Landing from "./Routes/Landing/Landing";
import Home from "./Routes/Home/Home";
import Profile from "./Routes/Profile/Profile";
import Navbar from "./Navbar";
import FindEvents from "./Routes/Home/FindEvents";
import EventInformation from "./Routes/EventInformation/EventInformation";
import Settings from "./Routes/Settings/Settings";
<<<<<<< HEAD
import HostEventForm from "./Routes/HostEvent/HostEvent";
=======
import MyEvents from "./Routes/MyEvents/MyEvents";
import EventCreator from "./Routes/EventCreator/EventCreator";
>>>>>>> 451c78de3eabc9a8ac3d8c1bae3a7744f354bcc7
export const userContext = createContext<{user: any | null, setUser: (user: any | null) => void}>({user: null, setUser: () => {}});


function Root() {
  const [user, setUser] = useState<any | null>(null);
    return ( 
    <userContext.Provider value={{user, setUser}}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="*" element={<Landing/>}/>
          <Route path="/login" element={<LoginSignUp/>}/>
<<<<<<< HEAD
          <Route path="/host" element={<HostEventForm/>}/>
=======
          <Route path="/login/:signUp" element={<LoginSignUp/>}/>
>>>>>>> 451c78de3eabc9a8ac3d8c1bae3a7744f354bcc7
          <Route path="/home" element={
            // user == null? <LoginSignUp/>:
          <Home/>}/>
          <Route path="/search" element={
            // user == null? <LoginSignUp/>:
            <FindEvents/>}/>
          <Route path="/search/:searchType" element={ 
            //the idea for this page is basically to have a specialized search for like popular events, or events near you, or events you might like etc.
            //this is where the See Details buttons on the home page will take you
            // user == null? <LoginSignUp/>:
            <FindEvents/>}/>
          <Route path="/profile" element={
            // user == null? <LoginSignUp/>:
            <Profile/>}/>
          <Route path="/events" element={
            // user == null? <LoginSignUp/>:
            <MyEvents/>}/>
          <Route path="/create_event" element={
            // user == null? <LoginSignUp/>:
            <EventCreator/>}/>
          <Route path="/event_details/:eventId" element={
            // user == null? <LoginSignUp/>:
            <EventInformation/>}/>
          <Route path="/settings" element={
            // user == null? <LoginSignUp/>:
            <Settings/>}/>
          <Route path="/settings/editProfile" element={
            // user == null? <LoginSignUp/>:
            <Settings/>}/>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
     );
}

export default Root;
