import React from 'react';
import * as firebase from 'firebase';
import 'firebase/database';

import { Project, useDispatch, useSelector } from 'store';
import { Button } from 'components/button';
import { Modal } from 'components/modal/modal';
import { Messages } from 'components/messages';
import { Input } from 'components/input';

import { LogItem } from './project-logs-item';

import * as styles from './project-logs-list.styles.module.css';

interface Props {
  projectId: string;
}

export const ProjectLogsList = (props: Props) => {
  const dispatch = useDispatch();
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
      setErrors([]);
      const newLogsKey = firebase.database().ref(`projects/${props.projectId}/logs`).push().key;
      const newLog = {
        id: newLogsKey,
        name: logsName,
        createdAt: Date.now(),
      };

      const updates: Record<string, any> = {};
      updates[`projects/${props.projectId}/logs/${newLogsKey}`] = newLog;

      firebase
        .database()
        .ref()
        .update(updates)
        .then(() => {
          dispatch({
            type: 'ADD_LOG',
            payload: {
              projectId: props.projectId,
              log: newLog,
            },
          });
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
      <div className={styles.logs}>
        {project?.logs?.map((log) => {
          return <LogItem key={log.id} log={log} />;
        })}
      </div>
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
