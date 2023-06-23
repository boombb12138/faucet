import * as React from "react";
import { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";

import styles from "../styles/Home.module.css";
import Captcha from "./Captcha";

export default function RightSection({ testnet }) {
  switch (testnet) {
    case "goerli":
      testnet = "Goerli ETH";
      break;
    case "linea":
      testnet = "Linea ETH";
      break;
    case "sepolia":
      testnet = "Sepolia ETH";
      break;
    case "bsc":
      testnet = "BSC Testnet BNB";
      break;
    case "polygon":
      testnet = "Polygon Mumbai MATIC";
      break;
    case "avalanche":
      testnet = "Avalanche Fuji AVAX";
      break;

    default:
      break;
  }
  return (
    <>
      <Box
        sx={{
          flex: 1,
          padding: "20px 10px",
          background: "#fff",
          borderRadius: "10px",
          marginLeft: "20px",
          boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        <Typography sx={{ fontWeight: "600" }}>{testnet} Faucet</Typography>

        <Box sx={{ marginTop: "20px" }}>
          <Typography>
            <b>Step1.</b>Put your wallet address
          </Typography>
          <TextField
            sx={{
              input: {
                height: "0rem",
              },
              width: "100%",
            }}
            id="outlined-basic"
            placeholder="0x...."
          />
        </Box>

        <Box sx={{ marginTop: "20px" }}>
          <Typography>
            <b>Step2.</b>Follow and tweet
          </Typography>
          <a href="https://twitter.com/FaucetDAO1">
            <Box
              sx={{
                backgroundColor: "#ef7cb4",
                display: "flex",
                borderRadius: "5px",
                lineHeight: "2rem",
                color: "#fff",
                cursor: "pointer",
                width: "250px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#ef7cb4",
                  borderRadius: "5px 0 0 5px",
                  width: "35px",
                  marginRight: "7%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="/twitter.png" width="20px" height="20px" />
              </Box>
              Follow @FaucetDAO1
            </Box>
          </a>
          <a href="https://twitter.com/intent/tweet?text=">
            <Box
              sx={{
                backgroundColor: "#ef7cb4",
                display: "flex",
                borderRadius: "5px",
                lineHeight: "2rem",
                color: "#fff",
                cursor: "pointer",
                width: "100px",
              }}
              className={styles.twitter}
            >
              <Box
                sx={{
                  backgroundColor: "#ef7cb4",
                  borderRadius: "5px 0 0 5px",
                  width: "35px",
                  // minWidth: "35px",
                  marginRight: "7%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="/twitter.png" width="20px" height="20px" />
              </Box>
              Tweet
            </Box>
          </a>
        </Box>

        <Box sx={{ marginTop: "20px" }}>
          <Typography>
            <b>Step3.</b>Put your tweet URL
          </Typography>
          <TextField
            sx={{
              input: {
                height: "0rem",
              },
              width: "100%",
            }}
            id="outlined-basic"
            placeholder="https://twitter.com/jack/status/20"
          />
        </Box>

        <Box sx={{ marginTop: "20px" }}>
          <Typography>
            <b>Step4.</b>Solve captcha
          </Typography>
          <Captcha />
        </Box>

        <hr />
        <Button
          variant="contained"
          sx={{ width: "100%", background: "#ef7cb4" }}
        >
          Receive tokens
        </Button>
      </Box>
    </>
  );
}
