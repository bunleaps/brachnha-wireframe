import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from "@mui/styles";

import Router from 'next/router'

import styles from '../../styles/Home.module.css'

const useStyles = makeStyles({
    root: {
      margin: "5px",
    }
  });

export default function MainMenu() {

    const classes = useStyles();

    return(
        <div className={styles.container}>
            <h1>Main Menu</h1>

            <div className={styles.MainMenuCard}> 
                <Card className={classes.root} sx={{ minWidth: 195 }} onClick={() => Router.push('/search')}>
                    <CardContent>
                        <h2>Lessons</h2>
                    </CardContent>
                </Card>
                <Card className={classes.root} sx={{ minWidth: 195 }} onClick={() => Router.push('/search')}>
                    <CardContent>
                        <h2>Test Prep</h2>
                    </CardContent>
                </Card>
                <Card className={classes.root} sx={{ minWidth: 195 }} onClick={() => Router.push('/search')}>
                    <CardContent>
                        <h2>Dianogstic</h2>
                    </CardContent>
                </Card>
                <Card className={classes.root} sx={{ minWidth: 195 }} >
                    <CardContent>
                        <h2>Coming Soon</h2>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}