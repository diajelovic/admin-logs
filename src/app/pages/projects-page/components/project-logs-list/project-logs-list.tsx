import React from 'react';
import * as firebase from 'firebase';
import 'firebase/database';

import { Project, useSelector } from 'store';
import { Button } from 'components/button';
import { Modal } from 'components/modal/modal';
import { Messages } from 'components/messages';
import { Input } from 'components/input';

import * as styles from './project-logs-list.styles.module.css';

interface Props {
  projectId: string;
}

export const ProjectLogsList = (props: Props) => {
  const project: Project | undefined = useSelector(
    (state) => state.projects.projectsById[props.projectId]
  );
  const [errors, setErrors] = React.useState([]);
  const nameRef = React.useRef(null);

  const [showPopup, setShowPopup] = React.useState(false);

  const openCreatePopup = React.useCallback(() => {
    setShowPopup(() => true);
  }, []);

  const closePopup = React.useCallback(() => {
    setShowPopup(() => false);
  }, []);

  const createProjectLog = React.useCallback(() => {
    const logsName = nameRef.current.value;

    if (!logsName) {
      setErrors(['logs name is empty']);
    } else {
      var newLogsKey = firebase.database().ref().child(`projects/${props.projectId}/logs`).push()
        .key;

      firebase
        .database()
        .ref('logs/' + newLogsKey)
        .set({
          id: newLogsKey,
          name: logsName,
          messages: [],
        })
        .then(() => {
          setShowPopup(() => false);
        })
        .catch(console.log);
    }
  }, [props.projectId]);

  return (
    <div>
      <h1>{project?.name}</h1>
      <div className={styles.buttons}>
        <Button onClick={openCreatePopup} color="primary">
          Create Logs
        </Button>
        <Button onClick={() => null}>delete project</Button>
      </div>
      {}
      {showPopup && (
        <Modal onClose={closePopup}>
          <Messages errors={errors} />
          <Input ref={nameRef} type="text" placeholder="Logs Name" />
          <div className={styles.buttons}>
            <Button onClick={createProjectLog} color="primary">
              Create
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};
