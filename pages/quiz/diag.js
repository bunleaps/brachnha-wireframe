import * as React from "react";
import LeftIcon from "@mui/icons-material/TurnLeft";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import CheckIcon from "@mui/icons-material/Check";

import Router from "next/router";

import styles from "../../styles/Home.module.css";

export default function Quiz() {
  return (
    <div className={styles.container}>
      <h2>
        <LeftIcon onClick={() => Router.back()} /> Dianogstic 1
      </h2>
      <div className={styles.quiz_container}>
        <FormControl>
          
          <Button variant="contained" onClick={() => Router.push("/quiz/diag")}>Test</Button>
        </FormControl>
      </div>
    </div>
  );
}
