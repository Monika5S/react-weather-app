import React from "react";
import "./Sidebar.css";
import "./Weather.css";
import background from "./media/cloud.jpg";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="tooltip"></div>
      {/* tooltip was id before */}
      <button title="share weather app" id="share">
        📎Share
      </button>
      <hr />
      <h4>Recent Search</h4>
      <div className="recent-search"></div>
      <hr />
      <div
        className="extra-info credit"
        style={{ backgroundImage: `url(${background})` }}
      >
        <p>© Monika Singh 2023</p>
      </div>
    </div>
  );
}
