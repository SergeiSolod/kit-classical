import { FC, useState } from "react";
import styles from "../Kit.module.scss";
import Preloader from "src/kit/preloader/Preloader";
import Button from "src/kit/button/Button";

const PreloaderPage: FC = () => {
  const [preloader, setPreloader] = useState(false);
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
