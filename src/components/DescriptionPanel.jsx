import React from "react";
import { films } from "./Films.jsx";

function DescriptionPanel({ className, index }) {
    return (
      <div className={className}>
        <div className="title text-3xl lg:text-4xl">{films[index].title}</div>
        {/* <div className="genre text-3xl lg:text-4xl">{films[index].genre}</div> */}
      </div>
    );
  }

export default DescriptionPanel;