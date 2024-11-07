import React, { useState } from "react";

const RowComponent = ({ index, option, text, onRemove, onUpdate }) => {
  const handleOptionChange = (e) => {
    onUpdate(index, e.target.value, text);
  };

  const handleTextChange = (e) => {
    onUpdate(index, option, e.target.value);
  };

  return (
    <div>
      <select value={option} onChange={handleOptionChange}>
        <option value="">Select Option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={() => onRemove(index)}>Remove</button>
    </div>
  );
};

const RowManager = () => {
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    setRows([...rows, { option: "", text: "" }]);
  };

  const handleRemoveRow = (index) => {
    const newRows = rows.filter((row, i) => i !== index);
    setRows(newRows);
  };

  const handleRowUpdate = (index, option, text) => {
    const newRows = [...rows];
    newRows[index] = { option, text };
    setRows(newRows);
  };

  return (
    <div>
      <button onClick={handleAddRow}>Add Row</button>
      {rows.map((row, index) => (
        <RowComponent
          key={index}
          index={index}
          option={row.option}
          text={row.text}
          onRemove={handleRemoveRow}
          onUpdate={handleRowUpdate}
        />
      ))}
    </div>
  );
};

export default RowManager;
