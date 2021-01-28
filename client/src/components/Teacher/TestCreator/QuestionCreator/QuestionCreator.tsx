import React, { useState } from 'react';
import CreateButton from '../../../UI/CreateButton/CreateButton';

import styles from './QuestionCreator.module.scss';

interface IProps {
  saveQuestion: Function;
}

const QuestionCreator = (props: IProps) => {
  const [titleValue, setTitleValue] = useState('');

  const inputTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitleValue(e.target.value);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    props.saveQuestion(e.target);
    setTitleValue('');
  };

  return (
    <div className={styles.QuestionCreator}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="question"
          aria-label="question"
          placeholder="Question"
          autoComplete="off"
          required
          value={titleValue}
          onChange={inputTitleHandler}
        />
        <input
          type="text"
          name="a"
          aria-label="option-a"
          placeholder="Option a"
          autoComplete="off"
          required
        />
        <input
          type="text"
          name="b"
          aria-label="option-b"
          placeholder="Option b"
          autoComplete="off"
          required
        />
        <input
          type="text"
          name="c"
          aria-label="option-c"
          placeholder="Option c"
          autoComplete="off"
          required
        />
        <input
          type="text"
          name="d"
          aria-label="option-d"
          placeholder="Option d"
          autoComplete="off"
          required
        />
        <select aria-label="correctanswer" name="answer">
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
        <input
          type="file"
          placeholder="Choose image"
          name="selectedImage"
          className={styles.ImageInput}
        />
        <div className={styles.Button}>
          <CreateButton type={'submit'}>
            <div>Add Question</div>
          </CreateButton>
        </div>
      </form>
    </div>
  );
};

export default QuestionCreator;
