import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";

import Router from "next/router";

import styles from '../../styles/Home.module.css'

export default function Search() {
  return (
    <div className={styles.container}>
      <h1>Recents Quiz</h1>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}
        aria-label="contacts"
      >
        <ListItem>
          <ListItemButton onClick={() => Router.push("/quiz")}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Test #1" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Test #2" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Test #3" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
