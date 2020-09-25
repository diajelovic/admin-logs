import React, { useReducer } from 'react';
import { generatePath } from 'react-router-dom';

import { Button, LinkButton, ButtonsHolder } from 'components/button';
import { LOG_PATTERN } from 'routes/routes';
import { Input } from 'components/input';
import { SimplePopup, useShowModal } from 'components/simple-popup';
import { useDispatch, useSelector } from 'store';
import { createLogMessage, getLogMessages, isError } from 'api';

interface Props {
  logId: string;
  projectId: string;
}

export const LogMessages = ({ projectId, logId }: Props) => {
  const dispatch = useDispatch();
  const messageRef = React.useRef(null);
  const { isPopupShowed, openPopup, closePopup } = useShowModal();
  const log = useSelector((state) => state.logs.logsById[logId]);
  const messages = useSelector((state) => state.logs.messagesByLogId[logId]);

  const createMessageHandler = React.useCallback(async () => {
    const message = messageRef.current.value;

    const result = await createLogMessage({ message, logId });

    if (isError(result)) {
      return result.errors;
    } else {
      dispatch({
        type: 'ADD_MESSAGE',
        payload: result,
      });

      closePopup();

      return [];
    }
  }, [logId]);

  React.useEffect(() => {
    getLogMessages({ logId }).then((messages) => {
      dispatch({
        type: 'FETCH_MESSAGES',
        payload: {
          logId,
          messages,
        },
      });
    });
  }, [logId]);

  return (
    <div>
      <h1>{log?.name}</h1>
      <ButtonsHolder>
        <LinkButton to={generatePath(LOG_PATTERN, { projectId })}>Back</LinkButton>
        <Button color="primary" onClick={openPopup}>
          Create message
        </Button>
        <Button>Delete Log</Button>
      </ButtonsHolder>
      <div className="messagesHolder">
        {!!messages?.length && messages.map((m) => <div key={m.id}>{m.message}</div>)}
      </div>
      <SimplePopup onSubmit={createMessageHandler} onClose={closePopup} show={isPopupShowed}>
        <Input ref={messageRef} type="text" placeholder="message" />
      </SimplePopup>
    </div>
  );
};
