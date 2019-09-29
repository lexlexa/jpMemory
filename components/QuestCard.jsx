import React from "react";
import "../style/QuestCard.css";

function QuestCard({ showBack, front, back, error }) {
  const flip = showBack ? "show" : "";
  const err = error ? "error" : "success";
  return (
    <div className={`container ${flip} ${err}`}>
      <div className="flipper">
        <div className="front">
          <div className="text">{front}</div>
        </div>
        <div className="back">
          <div className="text">{back}</div>
        </div>
      </div>
    </div>
  );
}

export default QuestCard;
