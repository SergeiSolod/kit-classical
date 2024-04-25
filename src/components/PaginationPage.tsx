import { FC, useState } from "react";
import { Pagination } from "src/kit";
import styles from "../Kit.module.scss";

let PaginationPage: FC = () => {
  let [page, setPage] = useState(1);

  return (
    <div className={styles.block}>
      <div className={styles.title}>Pagination</div>
      <Pagination currentPage={page} lastPage={10} onAccept={setPage} />
    </div>
  );
};

export default PaginationPage;
