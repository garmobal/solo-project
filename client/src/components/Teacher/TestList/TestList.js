import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTests, deleteTest } from '../../../store/actions/testActions';
import TestCard from '../TestCard/TestCard';
import CreateButton from '../../UI/CreateButton/CreateButton';
import styles from './TestList.module.scss';

const TestList = () => {

  const tests = useSelector(state => state.tests);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => dispatch(fetchTests()), [dispatch]);

  useEffect(() => {
    console.log('useEffect with usecallback is running')
    initFetch();
  }, [initFetch]);

  const deleteTestHandler = (id) => dispatch(deleteTest(id));

  return (
    <div className={styles.TestList}>
      <div className={styles.TestListContainer}>
        {tests.length ? tests.map((test, i) => (
          <TestCard 
            test={test} 
            key={i} 
            deleteTestHandler={deleteTestHandler}/>
        )) : 'Fetching tests!'}
      </div>
      <Link to="/testcreator"><CreateButton>Create new test</CreateButton></Link>
      
    </div>
  );
};

export default TestList;
