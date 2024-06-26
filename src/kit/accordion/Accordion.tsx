import { FC, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./Accordion.module.scss";
import PlusIcon from "./Plus.svg?react";

interface AccordionProps {
  id: number;
  selectedId?: number | null;
  handleSelectedId?: (id: number) => void;
  title?: string;
  text?: string;
  color?: string;
  isRoot?: boolean;
  hasChildren?: boolean;
}

let Accordion: FC<AccordionProps> = ({
  id,
  selectedId,
  handleSelectedId,
  title,
  text,
  color,
  isRoot,
  hasChildren,
}) => {
  let refItem = useRef(null);
  let ref = useRef(null);
  let [open, setOpen] = useState(false);

  // height of the animation plate
  let [heightTitle, setHeightTitle] = useState(103);

  // content height for opening animation
  let [heightContent, setHeightContent] = useState(103);

  // content height after opening for closing animation
  let [heightInitRootContent, setHeightInitRootContent] = useState(103);

  // Protection against doubleclick and flickering opening/closing animation
  let [stopClick, setStopClick] = useState(false);

  // Height recalculation on resize
  let [media, setMedia] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      let widthWindow = document?.documentElement?.clientWidth;
      setMedia(Number(widthWindow));
    });
  });

  // Open only one block
  useEffect(() => {
    if (selectedId === id) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [selectedId, text]);

  useEffect(() => {
    if (refItem?.current) {
      setHeightTitle(refItem.current.clientHeight);
    } else {
      setHeightTitle(103);
    }
  }, [refItem, media]);

  useEffect(() => {
    // Stop the multi-click before the animation completes
    setStopClick(true);

    // Calculate the height of the plate, taking into account the text wrapping
    let buttonHeight = heightTitle < 103 ? 103 : heightTitle;

    // If the block is opened, it calculates the height of the content for animation. After 300ms, set the height to auto.
    // "auto" is needed for nested opening of a nested accordion and recalculation of the root
    if (ref?.current && open) {
      ref.current.style.display = "block";
      let content = ref.current.clientHeight + buttonHeight;
      setHeightContent(content);
      setHeightInitRootContent(content);

      let timeout = setTimeout(() => {
        // setHeightContent('auto');
        setStopClick(false);
        clearTimeout(timeout);
      }, 300);
    } else if (ref?.current && !open) {
      setHeightContent(103);
      let timeout = setTimeout(() => {
        setStopClick(false);
        clearTimeout(timeout);
      }, 100);

      let hiddenTimeout = setTimeout(() => {
        ref.current.style.display = "none";
        clearTimeout(hiddenTimeout);
      }, 200);
    } else {
      setHeightContent(103);
      let timeout = setTimeout(() => {
        setStopClick(false);
        clearTimeout(timeout);
      }, 100);
    }
  }, [ref, open, media, heightTitle]);

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundColor:
          (color && !isRoot) || (color && isRoot && open) ? color : "#F5F5F5",
        height: open ? heightContent : heightTitle,
      }}
    >
      <div
        ref={refItem}
        className={clsx(styles.item, open && hasChildren && styles.root)}
        onClick={() => {
          if (stopClick) {
            return;
          }
          setHeightContent(heightInitRootContent);
          if (open) {
            let timeout = setTimeout(() => {
              handleSelectedId(null);
              clearTimeout(timeout);
            }, 100);
          } else {
            handleSelectedId(id);
          }
        }}
      >
        <div className={styles.title}>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        <div className={clsx(styles.icon, open && styles.iconDeg)}>
          <PlusIcon className={styles.icon} />
        </div>
      </div>

      <div
        className={clsx(styles.content, hasChildren && styles.contentRoot)}
        ref={ref}
      >
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
};

export default Accordion;
