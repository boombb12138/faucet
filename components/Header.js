/* eslint-disable no-undef */
import React from "react";

import { Box, Grid } from "@mui/material";

export default function Header() {
  return (
    <>
      <Grid
        sx={{
          width: "150px",
          maxWidth: "150px",
          position: "absolute",
          left: "1rem",
          top: "1rem",
        }}
      >
        <img src="/logo.png" width="100%" height="auto" />
      </Grid>
    </>
  );
}
