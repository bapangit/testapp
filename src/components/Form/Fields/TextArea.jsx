import React from "react";
import Field from "./Field";

export default function TextArea({ rows, ...rest }) {
  const onRender = ({ field, form, meta }) => {
    return (
      <textarea
        className="form-control"
        rows={rows || 5}
        formNoValidate
        {...field}
      />
    );
  };
  return <Field {...rest} comp={onRender} />;
}
