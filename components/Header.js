import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Link, Typography, Tabs, Tab } from "@mui/material";
import { useRouter } from "next/router";
import RightSection from "./RightSection";
import Buy from "./Buy";
import API from "../common/API";

export default function Header() {
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
              {coins.map((coin, index) => {
                return (
                  <Tab
                    key={coin.id}
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
                        {coin.code}
                        <span style={{ color: "#13c1a1" }}> {coin.main}</span>
                      </Typography>
                    }
                    onClick={(event) => {
                      event.stopPropagation();
                      handleTabClick(index, coin);
                    }}
                    style={{
                      width: "100%",
                      backgroundColor:
                        activeTab === index ? "#ef7cb4" : "transparent",
                      color: activeTab === index ? "#fff" : "#666666",
                      textTransform: "capitalize",
                      textAlign: "left",
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
    </>
  );
}
