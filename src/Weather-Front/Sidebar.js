import React from "react";
import "./Sidebar.css";
import "./Weather.css";
import background from "./media/cloud.jpg";

export default function Sidebar() {
  function copyToClipboard(event) {
    navigator.clipboard.writeText("https://darling-gnome-993b2e.netlify.app/");
    event.target.innerHTML = "link Copied to clipboard";

    setTimeout(() => (event.target.innerHTML = "📎Share App"), 3000);
  }

  return (
    <div className="Sidebar">
      <button title="share weather app" onClick={copyToClipboard}>
        📎Share App
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
