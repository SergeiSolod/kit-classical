import { FC, useRef } from "react";
import styles from "./Switch.module.scss";
import clsx from "clsx";

interface SwitchProps {
  id: string;
  value?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  disabled?: boolean;
  locked?: boolean;
}

let Switch: FC<SwitchProps> = ({
  id = "",
  value = false,
  onChange = () => {},
  title = "",
  disabled = false,
  locked = false,
}) => {
  let switchRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <label className={styles.switch}>
        <input
          ref={switchRef}
          id={id}
          name={id}
          checked={value}
          onChange={(e) => {
            if (!locked) {
              onChange(e);
            }
          }}
          disabled={disabled}
          type="checkbox"
        />
        <span
          className={clsx(styles.slider, locked && styles.dkRoundDisabled)}
        />
      </label>
      <div className={styles.text}>{title}</div>
    </div>
  );
};

export default Switch;
