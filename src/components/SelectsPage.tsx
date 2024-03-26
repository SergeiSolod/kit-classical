import { FC, useState } from "react";
import { Select } from "src/kit";
import styles from "../Kit.module.scss";

const SelectsPage: FC = () => {
  const [array, setArray] = useState(null);
  const [arrayObjects, setArrayObjects] = useState(null);
  const [multipleArray, setMultipleArray] = useState("");
  const [multipleArrayObjects, setMultipleArrayObjects] = useState("");

  return (
    <div className={styles.block}>
      <div className={styles.title}>Selects</div>

      <div className={styles.element}>
        <Select
          value={array}
          label={"Select"}
          description={"Select array"}
          onChange={(value) => {
            setArray(value);
          }}
          list={["Mark", "Jhon", "Sara", "Sten"]}
        />
      </div>

      <div className={styles.element}>
        <Select
          source={"name"}
          value={arrayObjects}
          label={"Select"}
          description={"Select array of objects"}
          onChange={(value) => {
            setArrayObjects(value);
          }}
          list={[
            { name: "Mark" },
            { name: "Jhon" },
            { name: "Sara" },
            { name: "Sten" },
          ]}
        />
      </div>

      <div className={styles.element}>
        <Select
          source={"name"}
          value={multipleArray}
          label={"Multiple select"}
          multiple
          onChange={(value) => {
            setMultipleArray(value);
          }}
          description={"Multiple select array"}
          list={[
            { name: "Mark" },
            { name: "Jhon" },
            { name: "Sara" },
            { name: "Sten" },
          ]}
        />
      </div>

      <div className={styles.element}>
        <Select
          source={"name"}
          value={multipleArrayObjects}
          label={"Multiple select"}
          multiple
          onChange={(value) => {
            setMultipleArrayObjects(value);
          }}
          description={"Multiple select array of objects"}
          list={[
            { name: "Mark" },
            { name: "Jhon" },
            { name: "Sara" },
            { name: "Sten" },
          ]}
        />
      </div>
    </div>
  );
};

export default SelectsPage;
