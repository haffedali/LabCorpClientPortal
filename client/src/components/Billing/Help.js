import React from 'react';
import { useStyles } from './Help.styles.js'
import {Divider} from '@material-ui/core';

const Help = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.helpContainer}>
      <h3>Need an answer, have a question?</h3>

      <h1 className={classes.helpMainHead}>Frequently Asked Questions</h1>
      <h3 className={classes.helpQ}>Question 1, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
      <h3 className={classes.helpQ}>Question 2, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
      <h3 className={classes.helpQ}>Question 3, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
      <h3 className={classes.helpQ}>Question 4, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
      <h3 className={classes.helpQ}>Question 5, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
      <h3 className={classes.helpQ}>Question 6, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
      <h3 className={classes.helpQ}>Question 7, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
      <h3 className={classes.helpQ}>Question 8, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
      <h3 className={classes.helpQ}>Question 9, Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>

      <Divider className={classes.divider} />

      <h2 className={classes.helpHead}>Answer 1:</h2>
      <div className={classes.helpA}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </div>
      <h2 className={classes.helpHead}>Answer 2:</h2>
      <div className={classes.helpA}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </div>
      <h2 className={classes.helpHead}>Answer 3:</h2>
      <div className={classes.helpA}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </div>
      <h2 className={classes.helpHead}>Answer 4:</h2>
      <div className={classes.helpA}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </div>
      <h2 className={classes.helpHead}>Answer 5:</h2>
      <div className={classes.helpA}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </div>
      <h2 className={classes.helpHead}>Answer 6:</h2>
      <div className={classes.helpA}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </div>
      <h2 className={classes.helpHead}>Answer 7:</h2>
      <div className={classes.helpA}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </div>
      <h2 className={classes.helpHead}>Answer 8:</h2>
      <div className={classes.helpA}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </div>
      <h2 className={classes.helpHead}>Answer 9:</h2>
      <div className={classes.helpA}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </div>
    </div>
  )
}

export default Help;