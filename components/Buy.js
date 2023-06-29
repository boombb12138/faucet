import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Link, Typography, Tabs, H1, Button } from "@mui/material";
import { Circle } from "@mui/icons-material";

export default function Buy() {
  return (
    <>
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Box
          sx={{
            background: "#28c6b6",
            borderRadius: "10px",
            padding: "10px",
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              You can buy Linea ETH
            </Typography>
            <Typography> easily without headache two options:</Typography>
          </Box>

          <Box sx={{ padding: "10px 0" }}>
            <span
              style={{
                backgroundColor: "#000",
                borderRadius: "50%",
                color: "#eee",
                display: "inline-block",
                width: "20px",
                height: "20px",
                textAlign: "center",
                marginRight: "5px",
              }}
            >
              1
            </span>
            <b>regular transfer:1ETH =$0.25</b>
            <br />
            <span
              style={{
                backgroundColor: "#000",
                borderRadius: "50%",
                color: "#eee",
                display: "inline-block",
                width: "20px",
                height: "20px",
                textAlign: "center",
                marginRight: "5px",
              }}
            >
              2
            </span>
            <b>NON-SYBIL solutions:1 ETH = $1</b>
          </Box>

          <Button
            sx={{
              fontWeight: "700",
              color: "#000",
              backgroundColor: "#ffc107",
              alignSelf: "center",
            }}
          >
            Buy now
          </Button>
        </Box>
        <a href="https://cnouyi.expert/join/43cm-7682104">
          <Box
            sx={{
              marginTop: "10px",
              width: "100%",
              borderRadius: "10px 10px",
              overflow: "hidden",
            }}
          >
            <img src="/banner.png" width="100%" height="auto" />
          </Box>
        </a>
      </Box>
    </>
  );
}
