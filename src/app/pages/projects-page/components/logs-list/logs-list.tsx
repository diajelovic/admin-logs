import React from 'react';

import { Project, useDispatch, useSelector } from 'store';
import { Button, ButtonsHolder } from 'components/button';
import { Input } from 'components/input';
import { createProjectLog, isError } from 'api';
import { SimplePopup, useShowModal } from 'components/simple-popup';

import { LogItem } from './logs-item';

import styles from './logs-list.styles.module.css';

interface Props {
  projectId: string;
}

export const LogsList = ({ projectId }: Props) => {
  const dispatch = useDispatch();
  const project: Project | undefined = useSelector(
    (state) => state.projects.projectsById[projectId]
  );
  const nameRef = React.useRef(null);

  const { isPopupShowed, closePopup, openPopup } = useShowModal();

  const createProjectLogHandler = React.useCallback(async () => {
    const name = nameRef.current.value;

    const result = await createProjectLog({ name, projectId });

    if (isError(result)) {
      return result.errors;
    } else {
      dispatch({
        type: 'ADD_LOG',
        payload: result,
      });

      closePopup();

      return [];
    }
  }, [projectId]);

  return (
    <div>
      <h1>{project?.name}</h1>
      <ButtonsHolder>
        <Button onClick={openPopup} color="primary">
          Create Logs
        </Button>
        <Button onClick={() => null}>delete project</Button>
      </ButtonsHolder>
      <div className={styles.logs}>
        {project?.logs?.map((log) => {
          return <LogItem key={log.id} projectId={projectId} log={log} />;
        })}
      </div>
      <SimplePopup onSubmit={createProjectLogHandler} onClose={closePopup} show={isPopupShowed}>
        <Input ref={nameRef} type="text" placeholder="Logs Name" />
      </SimplePopup>
    </div>
  );
};
