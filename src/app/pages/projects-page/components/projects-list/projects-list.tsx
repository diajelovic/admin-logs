import React from 'react';

import { useDispatch, useSelector } from 'store';

import { Button } from 'components/button';
import { Input } from 'components/input';
import { createProject, getProjects, isError } from 'api';

import { ProjectItem } from './project-item';

import * as styles from './projects-list.styles.module.css';
import { SimplePopup, useShowModal } from 'components/simple-popup';

export const ProjectsList = () => {
  const nameRef = React.useRef(null);
  const projects = useSelector((state) => state.projects.projectsList);
  const dispatch = useDispatch();

  const { isPopupShowed, openPopup, closePopup } = useShowModal();

  const createProjectHandler = React.useCallback(async () => {
    const name = nameRef.current.value;

    const result = await createProject({ name });

    if (isError(result)) {
      return result.errors;
    } else {
      dispatch({
        type: 'ADD_PROJECT',
        payload: result,
      });

      closePopup();

      return [];
    }
  }, []);

  React.useEffect(() => {
    getProjects().then((projects) => {
      dispatch({ type: 'FETCH_PROJECTS', payload: projects });
    });
  }, []);

  return (
    <div>
      <div className={styles.createButton}>
        <Button wide onClick={openPopup} color="primary">
          Create Project
        </Button>
      </div>
      {projects.map((projectId: string) => (
        <ProjectItem key={projectId} id={projectId} />
      ))}
      <SimplePopup onSubmit={createProjectHandler} onClose={closePopup} show={isPopupShowed}>
        <Input ref={nameRef} type="text" placeholder="Project Name" />
      </SimplePopup>
    </div>
  );
};
