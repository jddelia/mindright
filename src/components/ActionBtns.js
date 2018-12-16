import React from 'react';

const ActionBtns = (props) => {
  return (
    <div className="action-btns">
      <div className="action-btn action-1" onClick={props.greenClick}>
        <div className="green-label">
          <span>Click To Save</span>
        </div>
      </div>
      <div className="action-btn action-2"><label title="Disabled" /></div>
      <div className="action-btn action-3"><label title="Disabled" /></div>
    </div>
  );
}

export default ActionBtns;
