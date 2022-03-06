import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import { makeStyles } from "@mui/styles";

import SearchIcon from '@mui/icons-material/Search';

import Router from "next/router";

import styles from "../styles/Home.module.css";

const useStyles = makeStyles({
  root: {
    margin: "5px",
  },
});

export default function Search() {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <h1>Search</h1>

      <div className={styles.MainMenuCard}>
        <TextField
          className={classes.root}
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
        <Card
          className={classes.root}
          sx={{ minWidth: 400 }}
          onClick={() => Router.push("/search")}
        >
          <CardContent>
            <h2>Math</h2>
          </CardContent>
        </Card>
        <Card
          className={classes.root}
          sx={{ minWidth: 400 }}
          onClick={() => Router.push("/search")}
        >
          <CardContent>
            <h2>Biology</h2>
          </CardContent>
        </Card>
        <Card
          className={classes.root}
          sx={{ minWidth: 400 }}
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
