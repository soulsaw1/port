import React, { useState } from "react";
import { Navigate } from "react-router";

function Project() {
  const [pro, setPro] = useState(false);
  if (pro) {
    return <Navigate to="/project" />;
  }
  return (
    <div>
      <button
        className="button"
        onClick={() => {
          setPro(true);
        }}
      >
        Project
      </button>
    </div>
  );
}

export default Project;
