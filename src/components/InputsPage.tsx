import { FC, useState } from "react";
import { Input } from "src/kit";
import {
  validateEmail,
  validatePassword,
  validatePhone,
} from "src/helpers/validators";
import styles from "../Kit.module.scss";

let InputsPage: FC = () => {
  let [textarea, setTextarea] = useState("");
  let [string, setString] = useState("");
  let [error, setError] = useState("");

  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [phoneValid, setPhoneValid] = useState(true);
  let [emailValid, setEmailValid] = useState(true);
  let [passwordValid, setPasswordValid] = useState(true);

  return (
    <div className={styles.block}>
      <div className={styles.title}>Inputs</div>
      <div className={styles.element}>
        <Input
          id="textarea"
          value={textarea}
          type="textarea"
          label="Textarea"
          length={1000}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTextarea(e);
          }}
          description={"Characters: " + textarea.length + "/1000"}
        />
      </div>
      <div className={styles.element}>
        <Input
          id="string"
          value={string}
          label="Input"
          length={50}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setString(e);
          }}
          description="Input"
        />
      </div>
      <div className={styles.element}>
        <Input
          id="error"
          value={error}
          label="Input"
          length={50}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setError(e);
          }}
          error={true}
          errorMessage="Error data"
        />
      </div>
      <div className={styles.element}>
        <Input
          type="phone"
          id="phone"
          label="Phone"
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPhone(e);
            setPhoneValid(true);
          }}
          onBlur={() => {
            setPhoneValid(validatePhone(phone, true));
          }}
          error={!phoneValid}
          errorMessage="Error phone"
          description="Phone input"
        />
      </div>
      <div className={styles.element}>
        <Input
          type="email"
          id="email"
          error={!emailValid}
          errorMessage="Error email"
          value={email}
          label="Email"
          length={50}
          description="Email input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e);
            setEmailValid(true);
          }}
          onBlur={() => {
            setEmailValid(validateEmail(email, true));
          }}
        />
      </div>

      <div className={styles.element}>
        <Input
          id="password"
          error={!passwordValid}
          errorMessage="The password must be at least 10 characters long and contain mixed-case letters, numbers and symbols"
          value={password}
          label="Password"
          type="password"
          description="Password input"
          length={50}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e);
            setPasswordValid(true);
          }}
          onBlur={() => {
            setPasswordValid(validatePassword(password));
          }}
        />
      </div>
    </div>
  );
};

export default InputsPage;
