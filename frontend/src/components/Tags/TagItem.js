import { Chip, Stack } from "@mui/material";
import React from "react";
import { textColor } from "../../utils/colorFunctions";

const TagItem = ({ item, index }) => {
  return (
    <div key={index}>
      <Stack direction="row" spacing={1}>
        <Chip
          label={`#${item?.name}`}
          style={{
            backgroundColor: item?.color,
            color: textColor(item?.color),
          }}
        />
      </Stack>
    </div>
  );
};

export default TagItem;
