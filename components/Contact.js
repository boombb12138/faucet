import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Link, Typography, Tabs, Tab } from "@mui/material";
import API from "../common/API";

export default function Contact() {
  const query = `/jeecg-boot/faecut/getCompanyInfo`;
  const [contact, setContact] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get(query);
        const { discord, email, telegram, twitter, website } =
          response.data.result;
        const list = [];
        list.push(discord);
        list.push(email);
        list.push(telegram);
        list.push(twitter);
        list.push(website);
        console.log(list);
        setContact(list);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [contact]);

  return (
    <>
      <Box
        sx={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: "0%",
          transform: "translate(50%,-50%)",
          right: "50%",
        }}
      >
        <Link sx={{ marginLeft: "15px" }} href={contact[1]}>
          <img src="/icon_contact/email.png" width="25px" height="25px" />
        </Link>

        <Link sx={{ marginLeft: "15px" }} href={contact[3]}>
          <img src="/icon_contact/tuite.png" width="25px" height="25px" />
        </Link>

        <Link sx={{ marginLeft: "15px" }} href={contact[0]}>
          <img src="/icon_contact/discord.png" width="25px" height="25px" />
        </Link>
      </Box>
    </>
  );
}
