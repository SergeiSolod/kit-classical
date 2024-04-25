import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Select.module.scss";

interface SelectProps {
  id?: string;
  value?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description?: string;
  disabled?: boolean;
  list?: Array<any>;
  error?: boolean;
  errorMessage?: string;
  source?: string;
  multiple?: boolean;
  empty?: boolean;
}

let Select: FC<SelectProps> = ({
  id = "",
  value = "",
  onChange = () => {},
  label = "",
  description = "",
  disabled = false,
  list = [],
  error = false,
  errorMessage = "",
  source = "",
  multiple = false,
  empty = false,
}) => {
  let [open, setOpen] = useState(false);
  let [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (!source) {
      setSelectedValue(value);
    } else {
      setSelectedValue(value?.[source] ?? "");
    }
  }, [value, source]);

  return (
    <>
      {open && !disabled && (
        <div className={styles.background} onClick={() => setOpen(false)} />
      )}
      <div
        id={id}
        className={styles.container}
        style={{ zIndex: open && !disabled ? 2 : "auto" }}
      >
        <div
          className={clsx(
            styles.content,
            error && styles.error,
            disabled && styles.disabled,
          )}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <p className={styles.label}>{label}</p>
          <p className={styles.chosen}>
            {multiple
              ? value.length
                ? value.map((item, i) => {
                    let listItem = source ? item?.[source] : item;
                    if (value.length > 1 && i === 0) {
                      return (
                        <span key={listItem}>
                          {listItem}
                          {`; +${value.length - 1}`}
                        </span>
                      );
                    } else if (value.length > 1 && i !== 0) {
                      return null;
                    }

                    return (
                      <span key={listItem}>
                        {listItem}
                        {i < value.length - 1 ? "; " : ""}
                      </span>
                    );
                  })
                : ""
              : selectedValue && <span>{selectedValue}</span>}
          </p>
        </div>
        {!disabled && open && (
          <div className={styles.search}>
            {list.length &&
              list.map((item, index) => {
                let listItem = source ? item?.[source] : item;
                return (
                  <p
                    className={clsx(
                      multiple && value?.some
                        ? value?.some((val) => val[source] === listItem) &&
                            styles.active
                        : listItem === selectedValue && styles.active,
                    )}
                    key={listItem}
                    onClick={() => {
                      if (multiple) {
                        let array = [];
                        if (value) {
                          array.push(...value);
                          if (
                            value.find((elem) => elem[source] === item[source])
                          ) {
                            onChange(
                              value.filter(
                                (elem) => elem[source] !== item[source],
                              ),
                            );
                          } else {
                            array.push(item);
                            onChange(array);
                          }
                        } else {
                          array.push(item);
                          onChange(array);
                        }
                      } else {
                        // object comparison
                        if (
                          JSON.stringify(value) === JSON.stringify(item) &&
                          empty
                        ) {
                          console.log('1', empty)
                          onChange(null);
                        } else {
                          onChange(item);
                        }
                        setOpen(false);
                      }
                    }}
                  >
                    {listItem}
                  </p>
                );
              })}
          </div>
        )}

        {description && <p className={styles.description}>{description}</p>}

        {error && errorMessage && (
          <p className={styles.errorMessage}>{errorMessage}</p>
        )}
      </div>
    </>
  );
};

export default Select;
