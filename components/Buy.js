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
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              sx={{ fontWeight: "600", fontSize: "20px", textAlign: "center" }}
            >
              You can buy test coins at{" "}
              <a
                href="https://www.faucetdao.shop/#/swap"
                style={{ textDecoration: "underline", color: "#000" }}
              >
                faucetdao.shop
              </a>
            </Typography>
          </Box>

          {/* <Box sx={{ padding: "10px 0" }}>
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
            <b>Regular transfer:1ETH =$0.25</b>
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
          </Box> */}
          <a
            href="https://www.faucetdao.shop/#/swap"
            style={{
              alignSelf: "center",
              width: "100%",
            }}
          >
            <Button
              sx={{
                fontWeight: "700",
                color: "#000",
                backgroundColor: "#ffc107",
                alignSelf: "center",
                width: "100%",
              }}
            >
              Buy now
            </Button>
          </a>
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
