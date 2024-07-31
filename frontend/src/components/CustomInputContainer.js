import React from "react";

const CustomInputContainer = ({
  label,
  placeholder,
  value,
  setValue,
  type = "text",
  id = "custom-input",
}) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <label>{label && label}</label>
      <input
        id={id}
        className="w-100"
        placeholder={placeholder && placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        type={type}
      />
    </div>
  );
};

export default CustomInputContainer;
