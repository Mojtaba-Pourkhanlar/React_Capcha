import React from "react";
import DivLayout from "../../helpers/DivLayout";
import { box, divLayout } from "../../styles";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Captcha } from "../captcha";

export const LoginComponents = () => {
  return (
    <DivLayout style={divLayout}>
      <Box sx={box}>
        <Typography variant="h3">Login_Captcha</Typography>

        <form>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            required
            //   onChange={(e) => {
            //     setUser(e.target.value);
            //   }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ mt: "15px" }}
            required
            //   onChange={(e) => {
            //     setPass(e.target.value);
            //   }}
          />
          <Captcha />
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
