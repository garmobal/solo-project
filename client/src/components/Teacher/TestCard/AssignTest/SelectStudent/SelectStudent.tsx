import React, { useState } from 'react';
import { Student } from '../../../../../types';

import styles from './SelectStudent.module.scss';

interface IProps {
  student: Student;
  selectNameHandler: (student: Student) => void;
  children: JSX.Element;
}

const SelectStudent = (props: IProps) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => setSelected(!selected);
  return (
    <div
      className={selected ? styles.Selected : styles.Unselected}
      onClick={() => {
        toggleSelected();
        props.selectNameHandler(props.student);
      }}
    >
      {props.children}
    </div>
  );
};

export default SelectStudent;
