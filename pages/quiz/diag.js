import * as React from "react";
import LeftIcon from "@mui/icons-material/TurnLeft";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import Image from "next/image";

import Router from "next/router";

import styles from "../../styles/Home.module.css";

export default function Quiz() {
  return (
    <div className={styles.container}>
      <AppBar position="sticky" sx={{ backgroundColor: "whitesmoke" }}>
        <Toolbar variant="regular" sx={{ color: "black" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => Router.back()}
          >
            <LeftIcon />
          </IconButton>

          <Typography variant="h6" color="inherit" component="div">
            Diagnostic
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={styles.quiz_container}>
        <FormControl sx={{ padding: 2, width: "100%" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Question 1
            <Image
              src="/assets/quiz/01.png"
              alt="img 1"
              width="110"
              height="30"
              layout="responsive"
              priority
            />
          </FormLabel>
          <RadioGroup
            sx={{ display: "flex", justifyContent: "space-around" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Question 2
            <Image
              src="/assets/quiz/02.png"
              alt="img 2"
              width="110"
              height="30"
              layout="responsive"
              priority
            />
          </FormLabel>
          <RadioGroup
            sx={{ display: "flex", justifyContent: "space-around" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Question 3
            <Image
              src="/assets/quiz/03.png"
              alt="img 3"
              width="110"
              height="30"
              layout="responsive"
              priority
            />
          </FormLabel>
          <RadioGroup
            sx={{ display: "flex", justifyContent: "space-around" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Question 4
            <Image
              src="/assets/quiz/04.png"
              alt="img 4"
              width="110"
              height="30"
              layout="responsive"
              priority
            />
          </FormLabel>
          <RadioGroup
            sx={{ display: "flex", justifyContent: "space-around" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Question 5
            <Image
              src="/assets/quiz/05.png"
              alt="img 5"
              width="110"
              height="30"
              layout="responsive"
              priority
            />
          </FormLabel>
          <RadioGroup
            sx={{ display: "flex", justifyContent: "space-around" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Question 6
            <Image
              src="/assets/quiz/06.png"
              alt="img 6"
              width="110"
              height="30"
              layout="responsive"
              priority
            />
          </FormLabel>
          <RadioGroup
            sx={{ display: "flex", justifyContent: "space-around" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Question 7
            <Image
              src="/assets/quiz/08.png"
              alt="img 8"
              width="110"
              height="30"
              layout="responsive"
              priority
            />
          </FormLabel>
          <RadioGroup
            sx={{ display: "flex", justifyContent: "space-around" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Question 8
            <Image
              src="/assets/quiz/09.png"
              alt="img 9"
              width="110"
              height="30"
              layout="responsive"
              priority
            />
          </FormLabel>
          <RadioGroup
            sx={{ display: "flex", justifyContent: "space-around" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Question 9
            <Image
              src="/assets/quiz/10.png"
              alt="img 10"
              width="110"
              height="30"
              layout="responsive"
              priority
            />
          </FormLabel>
          <RadioGroup
            sx={{ display: "flex", justifyContent: "space-around" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Question 10
            <Image
              src="/assets/quiz/11.png"
              alt="img 11"
              width="110"
              height="30"
              layout="responsive"
              priority
            />
          </FormLabel>
          <RadioGroup
            sx={{ display: "flex", justifyContent: "space-around" }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <br />
          <Button
            sx={{ mb: 10 }}
            variant="contained"
            onClick={() => Router.push("/quiz/chart")}
          >
            Submit
          </Button>
        </FormControl>
      </div>
    </div>
  );
}
