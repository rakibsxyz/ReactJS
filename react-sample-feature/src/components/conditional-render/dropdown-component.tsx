import React from "react";

const DropdownComponent = (props: any) => {
    const {items, onDropdounChange, cssClass} = props;
  return (
    <select className={`form-select ${cssClass}`} onChange={onDropdounChange} aria-label="Default select example">
      <option value={-1}>Open this select menu</option>
      {
          items.map((item: any, index: number) => (
            <option value={item.value} key={index}>{item.text}</option>
          ))
      }
    </select>
  );
};

export default DropdownComponent;
