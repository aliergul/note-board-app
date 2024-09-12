import React, { useState } from "react";
import AllPageBackdrop from "../../helpers/backdrop";

const Tags = () => {
  const [loading, setLoading] = useState(false); // eslint-disable-line
  return (
    <div>
      <AllPageBackdrop loading={loading} />
      <div>tags</div>
    </div>
  );
};

export default Tags;
