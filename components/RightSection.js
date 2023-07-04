import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { ethers } from "ethers";

import styles from "../styles/Home.module.css";
import Captcha from "./Captcha";
import API from "../common/API";
import Debounce from "../utils/Debounce";

export default function RightSection({ testnet, id = "1672125057490599938" }) {
  const [address, setAddress] = useState(" ");
  const [isValid, setIsValid] = useState(" ");
  const [tweetURL, setTwitterURL] = useState("");
  const [validationError, setValidationError] = useState("");
  const [isCheckingURL, setIsCheckingURL] = useState(false);

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
  const tweet = `https://twitter.com/intent/tweet?text=${twitterContent}`;

  async function getTwitterContent() {
    try {
      const response = await API.get(getTwitterContentQuery);
      const records = response.data.result;
      console.log(response.data.message, "response");
      setTwitterContent(response.data.message);
      return twitterContent;
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

  let claimToken = `/jeecg-boot/faecut/claimToken?`;
  let claimTokenParam = [];
  if (address) {
    claimTokenParam.push("address=" + address);
  }
  claimTokenParam.push("coinId=" + id);
  claimTokenParam.push("twitterUrl=" + tweetURL);
  claimToken += claimTokenParam.join("&");
  const receiveToken = async () => {
    try {
      const response = await API.post(claimToken);
      console.log("claimToken");
      const records = response.data.result;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const debouncedCheckURL = Debounce((url) => {
      validateTweetURL(url);
    }, 1000);

    if (tweetURL) {
      debouncedCheckURL(tweetURL);
    } else {
      setValidationError("");
    }

    return () => {
      debouncedCheckURL.cancel();
    };
  }, [tweetURL]);
  const handleInputChange = (event) => {
    setTwitterURL(event.target.value);
  };

  const validateTweetURL = (url) => {
    const tweetURLRegex =
      /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)$/i;
    if (url.match(tweetURLRegex)) {
      setValidationError("");
    } else {
      setValidationError("Invalid tweet URL");
    }
  };

  return (
    <>
      <Box
        sx={{
          flex: 0.8,
          maxWidth: "auto", // Limit the maximum width of the box
          // maxHeight: "900px",
        }}
      >
        {" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: "20px 10px",
            background: "#fff",
            borderRadius: "10px",
            marginLeft: "20px",
            // scale: "0.8",
            boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            width: "100%",
            height: "auto",
          }}
        >
          <Typography sx={{ fontWeight: "600", fontSize: "24px" }}>
            {testnet} Faucet
          </Typography>

          <Box flex="1" width="100%">
            <Box sx={{ marginTop: "30px", width: "100%" }}>
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

            <Box sx={{ marginTop: "10px" }}>
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

              <a href={tweet}>
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

            <Box sx={{ marginTop: "10px", width: "100%" }}>
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
                value={tweetURL}
                onChange={handleInputChange}
                error={Boolean(validationError)}
                required
                placeholder="https://twitter.com/jack/status/20"
              />
            </Box>

            <Box sx={{ marginTop: "10px" }}>
              <Typography>
                <b>Step4.</b>Solve captcha
              </Typography>
              <Captcha />
            </Box>

            <hr />
            <Button
              variant="contained"
              sx={{ width: "100%", background: "#ef7cb4" }}
              onClick={receiveToken}
            >
              Receive tokens
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
