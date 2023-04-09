import React, { useState } from "react";
import "./sign-up.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  return (
    <div>
      <form onSubmit={() => {}}>
        <h1>Sign up with email</h1>
        <label>Display name</label>
        <input
          type={"text"}
          required
          onChange={onChange}
          name={"displayName"}
          value={displayName}
        />
        <label>Email</label>
        <input
          type={"email"}
          required
          onChange={onChange}
          name={"email"}
          value={email}
        />
        <label>Password</label>
        <input
          type={"password"}
          required
          onChange={onChange}
          name={"password"}
          value={password}
        />
        <label>Confirm password</label>
        <input
          type={"password"}
          required
          onChange={onChange}
          name={"confirmPassword"}
          value={confirmPassword}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
