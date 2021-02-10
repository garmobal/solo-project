import React, { SetStateAction, Dispatch } from 'react';

import styles from './ImportStudentsCard.module.scss';

interface IProps {
  show: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const ImportStudentsCard = (props: IProps) => {
  return (
    <React.Fragment>
      {props.show ? (
        <div className={styles.Background} onClick={() => props.close} />
      ) : null}
      <div
        className={styles.ImportStudentsCard}
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
  ImportStudentsCard,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
