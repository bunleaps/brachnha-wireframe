import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";

import SearchIcon from "@mui/icons-material/Search";

import Router from "next/router";

import styles from "../styles/Home.module.css";

export default function Search() {
  return (
    <div className={styles.container}>
      <AppBar position="sticky" sx={{ backgroundColor: "whitesmoke" }}>
        <Toolbar variant="regular" sx={{ color: "black" }}>
          <SearchIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" component="div">
            Search
          </Typography>
        </Toolbar>
      </AppBar>

      <br />
      <div className={styles.MainMenuCard}>
        <TextField
          sx={{ margin: "5px" }}
          fullWidth
          label="Search"
          id="fullWidth"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <br />
        <br />
        <Card
          sx={{ minWidth: 430, margin: "5px auto", backgroundColor: '#48dbfb' }}
          onClick={() => Router.push("/search")}
        >
          <CardContent>
            <h2>Math</h2>
          </CardContent>
        </Card>
        <Card
          sx={{ minWidth: 430, margin: "5px auto", backgroundColor: '#ff6b6b' }}
          onClick={() => Router.push("/search")}
        >
          <CardContent>
            <h2>Biology</h2>
          </CardContent>
        </Card>
        <Card
          sx={{ minWidth: 430, margin: "5px auto", backgroundColor: '#feca57' }}
          onClick={() => Router.push("/search")}
        >
          <CardContent>
            <h2>Chemistry</h2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
