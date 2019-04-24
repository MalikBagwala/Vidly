import React from "react";

const Input = ({ name, value, label, error, type, onChange }) => {
  const classes = `form-control ${error ? "is-invalid" : ""}`;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className={classes}
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        id={name}
      />
      {error && <div className="is-invalid">{error}</div>}
    </div>
  );
};

export default Input;
