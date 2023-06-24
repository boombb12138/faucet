import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Link, Typography, Tabs, Tab } from "@mui/material";
import { useRouter } from "next/router";
import RightSection from "./RightSection";

export default function Header() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [path, setPath] = useState("goerli");

  const handleTabClick = (index, path) => {
    setActiveTab(index);
    setPath(path.slice(1));
    // router.push(path);
  };

  useEffect(() => {
    // 确保在activeTab更新之后再操作

    console.log(activeTab);
    console.log(path);
  }, [activeTab]);

  return (
    <>
      <Box
        sx={{
          flex: 0.5,
        }}
      >
        <Box
          sx={{
            background: "#fff",
            borderRadius: "10px",
            padding: "10px 0px",
          }}
        >
          <Typography sx={{ fontWeight: "700", padding: "10px 10px" }}>
            Available tokens{" "}
          </Typography>

          <hr />
          <Box>
            <Tabs orientation="vertical" value={activeTab}>
              <Tab
                label={
                  <Typography
                    sx={{
                      cursor: "pointer",
                      "&.MuiTypography-root": {
                        position: "absolute",
                        left: "16px",
                      },
                    }}
                  >
                    Goerli
                    <span style={{ color: "#13c1a1" }}> ETH</span>
                  </Typography>
                }
                onClick={(event) => {
                  event.stopPropagation();
                  handleTabClick(0, "/goerli");
                }}
                style={{
                  width: "100%",
                  backgroundColor: activeTab === 0 ? "#ef7cb4" : "transparent",
                  color: activeTab === 0 ? "#fff" : "#666666",
                  textTransform: "capitalize",
                  textAlign: "left",
                }}
                value={0}
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      cursor: "pointer",
                      "&.MuiTypography-root": {
                        position: "absolute",
                        left: "16px",
                      },
                    }}
                  >
                    Linea
                    <span style={{ color: "#13c1a1" }}> ETH</span>
                  </Typography>
                }
                onClick={(event) => {
                  event.stopPropagation();
                  handleTabClick(1, "/linea");
                }}
                style={{
                  width: "100%",
                  backgroundColor: activeTab === 1 ? "#ef7cb4" : "transparent",
                  color: activeTab === 1 ? "#fff" : "#666666",
                  textTransform: "capitalize",
                  textAlign: "left",
                }}
                value={1}
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      cursor: "pointer",
                      "&.MuiTypography-root": {
                        position: "absolute",
                        left: "16px",
                      },
                    }}
                  >
                    Sepolia
                    <span style={{ color: "#13c1a1" }}> ETH</span>
                  </Typography>
                }
                onClick={(event) => {
                  event.stopPropagation();
                  handleTabClick(2, "/sepolia");
                }}
                style={{
                  width: "100%",
                  backgroundColor: activeTab === 2 ? "#ef7cb4" : "transparent",
                  color: activeTab === 2 ? "#fff" : "#666666",
                  textTransform: "capitalize",
                  textAlign: "left",
                }}
                value={2}
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      cursor: "pointer",
                      "&.MuiTypography-root": {
                        position: "absolute",
                        left: "16px",
                      },
                    }}
                  >
                    BSC Testnet
                    <span style={{ color: "#13c1a1" }}> BNB</span>
                  </Typography>
                }
                onClick={(event) => {
                  event.stopPropagation();
                  handleTabClick(3, "/bsc");
                }}
                style={{
                  width: "100%",
                  backgroundColor: activeTab === 3 ? "#ef7cb4" : "transparent",
                  color: activeTab === 3 ? "#fff" : "#666666",
                  textTransform: "capitalize",
                  textAlign: "left",
                }}
                value={3}
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      cursor: "pointer",
                      "&.MuiTypography-root": {
                        position: "absolute",
                        left: "16px",
                      },
                    }}
                  >
                    Polygon Mumbai
                    <span style={{ color: "#13c1a1" }}> MATIC</span>
                  </Typography>
                }
                onClick={(event) => {
                  event.stopPropagation();
                  handleTabClick(4, "/polygon");
                }}
                style={{
                  width: "100%",
                  backgroundColor: activeTab === 4 ? "#ef7cb4" : "transparent",
                  color: activeTab === 4 ? "#fff" : "#666666",
                  textTransform: "capitalize",
                  textAlign: "left",
                }}
                value={4}
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      cursor: "pointer",
                      "&.MuiTypography-root": {
                        position: "absolute",
                        left: "16px",
                      },
                    }}
                  >
                    Avalanche Fuji
                    <span style={{ color: "#13c1a1" }}> AVAX</span>
                  </Typography>
                }
                onClick={(event) => {
                  event.stopPropagation();
                  handleTabClick(5, "/avalanche");
                }}
                style={{
                  width: "100%",
                  backgroundColor: activeTab === 5 ? "#ef7cb4" : "transparent",
                  color: activeTab === 5 ? "#fff" : "#666666",
                  textAlign: "left",
                  textTransform: "capitalize",
                }}
                value={5}
              />
            </Tabs>
            {/* 
            <Typography
              sx={{
                cursor: "pointer",
                backgroundColor: activeTab === 0 ? "#0e6dfb" : "transparent",
              }}
              onClick={() => {
                handleTabClick(0);
                router.push("/goerli");
              }}
            >
              Goerli
              <span style={{ color: "#86c2ff" }}> ETH</span>
            </Typography>
 */}
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            padding: "20px 10px",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          Need more tokens?Take a look at our telegram post{" "}
          {/* //todo  change link?*/}
          <a href="https://t.me/faucet_trade/11" target="_blank">
            here
          </a>
          <Box
            sx={{
              marginTop: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="/icon_contact/email.png" width="15px" height="15px" />
            <Link sx={{ marginLeft: "5px" }} href="mailto:admin@faucet.trade">
              mailto:admin@faucet.trade
            </Link>
          </Box>
          <Box
            sx={{
              marginTop: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="/icon_contact/tuite.png" width="15px" height="15px" />
            <Link
              sx={{ marginLeft: "5px" }}
              href="https://twitter.com/FaucetDAO1"
            >
              @FaucetDAO1
            </Link>
          </Box>
          <Box
            sx={{
              marginTop: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="/icon_contact/telegram.png" width="15px" height="15px" />
            <Link sx={{ marginLeft: "5px" }} href="https://t.me/faucet_trade">
              @faucet.trade
            </Link>
          </Box>
          <Box
            sx={{
              marginTop: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="/icon_contact/discord.png" width="15px" height="15px" />
            <Link sx={{ marginLeft: "5px" }} href="https://t.me/faucet_trade">
              @faucet.trade
            </Link>
          </Box>
        </Box>
      </Box>
      <RightSection testnet={path} />
    </>
  );
}
