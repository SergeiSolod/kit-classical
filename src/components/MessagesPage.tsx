import { FC, useState } from "react";
import { Message, Button } from "src/kit";
import styles from "../Kit.module.scss";

let MessagesPage: FC = () => {
  let [message, setMessage] = useState(false);
  let [messageError, setMessageError] = useState(false);

  let changeMessage = () => {
    setMessage(!message);
  };

  let changeMessageError = () => {
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
