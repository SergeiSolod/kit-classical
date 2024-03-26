import { FC, useState } from "react";
import { Table, Popup } from "src/kit";
import styles from "../Kit.module.scss";
import localized from "src/helpers/localized";

const TablesPage: FC = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [activeRow, setActiveRow] = useState({});

  const openRow = (row: any) => {
    setActiveRow(row);
    setOpenPopup(true);
  };

  return (
    <div className={styles.block}>
      <Popup
        show={openPopup}
        closeText="Close"
        infoText="Info text"
        close={setOpenPopup}
        id="popup"
      >
        <div className={styles.popupText}>
          <p>{activeRow.string1}</p>
          <p>{activeRow.string2}</p>
          <p>{activeRow.string3}</p>
          <p>{activeRow.string4}</p>
          <p>{activeRow.string5}</p>
        </div>
      </Popup>

      <div className={styles.title}>Tables</div>

      <div className={styles.text}>Table</div>

      <div className={styles.table}>
        <Table
          columns={[
            {
              title: "Something 1",
              key: "string1",
              type: "string",
            },
            {
              title: "Something 2",
              key: "string2",
              type: "string",
            },
            {
              title: "Something 3",
              key: "string3",
              type: "string3",
            },
            {
              title: "Something 4",
              key: "string4",
              type: "string4",
            },
            {
              title: "Something 5",
              key: "string5",
              type: "string5",
            },
            {
              title: "Something 6",
              key: "string6",
              type: "string6",
            },
            {
              title: "Something 7",
              key: "string7",
              type: "string7",
            },
          ]}
          rows={[
            {
              string1: "Text",
              string2: "Text",
              string3: "Text",
              string4: "Text",
              string5: "Text",
              string6: "Text",
              string7: "Text",
            },
            {
              string1: "Text",
              string2: "Text",
              string3: "Text",
              string4: "Text",
              string5: "Text",
              string6: "Text",
              string7: "Text",
            },
            {
              string1: "Text",
              string2: "Text",
              string3: "Text",
              string4: "Text",
              string5: "Text",
              string6: "Text",
              string7: "Text",
            },
            {
              string1: "Text",
              string2: "Text",
              string3: "Text",
              string4: "Text",
              string5: "Text",
              string6: "Text",
              string7: "Text",
            },
            {
              string1: "Text",
              string2: "Text",
              string3: "Text",
              string4: "Text",
              string5: "Text",
              string6: "Text",
              string7: "Text",
            },
          ]}
          noData={localized.noData}
        />
      </div>

      <div className={styles.text}>
        Double-click on the table, a pop-up will open
      </div>

      <div className={styles.table}>
        <Table
          onOpenRow={openRow}
          columns={[
            {
              title: "Something 1",
              key: "string1",
              type: "string",
            },
            {
              title: "Something 2",
              key: "string2",
              type: "string",
            },
            {
              title: "Something 3",
              key: "string3",
              type: "string3",
            },
            {
              title: "Something 4",
              key: "string4",
              type: "string4",
            },
            {
              title: "Something 5",
              key: "string5",
              type: "string5",
            },
            {
              title: "Something 6",
              key: "string6",
              type: "string6",
            },
            {
              title: "Something 7",
              key: "string7",
              type: "string7",
            },
          ]}
          rows={[
            {
              string1: "Text",
              string2: "Text",
              string3: "Text",
              string4: "Text",
              string5: "Text",
              string6: "Text",
              string7: "Text",
            },
            {
              string1: "Text",
              string2: "Text",
              string3: "Text",
              string4: "Text",
              string5: "Text",
              string6: "Text",
              string7: "Text",
            },
            {
              string1: "Text",
              string2: "Text",
              string3: "Text",
              string4: "Text",
              string5: "Text",
              string6: "Text",
              string7: "Text",
            },
            {
              string1: "Text",
              string2: "Text",
              string3: "Text",
              string4: "Text",
              string5: "Text",
              string6: "Text",
              string7: "Text",
            },
            {
              string1: "Text",
              string2: "Text",
              string3: "Text",
              string4: "Text",
              string5: "Text",
              string6: "Text",
              string7: "Text",
            },
          ]}
          noData={localized.noData}
        />
      </div>

      <div className={styles.text}>Square table</div>

      <div className={styles.table}>
        <Table
          equal
          border
          columns={[
            {
              title: "Created",
              key: "string1",
              type: "string",
            },
            {
              title: "Monday",
              key: "string2",
              type: "string",
            },
            {
              title: "Tuesday",
              key: "string3",
              type: "string3",
            },
            {
              title: "Wednesday",
              key: "string4",
              type: "string4",
            },
            {
              title: "Thursday",
              key: "string5",
              type: "string5",
            },
            {
              title: "Friday",
              key: "string6",
              type: "string6",
            },
            {
              title: "Saturday",
              key: "string7",
              type: "string7",
            },
            {
              title: "Sunday",
              key: "string8",
              type: "string8",
            },
          ]}
          rows={[
            {
              string1: "01",
              string2: "100",
              string3: "200",
              string4: "300",
              string5: "400",
              string6: "500",
              string7: "600",
              string8: "700",
              string9: "800",
            },
            {
              string1: "02",
              string2: "100",
              string3: "200",
              string4: "300",
              string5: "400",
              string6: "500",
              string7: "600",
              string8: "700",
              string9: "800",
            },
            {
              string1: "03",
              string2: "100",
              string3: "200",
              string4: "300",
              string5: "400",
              string6: "500",
              string7: "600",
              string8: "700",
              string9: "800",
            },
            {
              string1: "04",
              string2: "100",
              string3: "200",
              string4: "300",
              string5: "400",
              string6: "500",
              string7: "600",
              string8: "700",
              string9: "800",
            },
            {
              string1: "05",
              string2: "100",
              string3: "200",
              string4: "300",
              string5: "400",
              string6: "500",
              string7: "600",
              string8: "700",
              string9: "800",
            },
          ]}
          noData={localized.noData}
        />
      </div>
      <div className={styles.text}>
        Square table with colors (higher number darker color)
      </div>

      <div className={styles.table}>
        <Table
          equal
          border
          colored
          maxValue={700}
          columns={[
            {
              title: "Created",
              key: "string1",
              type: "string",
            },
            {
              title: "Monday",
              key: "string2",
              type: "string",
            },
            {
              title: "Tuesday",
              key: "string3",
              type: "string3",
            },
            {
              title: "Wednesday",
              key: "string4",
              type: "string4",
            },
            {
              title: "Thursday",
              key: "string5",
              type: "string5",
            },
            {
              title: "Friday",
              key: "string6",
              type: "string6",
            },
            {
              title: "Saturday",
              key: "string7",
              type: "string7",
            },
            {
              title: "Sunday",
              key: "string8",
              type: "string8",
            },
          ]}
          rows={[
            {
              string1: "01",
              string2: "100",
              string3: "200",
              string4: "300",
              string5: "400",
              string6: "500",
              string7: "600",
              string8: "700",
              string9: "800",
            },
            {
              string1: "02",
              string2: "100",
              string3: "200",
              string4: "300",
              string5: "400",
              string6: "500",
              string7: "600",
              string8: "700",
              string9: "800",
            },
            {
              string1: "03",
              string2: "100",
              string3: "200",
              string4: "300",
              string5: "400",
              string6: "500",
              string7: "600",
              string8: "700",
              string9: "800",
            },
            {
              string1: "04",
              string2: "100",
              string3: "200",
              string4: "300",
              string5: "400",
              string6: "500",
              string7: "600",
              string8: "700",
              string9: "800",
            },
            {
              string1: "05",
              string2: "100",
              string3: "200",
              string4: "300",
              string5: "400",
              string6: "500",
              string7: "600",
              string8: "700",
              string9: "800",
            },
          ]}
          noData={localized.noData}
        />
      </div>
    </div>
  );
};

export default TablesPage;
