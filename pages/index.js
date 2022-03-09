import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Recent from "./app-components/recents";
import MainMenu from "./app-components/mainmenu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BrachNha</title>
        <meta name="description" content="BrachNha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppBar position="sticky" sx={{ backgroundColor: "whitesmoke" }}>
          <Toolbar variant="regular" sx={{ color: "black" }}>
            <HomeIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" component="div">
              Recents
            </Typography>
          </Toolbar>
        </AppBar>
        <Recent />
        <MainMenu />
      </main>
    </div>
  );
}
