import { FC, useState } from "react";
import { Switch } from "src/kit";
import styles from "../Kit.module.scss";

let SwitchPage: FC = () => {
  let [status, setStatus] = useState(false);

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
