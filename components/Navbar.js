import * as React from "react";
import { makeStyles } from "@mui/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Router from 'next/router';
import styles from "../styles/Home.module.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: "whitesmoke",
  }
});

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  return (
    <div className={styles.Navbar}>
      <BottomNavigation
        className={classes.root}
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <BottomNavigationAction label="Recents" icon={<HomeIcon />} onClick={() => Router.push('/')}/>
            <BottomNavigationAction label="Bookmarks" icon={<BookmarkIcon />} onClick={() => Router.push('/bookmark')}/>
            <BottomNavigationAction label="Search" icon={<SearchIcon />} onClick={() => Router.push('/search')}/>
            <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} onClick={() => Router.push('/profile')}/>
      </BottomNavigation>
    </div>
  );
}
