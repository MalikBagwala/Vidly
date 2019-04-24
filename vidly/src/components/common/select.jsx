import React from "react";

const Select = ({ name, value, onChange, label, options, error }) => {
  const classes = `form-control ${error ? "is-invalid" : ""}`;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        className={classes}
        onChange={onChange}
        value={value}
      >
        <option value="" />
        {options.map(value => (
          <option key={value._id} value={value._id}>
            {value.name}
          </option>
        ))}
      </select>
      {error && <div className="is-invalid">{error}</div>}
    </div>
  );
};

export default Select;
