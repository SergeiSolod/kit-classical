import { FC, useState, useRef } from "react";
import { Drop, Button } from "src/kit";
import styles from "../Kit.module.scss";

let DropPage: FC = () => {
  let [file, setFile] = useState(null);

  let fileSelected = async (e: any) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  let fileDragAndDrop = async (file: any) => {
    if (file) {
      setFile(file);
    }
  };

  let inputFileRef = useRef();

  return (
    <div className={styles.block}>
      <div className={styles.title}>Drop</div>
      <Drop upload={fileDragAndDrop} />
      <div className={styles.wrapperFile}>
        <Button
          id="uploadFile"
          secondary
          onClick={() => {
            if (file) {
              setFile(null);
            } else {
              inputFileRef.current.click();
            }
          }}
        >
          <div className={styles.downloadText}>
            {file ? "Delete file" : "Upload file"}
          </div>
        </Button>
        <input
          id="upload-file"
          className={styles.file}
          type="file"
          name="upload-file"
          value=""
          ref={inputFileRef}
          onChange={fileSelected}
        />
      </div>
    </div>
  );
};

export default DropPage;
