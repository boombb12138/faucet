import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Link, Typography, Tabs, H1, Button } from "@mui/material";
import API from "../common/API";
import Contact from "./Contact";

export default function Footer() {
  return (
    <>
      {/* sx={{ position: "absolute", bottom: "5%" }} */}
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {/* <Typography variant="h4"> */}
        <b style={{ color: "rgb(40, 198, 182,0.7)", fontSize: "24px" }}>
          Buy multiple test coins at
          <a
            href="https://www.faucetdao.shop/#/swap"
            style={{ color: "rgb(50, 198, 190)" }}
          >
            {" "}
            www.faucetdao.shop.
          </a>
        </b>
        {/* </Typography> */}
      </Box>
      <Contact />
    </>
  );
}
