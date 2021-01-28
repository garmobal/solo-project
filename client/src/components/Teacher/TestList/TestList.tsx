import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTests, deleteTest } from '../../../store/actions/testActions';
import { fetchStudents } from '../../../store/actions/studentListActions';
import TestCard from '../TestCard/TestCard';
import CreateButton from '../../UI/CreateButton/CreateButton';
import styles from './TestList.module.scss';
import { SystemState, Test } from '../../../types';

const TestList = () => {
  const tests = useSelector((state: SystemState) => state.tests);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTests());
    dispatch(fetchStudents());
  }, [dispatch]);

  const deleteTestHandler = (id: string) => dispatch(deleteTest(id));

  return (
    <div className={styles.TestList}>
      <Link to="/testcreator">
        <CreateButton><div>Add a new test</div></CreateButton>
      </Link>
      <div className={styles.TestListContainer}>
        {tests?.length
          ? tests.map((test: Test) => (
              <TestCard
                test={test}
                key={test._id}
                deleteTestHandler={deleteTestHandler}
              />
            ))
          : 'Fetching tests!'}
      </div>
    </div>
  );
};

export default TestList;
