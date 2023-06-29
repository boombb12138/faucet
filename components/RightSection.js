import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { ethers } from "ethers";

import styles from "../styles/Home.module.css";
import Captcha from "./Captcha";
import API from "../common/API";

export default function RightSection({ testnet, id }) {
  const [address, setAddress] = useState(" ");
  const [isValid, setIsValid] = useState(" ");

  const isValidEthAddress = (address) => {
    try {
      const validAddress = ethers.utils.getAddress(address);
      console.log(validAddress, address);
      return validAddress === address.toLowerCase();
    } catch (error) {
      return false;
    }
  };

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  useEffect(() => {
    setIsValid(isValidEthAddress(address));
  }, [address]);

  let getTwitterContentQuery = `/jeecg-boot/faecut/getTwitterContent?`;
  let params = [];
  if (address) {
    params.push("address=" + address);
  }
  params.push("coinId=" + id);
  getTwitterContentQuery += params.join("&");
  console.log(getTwitterContentQuery);
  const [twitterContent, setTwitterContent] = useState("");

  async function getTwitterContent() {
    try {
      const response = await API.get(getTwitterContentQuery);
      const records = response.data.result;
      console.log(response.data.message, "response");
      setTwitterContent(response.data.message);
      // let tempList = [];
      // records.forEach((record) => {
      //   tempList.push(record);
      // });

      // setCoins([...tempList]);
    } catch (error) {
      console.error(error);
    }
  }
  getTwitterContent();

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
          maxheight: "70vh",
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
            value={address}
            onChange={handleChange}
            Validate
          />
          {/* {twitterContent} */}
          {/* {!isValid ? "Your address is invalid" : null} */}
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
