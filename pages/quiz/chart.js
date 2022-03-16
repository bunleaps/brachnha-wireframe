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
import DvrIcon from "@mui/icons-material/Dvr";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import CheckIcon from "@mui/icons-material/Check";
import WrongIcon from "@mui/icons-material/Close";

import Router from "next/router";
import Image from "next/image";

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
            onClick={() => Router.push("/")}
          >
            <LeftIcon />
          </IconButton>

          <Typography variant="h6" color="inherit" component="div">
            Diagnostic Results
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={styles.quiz_container}>
        <FormControl sx={{ padding: 2, width: "100%" }}>
          <center>
            <h1>
              <DvrIcon /> 9/10
            </h1>
          </center>
          <Box sx={{ display: "flex", justifyContent: "center", border: "1px dashed grey", p: 2 }}>
            <Box sx={{ position: "relative", display: "inline-flex", mr: 3 }}>
              <CircularProgress
                size={68}
                variant="determinate"
                value="90"
                sx={{
                  color: "#1dd1a1",
                  backgroundColor: "#c8d6e5",
                  borderRadius: "50%",
                }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  All 90%
                </Typography>
              </Box>
            </Box>
            <Box sx={{ position: "relative", display: "inline-flex", mr: 3 }}>
              <CircularProgress
                size={68}
                variant="determinate"
                value="75"
                sx={{
                  color: "#48dbfb",
                  backgroundColor: "#c8d6e5",
                  borderRadius: "50%",
                }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  Trig 75%
                </Typography>
              </Box>
            </Box>
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress
                size={68}
                variant="determinate"
                value="50"
                sx={{
                  color: "#feca57",
                  backgroundColor: "#c8d6e5",
                  borderRadius: "50%",
                }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  Geo 50%
                </Typography>
              </Box>
            </Box>
          </Box>
          <br />

          <Box component="span" sx={{ p: 1, border: "1px dashed grey", mb: 8 }}>
            <h3>Recommendation</h3>
            <div className={styles.MainMenuCard}>
              <Card variant="outlined" sx={{ minWidth: 180, mb: 1, mr: 1 }}>
                <CardContent>
                  <h4>Trig 2</h4>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ minWidth: 180, mb: 1 }}>
                <CardContent>
                  <h4>Trig 3</h4>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ minWidth: 180, mb: 1 }}>
                <CardContent>
                  <h4>Geo 1</h4>
                </CardContent>
              </Card>
            </div>
          </Box>

          <FormLabel id="demo-row-radio-buttons-group-label">
            <CheckIcon /> Question 1
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
            defaultValue="1"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            <CheckIcon /> Question 2
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
            defaultValue="1"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            <CheckIcon /> Question 3
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
            defaultValue="1"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            <CheckIcon /> Question 4
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
            defaultValue="1"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            <CheckIcon /> Question 5
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
            defaultValue="1"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            <CheckIcon /> Question 6
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
            defaultValue="1"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            <CheckIcon /> Question 7
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
            defaultValue="1"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            <CheckIcon /> Question 8
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
            defaultValue="1"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            <CheckIcon /> Question 9
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
            defaultValue="1"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            <WrongIcon />
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
            sx={{ display: "flex", justifyContent: "space-around", mb: 10 }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="1"
          >
            <FormControlLabel value="3" control={<Radio />} label="A" />
            <FormControlLabel value="0" control={<Radio />} label="B" />
            <FormControlLabel value="1" control={<Radio />} label="C" />
            <FormControlLabel value="2" control={<Radio />} label="D" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}
