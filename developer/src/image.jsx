import React from "react";
import resume from "./Images/Software Resume.pdf";

const Image = () => {
  return (
    <div>
      <iframe src={resume} width="100%" height="700px" title="Resume"></iframe>
    </div>
  );
};

export default Image;
