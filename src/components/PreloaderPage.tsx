import { FC, useState } from "react";
import { Preloader, Button } from "src/kit";
import styles from "../Kit.module.scss";

let PreloaderPage: FC = () => {
  let [preloader, setPreloader] = useState(false);
  return (
    <div className={styles.block}>
      <div className={styles.title}>Preloader</div>
      <div className={styles.element}>
        <Button
          onClick={() => {
            setPreloader(true);
            setTimeout(() => setPreloader(false), 2000);
          }}
        >
          Show preloader for 2 seconds
        </Button>
      </div>
      <Preloader loading={preloader} />
    </div>
  );
};

export default PreloaderPage;
