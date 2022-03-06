import * as React from "react";
import LeftIcon from "@mui/icons-material/TurnLeft";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import Router from "next/router";

import styles from "../../styles/Home.module.css";

export default function Quiz() {
  return (
    <div className={styles.container}>
      <h2>
        <LeftIcon onClick={() => Router.back()} /> Quiz 1
      </h2>
      <div className={styles.quiz_container}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Question 1
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="3" control={<Radio />} label="Answer 1" />
            <FormControlLabel value="0" control={<Radio />} label="Answer 2" />
            <FormControlLabel value="1" control={<Radio />} label="Answer 3" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Question 2
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="3" control={<Radio />} label="Answer 1" />
            <FormControlLabel value="0" control={<Radio />} label="Answer 2" />
            <FormControlLabel value="1" control={<Radio />} label="Answer 3" />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Question 3
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="3" control={<Radio />} label="Answer 1" />
            <FormControlLabel value="0" control={<Radio />} label="Answer 2" />
            <FormControlLabel value="1" control={<Radio />} label="Answer 3" />
          </RadioGroup>
          <Button variant="contained" onClick={() => Router.push("/quiz/results")}>Submit</Button>
        </FormControl>
      </div>
    </div>
  );
}
