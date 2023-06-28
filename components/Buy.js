import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Link, Typography, Tabs, H1, Button } from "@mui/material";
import { Circle } from "@mui/icons-material";

export default function Buy() {
  return (
    <>
      <Box
        sx={{
          background: "#28c6b6",
          borderRadius: "10px",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "600" }} gutterBottom>
          You can buy Linea ETH
        </Typography>
        <Typography> easily without headache two options:</Typography>
        {/*  */}
        {/* <Box
          sx={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "red",
            display: "inline-block",
            position: "relative",
            marginRight: "10px",
          }}
        >
          <span
            sx={{
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            42
          </span>
        </Box>
        <p sx={{ display: "inline-block", verticalAslign: "middle" }}>
          regular transfer: 1ETH = $0.25
        </p> */}
        {/*  */}
        <Box
          sx={{
            display: "inline-block",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "#000",
            color: "#eee",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "400",
            position: "relative",
          }}
        >
          <span
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            1
          </span>
        </Box>
        <Typography
          sx={{
            display: "inline-block",
            fontWeight: "700",
            verticalAlign: "middle",
          }}
        >
          regular transfer:1ETH =$0.25
        </Typography>
        <br /> NON-SYBIL solutions:1 ETH = $1
        <Button
          sx={{ fontWeight: "700", color: "#000", backgroundColor: "#ffc107" }}
        >
          Buy now
        </Button>
      </Box>
      <a href="https://cnouyi.expert/join/43cm-7682104">
        <Box
          sx={{
            marginTop: "10px",
            width: "100%",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <img src="/banner.png" width="100%" />
        </Box>
      </a>
    </>
  );
}
