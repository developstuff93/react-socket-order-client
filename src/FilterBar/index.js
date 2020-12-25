import React from "react";

import styles from "./FilterBar.module.scss";

const KEY_CODE = {
  0: 48,
  9: 57,
};

export default function FilterBar({
  totalLength,
  filteredLength,
  price,
  updateFilter,
  updateCurPage,
}) {
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
    <div className={styles.Root}>
      <div className={styles.FilterBar}>
        <label for="price-filter">Search: </label>
        <input
          id="price-filter"
          type="number"
          onKeyPress={onKeyDown}
          onChange={onChange}
          value={price}
        />
      </div>
      <div className={styles.MetaInfo}>
        <span>{price && `Matched Count: ${filteredLength} / `}</span>
        <span>{`Total Count: ${totalLength}`}</span>
      </div>
    </div>
  );
}
