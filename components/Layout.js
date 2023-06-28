/* eslint-disable no-undef */
import React from "react";
import Head from "next/head";
import { Box, CssBaseline, Typography } from "@mui/material";

import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
export default function Layout({ children, title, description, bgcolor }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.cdnfonts.com/css/din-alternate"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/icons/logo.png" />
        <title>{title || "FaucetDAO"}</title>
        <meta
          name="description"
          content="FrenArt - From Friendship Bracelet Holder to FrenArt DAO. From one Friendship bracelet to one FrenArt Governance NFT."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/icons/logo.png" />
        <meta property="og:title" content={title || "FaucetDAO"} />
        <meta property="og:description" content={description || "FaucetDAO."} />
        {/* <meta property="og:url" content="https://lxdao.io/" /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>

      <CssBaseline />
      <Box
        sx={{
          //   backgroundImage: `url(${backgroundImage.src})`,
          //   backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          display: "flex",
          height: "100vh",
          background: "linear-gradient(to bottom, #90ede8, transparent)",
          justifyContent: "center",
        }}
      >
        <React.StrictMode>
          <Box
            sx={{
              width: "15vw",
              maxWidth: "150px",
              position: "absolute",
              left: "10px",
              top: "10px",
            }}
          >
            <img src="/logo.png" width="100%" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
              width: "100%",
              position: "absolute",
              top: "s16%",
              // transform: "translateY(-50%)",
              padding: "0 20%",
            }}
          >
            <Header />
            {/* <Box sx={{ flex: 1 }}>{children}</Box> */}
          </Box>
          <Footer />
        </React.StrictMode>
      </Box>
    </>
  );
}
