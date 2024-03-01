import { FC, useState } from "react";
import styles from "../Kit.module.scss";
import Navigation from "src/kit/navigation/Navigation";

const NavigationPage: FC = () => {
  const [page, setPage] = useState("inputs");

  return (
    <div className={styles.block}>
      <div className={styles.title}>Navigation</div>
      <Navigation
        items={[
          "inputs",
          "buttons",
          "selects",
          "preloader",
          "accordion",
          "messages",
          "modal",
          "pagination",
          "switch",
          "popup",
          "languages",
          "tables",
          "graphs",
          "calendars",
          "drop",
          "navigation",
        ]}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default NavigationPage;
