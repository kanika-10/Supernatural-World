import React from "react";

function RibbonBanner({ title }) {
  return (
    <div>
      <div className="ribbon">
        {title}
        <i className="ribbin-i"></i>
        <i className="ribbin-i"></i>
        <i className="ribbin-i"></i>
        <i className="ribbin-i"></i>
      </div>
    </div>
  );
}

export default RibbonBanner;
