import { FC, useState } from "react";
import { Accordion } from "src/kit";
import styles from "../Kit.module.scss";

const AccordionPage: FC = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectedId = (id: number) => {
    if (id === selectedId) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  return (
    <div className={styles.block}>
      <div className={styles.title}>Accordion</div>
      <div className={styles.element}>
        <Accordion
          id={0}
          selectedId={selectedId}
          handleSelectedId={handleSelectedId}
          title={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
          text={
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
          }
          color={"#0f0f0f0"}
          isRoot={false}
          hasChildren={false}
          key={0}
        />
      </div>
    </div>
  );
};

export default AccordionPage;
