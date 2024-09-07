import { Tooltip } from "antd";

const truncate = (str = "", length = 36, width) => {
  if (str?.length > length) {
    return (
      <Tooltip title={str}>
        <span>{str.slice(0, length)}...</span>
      </Tooltip>
    );
  }
  return <>{str}</>;
};

export default truncate;
