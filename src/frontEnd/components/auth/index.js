import React, { useEffect } from "react";
import DivLayout from "../../helpers/DivLayout";
import { box, divLayout } from "../../styles";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Captcha } from "../captcha";
import { useState } from "react";

export const LoginComponents = () => {
  const [captchaMatch, setCaptchaMatch] = useState(false);
  // const [captchaHelper, setCaptchaHelper] = useState("");
  // const [captchaError, setCaptchaError] = useState(false);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
      clearInputs();
    };
  }, []);

  const clearInputs = () => {
    setId(null);
    setPassword(null);
  };
  const listener = (event) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      document.getElementById("signinBtn").click();
    }
  };

  const setIdHandler = (event) => {
    let number = event.target.value.trim();
    setId(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = false;
    if (!id) {
      error = true;
    }
    if (!password) {
      error = true;
    }
    if (!captchaMatch) {
      // setCaptchaError(true);
      error = true;
    }
    if (!error) {
      console.log("Yeah!");
    }
    console.log("ID", id);
    console.log("Pass", password);
    console.log("Captcha", captchaMatch);
    console.log("error", error);
  };

  return (
    <DivLayout style={divLayout}>
      <Box sx={box}>
        <Typography variant="h3">Login_Captcha</Typography>

        <form onSubmit={(e) => handleSubmit(e)}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            required
            onChange={(e) => {
              setIdHandler(e);
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ mt: "15px" }}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Captcha
            placeholder={"Captcha"}
            length={5}
            onChange={(match) => {
              setCaptchaMatch(match);
              // setCaptchaError(false);
              // setCaptchaHelper("");
            }}
            onRefresh={() => {
              setCaptchaMatch(false);
              // setCaptchaError(false);
              // setCaptchaHelper("");
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            fullWidth
            sx={{ mt: "30px", height: "50px" }}
          >
            Login
          </Button>
        </form>
      </Box>
    </DivLayout>
  );
};
