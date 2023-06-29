/* eslint-disable no-undef */
import React from "react";

import { Box } from "@mui/material";

export default function Header() {
  return (
    <>
      <Box
        sx={{
          width: "15vw",
          maxWidth: "150px",
          //   position: "absolute",
          //   left: "10px",
          //   top: "10px",
        }}
      >
        <img src="/logo.png" width="100%" height="auto" />
      </Box>
    </>
  );
}
