import React from 'react';
import ReactDOM from 'react-dom';

import styles from './modal.styles.module.css';

interface Props {
  onClose?: () => void;
}

export const Modal: React.FC<Props> = (props) => {
  return ReactDOM.createPortal(
    <>
      <div className={styles.shadow} />
      <div className={styles.content}>
        {props.onClose && (
          <div onClick={props.onClose} className={styles.close}>
            X
          </div>
        )}
        {props.children}
      </div>
    </>,
    document.getElementById('modal-root')
  );
};
