import React from "react";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup__inner">
        <button className="popup__close" onClick={() => props.setTrigger(false)}></button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
