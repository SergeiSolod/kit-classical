import { isValidPhoneNumber } from "libphonenumber-js";
import { DOMAINS } from "./domains";

export const validatePhone = (value, necessarily) => {
  if (necessarily) {
    return isValidPhoneNumber(value, "RU");
  } else {
    if (value.length > 3) {
      return isValidPhoneNumber(value, "RU");
    } else {
      return true;
    }
  }
};

const emailPatter = (value) => {
  return (
    /^[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(
      value,
    ) &&
    DOMAINS.indexOf(
      value.toUpperCase().split(".")[value.split(".").length - 1],
    ) !== -1
  );
};

export const validatePassword = (value) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(
    value,
  );
};

export const validateEmail = (value, necessarily) => {
  if (necessarily) {
    return emailPatter(value);
  } else {
    if (value) {
      return emailPatter(value);
    } else {
      return true;
    }
  }
};
