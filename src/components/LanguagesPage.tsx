import { FC, useState } from "react";
import { languages } from "src/helpers/const";
import { Languages } from "src/kit";
import styles from "../Kit.module.scss";
import localized from "src/helpers/localized";

let LanguagesPage: FC = () => {
  let [language, setLanguage] = useState("en");

  let changeLanguage = (code: string) => {
    setLanguage(code);
    localized.setLanguage(code);
  };

  return (
    <div className={styles.block}>
      <div className={styles.title}>{localized.languages}</div>
      <div className={styles.Languages}>
        <Languages
          languages={languages}
          language={language}
          changeLanguage={changeLanguage}
        />
      </div>
    </div>
  );
};

export default LanguagesPage;
