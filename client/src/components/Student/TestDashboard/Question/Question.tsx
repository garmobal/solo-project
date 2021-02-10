import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Answer from '../Answer/Answer';
import styles from './Question.module.scss';
import { checkUserAnswer } from '../../../../store/actions/testActions';
import { updateStudentResults } from '../../../../store/actions/studentListActions';
import { SystemState, Quizz, CurrentQuest, Progress, TestQuestion, Student, UserAnswer } from '../../../../types';

interface IProps {
filter?: Function;
nextButton: Function;
updateStudentResults: Function;
quizz: Quizz;
progress?: Progress;
currQuest: CurrentQuest;
student?: Student;
question: TestQuestion;

}

const Question = (props: IProps) => {
  const [userIsAnswering, setuserIsAnswering] = useState(true); 
  const [showExit, setShowExit] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars

  const dispatch = useDispatch();
  const progress = useSelector((state: SystemState) => state.progress);
  const student = useSelector((state: SystemState) => state.currentStudent);

  // Submit to DB to check
  const submitAnswerHandler = (userAnswer: UserAnswer) => {
    const answerObject = {
      learner: true,
      answer: userAnswer,
      qid: props.question._id, 
      question: props.question.question,
      testid: props.quizz._id,
    };
    dispatch(checkUserAnswer(answerObject));
    setuserIsAnswering(false);
  };

  let feedbackStyle = 'waiting';
  if (progress[props.currQuest]) {
    feedbackStyle = progress[props.currQuest].correct ? 'correct' : 'incorrect';
  }

  // Next Button
  const nextButtonHandler = () => {
    if (props.currQuest === props.quizz.questions.length - 1) {
      setuserIsAnswering(true); // HERE

      const correct = progress.filter((question) => question.correct).length;
      const completedTest = {
        id: props.quizz._id,
        title: props.quizz.title,
        result: {
          percentage: Math.round(
            (correct / props.quizz.questions.length) * 100
          ),
          questions: progress,
        },
      };

      dispatch(updateStudentResults(student._id, 'completed', completedTest));
      props.nextButton(completedTest); // maybe tomeouthere
      // props.history.replace('/user'); why are you not workingggg?
    } else {
      // if (props.currQuest === props.quizz.questions.length - 2) setShowExit(true);
      setuserIsAnswering(true); // HERE
      props.nextButton(false);
    }
  };

  return (
    <div className={styles.Question}>
      <div
        className={
          props.question.image
            ? styles.QuestionTitleAndImage
            : styles.QuestionTitle
        }
      >
        {props.question.question}
        {props.question.image ? (
          <img
            alt="Question"
            style={{ height: '250px', borderRadius: '10px' }}
            src={props.question.image}
          />
        ) : null}
      </div>
      <div className={styles.Options}>
        {props.question.options.map((opt, i) => (
          <Answer
            key={i}
            submitAnswerHandler={submitAnswerHandler}
            disableButton={!userIsAnswering}
            fb={feedbackStyle}
            currQuest={props.currQuest}
          >
            {opt}
          </Answer>
        ))}
      </div>
      {showExit ? (
        <Link to={'/user'}>
          <div className={styles.NextButtonContainer}>
            <button
              className={styles.NextButton}
              onClick={nextButtonHandler}
              disabled={userIsAnswering}
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </Link>
      ) : (
        <div className={styles.NextButtonContainer}>
          <button
            className={styles.NextButton}
            onClick={nextButtonHandler}
            disabled={userIsAnswering}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

// Conditionally change answers display to a single column when there are more characters.

export default Question;
