import React, { useEffect, useState } from "react";
import chroma from "chroma-js";
import CreatableSelect from "react-select/creatable";

const colourStyles = {
  option: (styles, { data, isFocused, isSelected }) => {
    const color = data.color || "#000000"; // Varsayılan renk atandı
    return {
      ...styles,
      backgroundColor: isSelected ? color : isFocused ? "#eee" : null,
      color: isSelected ? "#000000" : color,
      cursor: "pointer",
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color || "#cccccc");
    return {
      ...styles,
      backgroundColor: color.alpha(0.2).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color || "#cccccc",
  }),
  multiValueRemove: (styles, { data }) => {
    const color = data.color || "#cccccc"; // Varsayılan renk atandı
    return {
      ...styles,
      color: "#ffffff",
      ":hover": {
        backgroundColor: color,
        color: "#000000",
      },
    };
  },
};

const NoteCardTagInput = ({ tags, setTags }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(
    tags?.map((tag) => ({
      value: tag.tag_id,
      label: tag.name,
      color: tag.color,
    }))
  );
  const [value, setValue] = useState([]);

  const createOption = (label) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
    color: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
  });

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      setValue((prev) => [...prev, newOption]);
    }, 1000);
  };

  useEffect(() => {
    setTags(options);
  }, [options]); //eslint-disable-line

  return (
    <div>
      <CreatableSelect
        isClearable
        isMulti
        styles={colourStyles}
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={(newValue) => setValue(newValue)}
        onCreateOption={handleCreate}
        options={options}
        value={value}
      />
    </div>
  );
};

export default NoteCardTagInput;
