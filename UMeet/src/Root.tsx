import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Example from "./Example";

function Root() {
    return ( 
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App/>}/>
          <Route path="/example" element={<Example/>}/>
        </Routes>
      </BrowserRouter>
     );
}

export default Root;