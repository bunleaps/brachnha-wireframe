import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Typography from "@mui/material/Typography";

import styles from "../styles/Home.module.css";

export default function BookMark() {
  return (
    <div className={styles.container}>
      <AppBar position="sticky" sx={{ backgroundColor: "whitesmoke" }}>
        <Toolbar variant="regular" sx={{ color: "black" }}>
          <BookmarkIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" component="div">
            Bookmarks
          </Typography>
        </Toolbar>
      </AppBar>

      <br />
      <Typography variant="h5" sx={{fontWeight: 'bold', paddingLeft: '10px', paddingTop: '5px'}}>
          To-Do
      </Typography>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        aria-label="contacts"
      >
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon sx={{ color: "#feca57" }} />
            </ListItemIcon>
            <ListItemText primary="Trig 1" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon sx={{ color: "#feca57" }} />
            </ListItemIcon>
            <ListItemText primary="Geometry 2" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon sx={{ color: "#feca57" }} />
            </ListItemIcon>
            <ListItemText primary="Geometry 3" />
          </ListItemButton>
        </ListItem>
      </List>
      <Typography variant="h5" sx={{fontWeight: 'bold', paddingLeft: '10px', paddingTop: '5px'}}>
          Done
      </Typography>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        aria-label="contacts"
      >
        <ListItem>
          <ListItemButton sx={{ backgroundColor: '#1dd1a1' }}>
            <ListItemIcon>
              <StarIcon sx={{ color: "#feca57",}} />
            </ListItemIcon>
            <ListItemText primary="Trig 2" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ backgroundColor: '#1dd1a1' }}>
            <ListItemIcon>
              <StarIcon sx={{ color: "#feca57" }} />
            </ListItemIcon>
            <ListItemText primary="Geometry 1" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ backgroundColor: '#1dd1a1' }}>
            <ListItemIcon>
              <StarIcon sx={{ color: "#feca57" }} />
            </ListItemIcon>
            <ListItemText primary="Limit 1" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
