import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./Example";
import { createContext, useState } from "react";
import LoginSignUp from "./Routes/LoginSignUp/LoginSignUp";
import Landing from "./Routes/Landing/Landing";
import Home from "./Routes/Home/Home";
import Profile from "./Routes/Profile/Profile";
import Navbar from "./Navbar";
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
          <Route path="/home" element={
            // user == null? <LoginSignUp/>:
          <Home/>}/>
          <Route path="/search" element={
            // user == null? <LoginSignUp/>:
            <Example/>}/>
          <Route path="/profile/:userId" element={
            // user == null? <LoginSignUp/>:
            <Profile/>}/>
          <Route path="/profile/:userId/edit" element={
            // user == null? <LoginSignUp/>:
            <Example/>}/>
          <Route path="/events" element={
            // user == null? <LoginSignUp/>:
            <Example/>}/>
          <Route path="/create_event" element={
            // user == null? <LoginSignUp/>:
            <Example/>}/>
          <Route path="/event_details/:eventId" element={
            // user == null? <LoginSignUp/>:
            <Example/>}/>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
     );
}

export default Root;