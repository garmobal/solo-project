import React from 'react';

import styles from './CreateButton.module.scss';

interface IProps {
  clicked?: () => void;
  children?: JSX.Element;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const CreateButton = (props: IProps) => {
  return (
    <button onClick={props.clicked} className={styles.Button} type={props.type}>
      {props.children}
    </button>
  );
};

export default CreateButton;
