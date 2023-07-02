import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Link, Typography, Tabs, Tab } from "@mui/material";
import { useRouter } from "next/router";
import RightSection from "./RightSection";
import Buy from "./Buy";
import API from "../common/API";
import { Circle } from "@mui/icons-material";

export default function LeftSection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [path, setPath] = useState("goerli");
  const [id, setID] = useState("1672125057490599938");

  const getAllCoinTypesQuery = `/jeecg-boot/faecut/getAllCoinTypes`;
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function getAllCoinTypes() {
      try {
        const response = await API.get(getAllCoinTypesQuery);
        const records = response.data.result;
        console.log(records, "records1702");

        let tempList = [];
        records.forEach((record) => {
          tempList.push(record);
        });

        setCoins([...tempList]);
      } catch (error) {
        console.error(error);
      }
    }
    getAllCoinTypes();
  }, [coins]);

  const handleTabClick = (index, coin) => {
    setActiveTab(index);
    setPath(coin.code);
    setID(coin.id);
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
          display: "flex",
          flexDirection: "row",
          // maxWidth: "60%",
          scale: "0.6",
          // transform: "translateX(50%)",
          // height: "60vh",
          // marginTop: "10%",
          marginX: "auto",
        }}
      >
        <Box
          sx={{
            flex: 0.3,
            // minWidth: "250px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                background: "#fff",
                borderRadius: "10px",
                padding: "10px 0px",
                flex: 1,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  padding: "5px 10px",
                }}
              >
                Available tokens{" "}
              </Typography>

              <hr />
              <Box>
                <Tabs
                  orientation="vertical"
                  value={activeTab}
                  sx={{
                    "& .MuiTabs-indicator": {
                      width: "0 !important",
                    },
                  }}
                >
                  {coins.map((coin, index) => {
                    return (
                      <Tab
                        key={coin.id}
                        label={
                          <>
                            <Typography
                              sx={{
                                position: "relative",
                                cursor: "pointer",
                                "&.MuiTypography-root": {
                                  position: "absolute",
                                  left: "16px",
                                },
                              }}
                            >
                              {coin.code}
                              <span style={{ color: "#13c1a1" }}>
                                {" "}
                                {coin.main}
                              </span>
                            </Typography>
                            <Circle
                              sx={{
                                color: "#13c1a1",
                                width: "10px",
                                height: "10px",
                                right: "20px",
                                position: "absolute",
                              }}
                            />
                          </>
                        }
                        onClick={(event) => {
                          event.stopPropagation();
                          handleTabClick(index, coin);
                        }}
                        sx={{
                          width: "100%",
                          backgroundColor:
                            activeTab === index ? "#ef7cb4" : "transparent",
                          color: activeTab === index ? "#fff" : "#666666",
                          textTransform: "capitalize",
                          textAlign: "left",
                          "& .MuiButtonBase-root": {
                            maxWidth: "100% !important",
                          },
                          "& .Mui-selected": {
                            maxWidth: "100% !important",
                          },
                        }}
                        value={index}
                      />
                    );
                  })}
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
            <Buy />
          </Box>

          {/* <Box
          sx={{
            marginTop: "20px",
            padding: "20px 10px",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          Need more tokens?Take a look at our telegram post{" "} */}
          {/* //todo  change link?*/}
          {/* <a href="https://t.me/faucet_trade/11" target="_blank">
            here
          </a>
          <Contact />
        </Box> */}
        </Box>
        <RightSection testnet={path} id={id} />
      </Box>
    </>
  );
}
