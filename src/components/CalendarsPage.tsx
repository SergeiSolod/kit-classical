import { FC, useState } from "react";
import { Calendar } from "src/kit";
import styles from "../Kit.module.scss";

let CalendarsPage: FC = () => {
  let [dateFrom, setDateFrom] = useState("");
  let [dateTo, setDateTo] = useState("");
  return (
    <div className={styles.block}>
      <div className={styles.title}>Calendars</div>
      <div className={styles.element}>
        <Calendar
          id="dateFrom"
          label="Date from"
          value={dateFrom}
          onChange={(value: any) => {
            setDateFrom(value);
          }}
          locale="en"
          day="Day"
          month="Month"
          year="year"
        />
      </div>
      <div className={styles.element}>
        <Calendar
          id="dateTo"
          label="Date to"
          value={dateTo}
          onChange={(value: any) => {
            setDateTo(value);
          }}
          locale="en"
          day="Day"
          month="Month"
          year="year"
        />
      </div>
    </div>
  );
};

export default CalendarsPage;
