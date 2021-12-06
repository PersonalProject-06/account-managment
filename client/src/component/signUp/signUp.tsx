import React, { useState } from "react";
import { CREATE_USER } from "../graphql/Mutation";
import { useMutation } from "@apollo/client";
import {
  checkEmail,
  checkPassword,
  checkName,
  ifMatch,
} from "../../helpres/helper";
import emailjs from "emailjs-com";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [notMatch, setnotMatch] = useState(false);
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  console.log(error);
  console.log(data);
  const checkCredentials = (): void => {
    if (!checkEmail(email)) {
      setInvalidEmail(true);
    }
    if (!checkPassword(password)) {
      setInvalidPassword(true);
    }
    if (!checkName(name)) {
      setInvalidInput(true);
    }
    if (!ifMatch(password, password2)) {
      setnotMatch(true);
    }
    if (
      checkEmail(email) &&
      checkPassword(password) &&
      checkName(name) &&
      ifMatch(password, password2)
    ) {
      createUser({
        variables: {
          name,
          email,
          password,
        },
      });
    }
    return;
  };
  // const sendEmail = (e:any) => {
  //  e.preventDefault();

  // emailjs.sendForm('gmail', 'service_4q99ppt', e.target, 'user_CMcAz2kHOK0om1nlGILgm')
  //    .then((result) => {
  //       console.log(result.text);
  //   }, (error) => {
  //      console.log(error.text);
  //  });
  // }
  return (
    <section className="vh-100" style={{ backgroundColor: "#6a11cb" }}>
      <div className="container h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-lg-12 col-xl-11 ">
            <div className="card text-black bg-dark">
              <div className="card-body p-md-5 text-white-50">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 mb-2 text-white text-uppercase">
                      Sign up
                    </p>

                    <div className="mx-1 mx-md-4">
                      {invalidInput && (
                        <p className="text-danger form-label">
                          invalid input !
                        </p>
                      )}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                          />
                          <label className="form-label">Your Name</label>
                        </div>
                      </div>

                      {invalidEmail && (
                        <p className="text-danger form-label">
                          invalid email !
                        </p>
                      )}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label className="form-label">Your Email</label>
                        </div>
                      </div>
                      {invalidPassword && (
                        <p className="text-danger form-label">
                          password must be at least 8 caracteres and includes
                          caracteres and symbols and numbers !
                        </p>
                      )}

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label className="form-label">Password</label>
                        </div>
                      </div>
                      {notMatch && (
                        <p className="text-danger form-label">
                          password not match !
                        </p>
                      )}

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            onChange={(e) => setPassword2(e.target.value)}
                          />
                          <label className="form-label">
                            Repeat your password
                          </label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label className="form-check-label">
                          I agree all statements in{" "}
                          <a href="#!" className="text-white-50 fw-bold">
                            Terms of service
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          className="btn btn-outline-light btn-lg px-5 ml-10"
                          onClick={(e) => {
                            checkCredentials();
                          }}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
