import { FC } from "react";
import { Button } from "src/kit";
import styles from "../Kit.module.scss";

let ButtonsPage: FC = () => {
  return (
    <div className={styles.block}>
      <div className={styles.title}>Buttons</div>
      <div className={styles.element}>
        <Button description="Button primary">Button</Button>
      </div>
      <div className={styles.element}>
        <Button secondary description="Button secondary">
          Button
        </Button>
      </div>
      <div className={styles.element}>
        <Button
          style={{
            backgroundColor: "#011e78",
            color: "#ffffff",
          }}
          description="Button styles"
        >
          Button
        </Button>
      </div>
      <div className={styles.element}>
        <Button description="Button disabled" disabled>
          Button
        </Button>
      </div>
      <div className={styles.element}>
        <Button unclickable description="Button unclickable">
          Button
        </Button>
      </div>
      <div className={styles.element}>
        <Button small description="Button primary small">
          Button
        </Button>
      </div>
      <div className={styles.element}>
        <Button secondary small description="Button secondary small">
          Button
        </Button>
      </div>
    </div>
  );
};

export default ButtonsPage;
