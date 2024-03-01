import { FC, useState } from "react";
import { languages } from "src/helpers/const";
import styles from "../Kit.module.scss";
import Languages from "src/kit/languages/Languages";
import localized from "src/helpers/localized";

const LanguagesPage: FC = () => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (code: string) => {
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
