import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Link, Typography, Tabs, H1, Button } from "@mui/material";
import API from "../common/API";
import Contact from "./Contact";

export default function Footer() {
  return (
    <>
      <Box sx={{ position: "absolute", bottom: "8%" }}>
        <Typography variant="h4">
          Buy multiple test coins at{" "}
          <a href="https://www.faucetdao.shop/#/swap">www.faucetdao.shop.</a>
        </Typography>
      </Box>
      <Contact />
    </>
  );
}
