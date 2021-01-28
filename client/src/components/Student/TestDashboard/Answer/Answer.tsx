import React, { useState, useEffect } from 'react';
import {CurrentQuest} from '../../../../types'
import styles from './Answer.module.scss';

interface IProps {
  currQuest: CurrentQuest;
  children: string[];
  disableButton: boolean;
  fb: string;
  submitAnswerHandler: Function;
}

const Answer = (props: IProps) => {

  const [clicked, setClicked] = useState(false);

  useEffect(() => {setClicked(false)}, [props.currQuest]);

  return (
    <div className={styles.OptionButton}>
      <button 
        className={clicked ? [styles.Button, styles[props.fb]].join(' ') : styles.Button}
        onClick={() => {
          setClicked(true);
          props.submitAnswerHandler(props.children);
        }}
        disabled={props.disableButton}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Answer;
