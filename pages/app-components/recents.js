import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import Typography from '@mui/material/Typography';

import Router from "next/router";

import styles from '../../styles/Home.module.css'

export default function Search() {
  return (
    <div className={styles.container}>
      <Typography variant="h5" sx={{fontWeight: 'bold', paddingLeft: '10px', paddingTop: '5px'}}>
          Recent Quiz
      </Typography>

      <List sx={{ width: "100%", bgcolor: "background.paper" }}
        aria-label="contacts"
      >
        <ListItem>
          <ListItemButton sx={{backgroundColor: '#10ac84'}} onClick={() => Router.push("/quiz")}>
            <ListItemIcon>
              <AssistantPhotoIcon sx={{color: '#1dd1a1'}}/>
            </ListItemIcon>
            <ListItemText primary="Trig 1" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{backgroundColor: '#48dbfb'}}>
            <ListItemIcon>
              <AssistantPhotoIcon />
            </ListItemIcon>
            <ListItemText primary="Geometry 2" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{backgroundColor: '#48dbfb'}}>
            <ListItemIcon>
              <AssistantPhotoIcon />
            </ListItemIcon>
            <ListItemText primary="Geometry 3" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
