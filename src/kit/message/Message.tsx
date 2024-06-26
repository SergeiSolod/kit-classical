import { FC } from "react";
import { Button } from "../index";
import { CSSTransition } from "react-transition-group";
import clsx from "clsx";
import styles from "./Message.module.scss";
import AttentionIcon from "./Attention.svg?react";
import CheckMarkIcon from "./CheckMark.svg?react";

interface MessageProps {
  show?: boolean;
  title?: string;
  message?: string;
  isError?: boolean;
  onAccept?: () => void;
  buttonText?: string;
}

let Message: FC<MessageProps> = ({
  show = false,
  title = "",
  message = "",
  isError = false,
  onAccept = () => {},
  buttonText = "ok",
}) => {
  return (
    <CSSTransition
      in={show}
      timeout={700}
      mountOnEnter
      unmountOnExit
      classNames="my-node"
    >
      <div className={styles.wrapper}>
        <div
          className={clsx(
            styles.message,
            isError ? styles.error : styles.success,
          )}
        >
          {isError ? <AttentionIcon /> : <CheckMarkIcon />}
          <h1
            className={styles.title}
            style={{ marginBottom: message ? 0 : 28 }}
          >
            {title}
          </h1>
          {message && <p className={styles.title}>{message}</p>}
          <div className={styles.button}>
            <Button id="messageButton" onClick={() => onAccept()}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Message;
