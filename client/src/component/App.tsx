import React, { Fragment } from "react";

import "../css/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { SignIn } from "./signIn/signIn";
import { SignUp } from "./signUp/signUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Route/PrivateRoute";
import HomePage from "./homePage/Home";
import Profil from "./profil/profil";
import Error from "./errorPage/error";
function App() {
  return (
    <>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/"
              element={<PrivateRoute isAuth={{ isAuth: true }} />}
            >
              <Route path="/profil" element={<Profil />} />
            </Route>
            <Route
              path="/"
              element={<PrivateRoute isAuth={{ isAuth: true }} />}
            >
              <Route path="/home" element={<HomePage />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
//test