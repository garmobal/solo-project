import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import SelectStudent from './SelectStudent/SelectStudent';
import { updateStudentsPendingTests } from '../../../../store/actions/studentListActions';
import styles from './AssignTest.module.scss';
import { Student, Test } from '../../../../types';

interface IProps {
  test: Test;
  close: () => void;
  students: Student[];
}

const AssignTest = (props: IProps) => {
  const [selectedSS, setSelectedSS] = useState<Student[] | []>([]);
  const dispatch = useDispatch();

  const selectNameHandler = (st: Student) => {
    const filter = selectedSS.filter((s: Student) => s._id !== st._id);
    if (filter.length === selectedSS.length) {
      setSelectedSS([...selectedSS, st]);
    } else {
      setSelectedSS(filter);
    }
  };

  const assignTestsHandler = (selection: Student[]) => {
    const testObject = { id: props.test._id, title: props.test.title };
    const studentsToUpdate: string[] = selection?.map((ss) => ss._id);

    dispatch(
      updateStudentsPendingTests(props.test._id, 'pending', {
        test: testObject,
        ssids: studentsToUpdate,
      })
    );
    setTimeout(() => {
      setSelectedSS([]);
      props.close();
    }, 500);
  };

  return (
    <div className={styles.AssignTest}>
      <div className={styles.Students}>
        {props.students.map((st, i) => {
          if (!st?.pendingtests?.some((t) => t.id === props.test._id)) {
            // here
            return (
              <SelectStudent
                student={st}
                key={i}
                selectNameHandler={selectNameHandler}
              >
                {<div>st.name</div>}
              </SelectStudent>
            );
          } else return null;
        })}
      </div>
      {/* <div className={styles.Assign}>
        {selectedSS.length ? selectedSS.map(st => st.name).join(', ') : null}
      </div> */}
      <div
        className={styles.Assign}
        onClick={() => assignTestsHandler(selectedSS)}
      >
        Send test <i className="far fa-paper-plane" />
      </div>
    </div>
  );
};

export default AssignTest;
