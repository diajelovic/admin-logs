import React from 'react';

import { Messages } from 'components/messages';
import { Button } from 'components/button';
import { Modal } from 'components/modal/modal';

import styles from './simple-popup.styles.module.css';

interface Props {
  onSubmit: () => Promise<string[]>;
  onClose: () => void;
  show: boolean;
}

export const SimplePopup: React.FC<Props> = (props) => {
  const [errors, setErrors] = React.useState([]);

  const submitHandler = React.useCallback(async () => {
    const errors = await props.onSubmit();

    setErrors(errors);
  }, [props.onSubmit]);

  return props.show ? (
    <Modal onClose={props.onClose}>
      <Messages errors={errors} />
      {props.children}
      <div className={styles.buttons}>
        <Button onClick={submitHandler} color="primary">
          Create
        </Button>
      </div>
    </Modal>
  ) : null;
};
