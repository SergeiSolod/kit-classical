import { FC, useState } from "react";
import styles from "../Kit.module.scss";
import Switch from "src/kit/switch/Switch";

const SwitchPage: FC = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className={styles.block}>
      <div className={styles.title}>Switch</div>
      <div className={styles.switch}>
        <Switch
          id="switch"
          title="email"
          value={status}
          onChange={() => {
            setStatus(!status);
          }}
        />
      </div>
    </div>
  );
};

export default SwitchPage;
