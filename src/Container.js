import React from "react";
import { ThemeProvider } from "@mui/material";
import { Layout } from "./frontEnd/components/Layout";
import { Login } from "./frontEnd/containers/Login";
import { theme } from "./frontEnd/theme";

const Container = () => {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </Layout>
  );
};

export default Container;
