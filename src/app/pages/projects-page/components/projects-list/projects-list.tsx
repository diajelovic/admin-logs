import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';

import { Button } from 'components/button';
import { Input } from 'components/input';
import { Modal } from 'components/modal/modal';
import { Messages } from 'components/messages';

import * as styles from './projects-list.styles.module.css';

export const ProjectsList = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const nameRef = React.useRef(null);
  const openCreatePopup = React.useCallback(() => {
    setShowPopup(() => true);
  }, []);

  const closePopup = React.useCallback(() => {
    setShowPopup(() => false);
  }, []);

  const createProject = React.useCallback(() => {
    const projectName = nameRef.current.value;

    if (!projectName) {
      setErrors(['project name is empty']);
    } else {
      var newProjectKey = firebase.database().ref().child('projects').push().key;

      firebase
        .database()
        .ref('projects/' + newProjectKey)
        .set({
          id: newProjectKey,
          name: projectName,
          messages: [],
        })
        .then(() => {
          setShowPopup(() => false);
        })
        .catch(console.log);
    }
  }, []);

  return (
    <div>
      <Button wide onClick={openCreatePopup}>
        Create Project
      </Button>
      {showPopup && (
        <Modal onClose={closePopup}>
          <Messages errors={errors} />
          <Input ref={nameRef} type="text" placeholder="Project Name" />
          <div className={styles.buttons}>
            <Button onClick={createProject} color="primary">
              Create
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};
