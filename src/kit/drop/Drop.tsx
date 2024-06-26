import { FC, useEffect, useRef, useState } from "react";
import styles from "./Drop.module.scss";
import clsx from "clsx";

interface DropProps {
  upload?: () => void;
}

let Drop: FC<DropProps> = ({ upload = () => {} }) => {
  let [active, setActive] = useState(false);

  let ref = useRef(null);

  function preventDefaults(e: any) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(e: any) {
    setActive(true);
  }

  function unhighlight() {
    setActive(false);
  }

  useEffect(() => {
    let handleDrop = (e: any) => {
      unhighlight();
      let dt = e.dataTransfer;
      let files = dt.files;

      if (files?.length) {
        upload(files[0]);
      }
    };

    if (ref && ref.current) {
      ["dragenter", "dragleave", "drop", "dragover"].forEach((eventName) => {
        document.addEventListener(eventName, preventDefaults, false);
      });
      ["dragenter", "dragover"].forEach((eventName) => {
        document.addEventListener(eventName, highlight, false);
      });
      ["dragleave"].forEach((eventName) => {
        document.addEventListener(eventName, unhighlight, false);
      });

      document.addEventListener("drop", handleDrop, false);
    }

    return () => {
      ["dragenter", "dragleave", "drop", "dragover"].forEach((eventName) => {
        document?.removeEventListener(eventName, preventDefaults, false);
        document?.removeEventListener(eventName, highlight, false);
        document?.removeEventListener(eventName, unhighlight, false);
      });
    };
  }, [ref]);

  return (
    <div ref={ref} className={clsx(styles.drop, active && styles.active)} />
  );
};

export default Drop;
