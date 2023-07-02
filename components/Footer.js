import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Link, Typography, Tabs, H1, Button } from "@mui/material";
import API from "../common/API";
import Contact from "./Contact";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // marginTop: "30px",
        }}
      >
        {/* <Typography variant="h4"> */}
        <b style={{ color: "#ef7cb4", fontSize: "30px" }}>
          Buy multiple test coins at{" "}
          <a
            href="https://www.faucetdao.shop/#/swap"
            style={{ color: "#ef7cb4", textDecoration: "underline" }}
          >
            www.faucetdao.shop.
          </a>
        </b>
        {/* </Typography> */}
      </Box>
      <Contact />
    </>
  );
}
