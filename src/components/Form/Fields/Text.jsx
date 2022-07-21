import React from "react";
import Field from "./Field";

const onRender = ({ field, form, meta }) => {
  return (
    <input
      className="form-control"
      style={{ fontSize: "1.5rem" }}
      formNoValidate
      {...field}
    />
  );
};
export default function Text(props) {
  return <Field {...props} comp={onRender} />;
}
