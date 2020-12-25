import React from "react";

const KEY_CODE = {
  0: 48,
  9: 57,
};

export default function FilterBar({ totalLength, filteredLength, price, updateFilter, updateCurPage }) {
  const onKeyDown = (e) => {
    const keyCode = e.which ? e.which : e.keyCode;
    if (keyCode < KEY_CODE[0] || keyCode > KEY_CODE[9]) {
      e.preventDefault();
    }
  };

  const onChange = (e) => {
    const price = e.target.value;
    updateFilter(price);
    updateCurPage(0);
  };

  return (
    <div>
      <span>{price && `Matched Count: ${filteredLength} / `}</span>
      <span>{`Total Count: ${totalLength}`}</span>
      <input
        type="number"
        onKeyPress={onKeyDown}
        onChange={onChange}
        value={price}
      />
    </div>
  );
}
