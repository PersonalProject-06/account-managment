import React from "react";

import "../css/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { SignIn } from "./signIn/signIn";
import { SignUp } from "./signUp/signUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
       
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />

          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
