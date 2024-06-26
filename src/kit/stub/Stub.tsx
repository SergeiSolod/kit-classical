import { FC, useEffect, useState } from "react";
import { languages } from "src/helpers/const";
import { Languages } from "../index";
import styles from "./Stub.module.scss";

interface StubProps {
  show?: boolean;
  maxWidth?: number;
  title?: string;
  text?: string;
  language?: string;
  changeLanguage?: () => void;
}

let Stub: FC<StubProps> = ({
  show,
  maxWidth,
  title,
  text,
  language,
  changeLanguage,
}) => {
  let useMedia = (maxWidth: number) => {
    let widthWindow = document?.documentElement?.clientWidth;

    let [media, setMedia] = useState(false);

    useEffect(() => {
      setMedia(Number(widthWindow) < Number(maxWidth));
    }, []);

    useEffect(() => {
      window.addEventListener("resize", () => {
        let widthWindow = document?.documentElement?.clientWidth;
        setMedia(Number(widthWindow) < Number(maxWidth));
      });
    });

    return media;
  };

  let media = useMedia(maxWidth);

  return (
    <>
      {(show || media) && (
        <>
          <div className={styles.background} />
          <div className={styles.wrapper}>
            <div className={styles.block}>
              <Languages
                languages={languages}
                language={language}
                changeLanguage={changeLanguage}
              />
              <div className={styles.title}>{title}</div>
              <div className={styles.text}>{text}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Stub;
