import React, { ChangeEvent } from "react";

type ChangeSelectEvent = ChangeEvent<HTMLSelectElement>;

type Option<ValueType> = { value: ValueType; label: string };

type SelectProps<ValueType> = {
  id: string;
  name: string;
  disabled?: boolean;
  value?: ValueType;
  options: Option<ValueType>[];
  onChange: (value: ValueType, event: ChangeSelectEvent) => void;
};

export const Select = <ValueType extends string | number>({
  id,
  name,
  disabled = false,
  value,
  options = [],
  onChange,
}: SelectProps<ValueType>) => {
  const handleChange = (event: ChangeSelectEvent) => {
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
