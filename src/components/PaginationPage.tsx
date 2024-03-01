import { FC, useState } from "react";
import styles from "../Kit.module.scss";
import Pagination from "src/kit/pagination/Pagination";

const PaginationPage: FC = () => {
  const [page, setPage] = useState(1);

  return (
    <div className={styles.block}>
      <div className={styles.title}>Pagination</div>
      <Pagination currentPage={page} lastPage={10} onAccept={setPage} />
    </div>
  );
};

export default PaginationPage;
