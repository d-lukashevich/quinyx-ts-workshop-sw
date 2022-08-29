import React from "react";

export const Select = ({
  id,
  name,
  disabled = false,
  value,
  options = [],
  onChange,
}) => {
  const handleChange = (event) => {
    onChange(options[event.target.selectedIndex].value, event);
  };

  return (
    <label className="select">
      {name}
      <select
        className="select__input"
        disabled={disabled}
        value={value}
        name={name}
        id={id}
        onChange={handleChange}
      >
        {value === undefined && (
          <option value="" selected disabled>
            Select one--
          </option>
        )}
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
};
