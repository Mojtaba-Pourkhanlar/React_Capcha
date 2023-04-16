import React from "react";
import { Login } from "./frontEnd/containers/Login";
import { Layout } from "./frontEnd/components/Layout";
import { ThemeProvider } from "@mui/material";
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
