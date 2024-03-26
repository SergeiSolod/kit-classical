import { FC, useState } from "react";
import { Modal, Button } from "src/kit";
import styles from "../Kit.module.scss";

const ModalPage: FC = () => {
  const [modal, setModal] = useState(false);

  const changeMessage = () => {
    setModal(!modal);
  };

  return (
    <div className={styles.block}>
      <div className={styles.title}>Modal</div>

      <div className={styles.element}>
        <Button onClick={changeMessage}>Open modal</Button>
      </div>

      <Modal
        id="message"
        title="Are you sure?"
        show={modal}
        onAccept={changeMessage}
        onCancel={changeMessage}
        buttonTextOk="ok"
        buttonTextCancel="cancel"
      />
    </div>
  );
};

export default ModalPage;
