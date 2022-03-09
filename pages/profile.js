import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import styles from "../styles/Home.module.css";

import Recents from './app-components/recents';

export default function Profile() {
  return (
    <div className={styles.container}>
      <AppBar position="sticky" sx={{ backgroundColor: "whitesmoke" }}>
        <Toolbar variant="regular" sx={{ color: "black" }}>
          <AccountCircleIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" component="div">
            Profile
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={styles.prof_container}>
        <div>
        <Avatar sx={{ margin: 2, width: 100, height: 100, fontSize: 50, bgcolor: deepOrange[500] }}>P</Avatar>
        </div>
        <div className={styles.prof_file}>
          <h3 className={styles.prof_text}>Pisal Pov</h3>
          <h4 className={styles.prof_text}>Liger Leadership Academy</h4>
          <h4 className={styles.prof_text}>Grade 11</h4>
        </div>
      </div>
      <Recents />
    </div>
  );
}
