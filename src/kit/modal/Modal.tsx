import { FC } from "react";
import { Button } from "../index";
import { CSSTransition } from "react-transition-group";
import styles from "./Modal.module.scss";

interface ModalProps {
  show?: boolean;
  subtitle?: string;
  title?: string;
  message?: string;
  buttonTextOk?: string;
  buttonTextCancel?: string;
  onCancel?: () => void;
  onAccept?: () => void;
}

let Modal: FC<ModalProps> = ({
  show = false,
  subtitle = "",
  title = "",
  message = "",
  buttonTextOk = "",
  buttonTextCancel = "",
  onCancel = () => {},
  onAccept = () => {},
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
        <div className={styles.modal}>
          {subtitle && (
            <div className={styles.subtitle}>
              <p>{subtitle}</p>
            </div>
          )}

          {title && (
            <div className={styles.title}>
              <h1>{title}</h1>
            </div>
          )}

          {message && (
            <div className={styles.content}>
              <p>{message}</p>
            </div>
          )}

          <div className={styles.buttons}>
            {buttonTextOk && (
              <Button id="buttonYes" onClick={onAccept}>
                {buttonTextOk}
              </Button>
            )}

            {buttonTextCancel && (
              <Button
                style={{ marginTop: 10 }}
                id="buttonNo"
                onClick={onCancel}
              >
                {buttonTextCancel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
