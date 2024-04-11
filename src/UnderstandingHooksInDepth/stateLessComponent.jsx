import React, { memo } from "react";

const StateLessComponent = () => {
  console.log("StateLess Component is Rendered");
  return <p>This is a State Less Component with no state & props</p>;
};

export default memo(StateLessComponent);
