import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';

import { useDispatch, useSelector } from 'store';

import { Button } from 'components/button';
import { Input } from 'components/input';
import { Modal } from 'components/modal/modal';
import { Messages } from 'components/messages';

import { ProjectItem } from './project-item';

import * as styles from './projects-list.styles.module.css';

export const ProjectsList = () => {
  const [errors, setErrors] = React.useState([]);

  const nameRef = React.useRef(null);
  const projects = useSelector((state) => state.projects.projectsList);
  const dispatch = useDispatch();

  const [showPopup, setShowPopup] = React.useState(false);

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
      setErrors([]);
      const newProjectKey = firebase.database().ref().child('projects').push().key;
      const newProject = {
        id: newProjectKey,
        name: projectName,
      };

      firebase
        .database()
        .ref('projects/' + newProjectKey)
        .set(newProject)
        .then(() => {
          dispatch({
            type: 'ADD_PROJECT',
            payload: newProject,
          });
          setShowPopup(() => false);
        })
        .catch(console.log);
    }
  }, []);

  React.useEffect(() => {
    firebase
      .database()
      .ref('/projects')
      .once('value')
      .then((snap) => {
        const projectsData = snap.val();

        dispatch({ type: 'FETCH_PROJECTS', payload: projectsData });
      });
  }, []);

  return (
    <div>
      <div className={styles.createButton}>
        <Button wide onClick={openCreatePopup} color="primary">
          Create Project
        </Button>
      </div>
      {projects.map((projectId: string) => (
        <ProjectItem key={projectId} id={projectId} />
      ))}
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