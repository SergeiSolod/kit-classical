import { FC, useState } from "react";
import clsx from "clsx";
import styles from "./Pagination.module.scss";
import RightIcon from "./Right.svg?react";

interface PaginationProps {
  currentPage?: number;
  lastPage?: number;
  onAccept?: () => void;
}

let Pagination: FC<PaginationProps> = ({
  currentPage = 1,
  lastPage = 0,
  onAccept = () => {},
}) => {

  let handleChangePage = (e) => {
    let value = Number(e.target.value);

    if (isNaN(value) || value === 0) {
      onAccept(0);
    } else {
      if (value < 1) {
        onAccept(1);
      } else if (value > lastPage) {
        onAccept(lastPage);
      } else {
        onAccept(value);
      }
    }
  };

  let blurPage = (e) => {
    if (Number(e.target.value) !== Number(currentPage)) {
      if (!e.target.value || e.target.value === 0) {
        onAccept(1);
      } else {
        onAccept(currentPage);
      }
    } else {
      return;
    }
  };

  let changePrevPage = () => {
    if (currentPage - 1 > 1) {
      onAccept(Number(currentPage - 1));
    } else {
      onAccept(1);
    }
  };

  let changeNextPage = () => {
    if (currentPage + 1 < lastPage) {
      onAccept(Number(currentPage + 1));
    } else {
      onAccept(Number(lastPage));
    }
  };

  let handleKeyDown = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      if (Number(e.target.value) !== Number(currentPage)) {
        if (!e.target.value || e.target.value === 0) {
          onAccept(1);
        } else {
          onAccept(currentPage);
        }
      } else {
        return;
      }
    }
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.page}>
        <div
          onClick={() => {
            if (currentPage > 1) {
              changePrevPage();
            }
          }}
          className={clsx(
            styles.button,
            currentPage <= 1 ? styles.white : styles.svg,
          )}
        >
          <RightIcon className={styles.right} />
        </div>

        <div className={styles.form}>
          <input
            value={currentPage}
            onChange={handleChangePage}
            onBlur={blurPage}
            onKeyDown={handleKeyDown}
          />
          <span>{lastPage}</span>
        </div>

        <div
          onClick={() => {
            if (currentPage < lastPage) {
              changeNextPage();
            }
          }}
          className={clsx(
            styles.button,
            currentPage >= lastPage ? styles.white : styles.svg,
          )}
        >
          <RightIcon />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
