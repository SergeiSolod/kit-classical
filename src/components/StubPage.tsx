import { FC, useState } from "react";
import { Stub, Button } from "src/kit";
import styles from "../Kit.module.scss";
import localized from "src/helpers/localized";

let StubPage: FC = () => {
  let [open, setOpen] = useState(false);

  let [language, setLanguage] = useState("en");

  let openStub = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 2000);
  };

  let changeLanguage = (code: string) => {
    setLanguage(code);
    localized.setLanguage(code);
  };

  return (
    <div className={styles.block}>
      <div className={styles.title}>Messages</div>

      <div className={styles.element}>
        <Button onClick={openStub}>Open stub for 2 seconds</Button>
      </div>

      <Stub
        show={open}
        maxWidth={800}
        title="Stub title"
        text="Stub text"
        language={language}
        changeLanguage={changeLanguage}
      />
    </div>
  );
};

export default StubPage;
