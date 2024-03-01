import { FC, useState } from "react";
import styles from "../Kit.module.scss";
import Message from "src/kit/message/Message";
import Button from "src/kit/button/Button";

const MessagesPage: FC = () => {
  const [message, setMessage] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const changeMessage = () => {
    setMessage(!message);
  };

  const changeMessageError = () => {
    setMessageError(!messageError);
  };

  return (
    <div className={styles.block}>
      <div className={styles.title}>Messages</div>

      <div className={styles.element}>
        <Button onClick={changeMessage}>Open message</Button>
      </div>
      <div className={styles.element}>
        <Button onClick={changeMessageError}>Open message error</Button>
      </div>

      <Message
        id="message"
        title="Title"
        message="Message message message"
        isError={false}
        show={message}
        onAccept={changeMessage}
      />

      <Message
        id="message_error"
        title="Title"
        message="Message error message error"
        isError={true}
        show={messageError}
        onAccept={changeMessageError}
      />
    </div>
  );
};

export default MessagesPage;
