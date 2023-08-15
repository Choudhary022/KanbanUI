import React, { useState } from "react";

import {
  Box,
  TextField,
  Button,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";

import { SignInContainer } from "./styles";

import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { State } from "../../../Redux/rootReducer";
// import { logIn } from "../../../Redux/user/ActionCreator/actions";
// import { UserCredential } from "../../../Redux/user/ActionCreator/types";

const SignIn = () => {

  const [emailValue, setEmailValue] = useState();

  const [passwordValue, setPasswordValue] = useState();

  // const dispatch = useDispatch();

  // const { isUserLogged } = useSelector((state: State) => state.user);

  const handleChangePasswordValue = (
    event
  ) => {
    setPasswordValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    const trimmedEmail = email.trim();
    if (trimmedEmail.length == 0) {
      console.log("email can't be empty");
      setEmailValue(trimmedEmail);
    }

    console.log("email", trimmedEmail);
  };

  const handleSubmitUser = () => {
    // if (emailValue && passwordValue) {
    //   let user: UserCredential = {
    //     email: emailValue,
    //     password: passwordValue,
    //   };
    //   // dispatch(logIn(user));
    // }
  };

  return (
    <>
      <SignInContainer direction="column" spacing={2}>
        <Typography variant="h6" textAlign="center">
          Sign In
        </Typography>

        <TextField
          variant="standard"
          name="email"
          value={emailValue}
          label="Enter Email"
          onChange={handleEmailChange}
        />

        <TextField
          type="password"
          variant="standard"
          value={passwordValue}
          label="Enter Password"
          name="password"
          onChange={handleChangePasswordValue}
        />

        <Stack direction="row" spacing={1}>
          <Link to="/">
            <Button>Cancel</Button>
          </Link>

          <Link to="/home">
            <Button onClick={handleSubmitUser}>Log in</Button>
          </Link>
        </Stack>
      </SignInContainer>
    </>
  );
};

export default SignIn;
