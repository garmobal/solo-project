import React, { SetStateAction, Dispatch } from 'react';

import styles from './StudentProgressCard.module.scss';

interface IProps {
  show: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const StudentProgressCard = (props: IProps) => {
  return (
    <React.Fragment>
      {props.show ? (
        <div className={styles.Background} onClick={() => props.close} />
      ) : null}
      <div
        className={styles.StudentProgressCard}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default React.memo(
  StudentProgressCard,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
