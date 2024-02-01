import React from "react";

const Blob = (props) => {
  const blobStyle = {
    fill: "#4CAF50", // Set your desired color
    stroke: "#333",
    strokeWidth: 2,
    opacity: 0.8, // Add any other styling properties as needed
  };

  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={props}>
      <path
        fill="#FF0066"
        d="M38.9,-68.4C50.8,-60.4,61.3,-50.9,64.1,-39.3C66.8,-27.6,61.9,-13.8,63.1,0.7C64.3,15.2,71.6,30.4,69.1,42.4C66.5,54.4,54.1,63.3,40.9,67.6C27.8,71.8,13.9,71.6,1.5,69C-10.9,66.5,-21.9,61.7,-35.3,57.6C-48.8,53.5,-64.8,50,-71.2,40.6C-77.6,31.1,-74.4,15.5,-69.4,2.9C-64.4,-9.8,-57.5,-19.5,-50.7,-28.2C-43.8,-36.8,-36.9,-44.4,-28.4,-54.4C-20,-64.4,-10,-76.9,1.7,-79.9C13.5,-82.9,26.9,-76.4,38.9,-68.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default Blob;
