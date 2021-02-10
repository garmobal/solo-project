import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { parse } from 'papaparse';

import { Student } from '../../../../../types';
import CreateButton from '../../../../UI/CreateButton/CreateButton';
import { importStudents } from '../../../../../store/actions/studentListActions';
import styles from './ImportStudent.module.scss';

interface IProps {
  close: () => void;
}

interface Result {
  data: Student[];
}

const ImportStudent = (props: IProps) => {
  const [highlighted, setHighlighted] = useState(false);
  const [ss, setSs] = useState<Student[]>([]);

  const dispatch = useDispatch();

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setHighlighted(false);
    Array.from(e.dataTransfer.files)
      .filter((file: File) => file.type === 'text/csv')
      .forEach(async (file: File) => {
        const text = await file.text();
        const result: Result = parse(text, { header: true });
        setSs((sts) => [...sts, ...result.data]);
      });
  };

  const saveHandler = () => {
    dispatch(importStudents(ss));
    setTimeout(() => {
      setSs([]);
      props.close();
    }, 500);
  };

  return (
    <div className={styles.ImportStudent}>
      <div
        className={`${styles.DropDiv} ${
          highlighted ? styles.Highlighted : styles.NotHighlighted
        }`}
        onDragEnter={() => setHighlighted(true)}
        onDragLeave={() => setHighlighted(false)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={dropHandler}
      >
        Drop your files here
      </div>
      <div className={styles.DropList}>
        {ss.length
          ? ss.map((st: Student, i: number) => <p key={i}>{st.name}</p>)
          : null}
      </div>
      <div className={styles.Buttons}>
        <CreateButton clicked={saveHandler}>
          <div>
            <i className="fas fa-user-check"></i> Save
          </div>
        </CreateButton>
        <CreateButton clicked={() => setSs([])}>
          <div>
            <i className="fas fa-user-times"></i> Discard
          </div>
        </CreateButton>
      </div>
    </div>
  );
};

export default ImportStudent;
