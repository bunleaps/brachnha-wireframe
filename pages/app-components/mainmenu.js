import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Router from "next/router";

import styles from "../../styles/Home.module.css";

export default function MainMenu() {
  return (
    <div className={styles.container}>
      <Typography variant="h5" sx={{fontWeight: 'bold', paddingLeft: '10px'}}>
          Main Menu
      </Typography>

      <div className={styles.MainMenuCard}>
        <Card
          sx={{
            minWidth: 195,
            backgroundColor: "#48dbfb",
            margin: "5px",
          }}
          onClick={() => Router.push("/search")}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{ width: 150, paddingTop: 3, margin: "0 auto" }}
            image="/assets/icons/documents.png"
          />
          <CardContent sx={{ textAlign: "center" }}>
            <h2>Lessons</h2>
          </CardContent>
        </Card>
        <Card
          sx={{ minWidth: 195, backgroundColor: "#ff6b6b", margin: "5px" }}
          onClick={() => Router.push("/search")}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{ width: 150, paddingTop: 4, margin: "0 auto" }}
            image="/assets/icons/literature.png"
          />
          <CardContent sx={{ textAlign: "center" }}>
            <h2>Test Prep</h2>
          </CardContent>
        </Card>
        <Card
          sx={{ minWidth: 195, backgroundColor: "#feca57", margin: "5px" }}
          onClick={() => Router.push("/quiz/diag")}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{ width: 150, paddingTop: 3, margin: "0 auto" }}
            image="/assets/icons/cafe.png"
          />
          <CardContent sx={{ textAlign: "center" }}>
            <h2>Diagnostic</h2>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 195, backgroundColor: "#1dd1a1", margin: "5px" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <h2>Coming Soon</h2>
          </CardContent>
        </Card>
      </div>
      <br />
    </div>
  );
}
