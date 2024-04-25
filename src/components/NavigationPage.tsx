import { FC, useState } from "react";
import { Navigation } from "src/kit";
import styles from "../Kit.module.scss";

let NavigationPage: FC = () => {
  let [page, setPage] = useState("inputs");

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
