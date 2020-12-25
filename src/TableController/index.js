import React, { useMemo } from "react";

import Paginator from "../Paginator";
import PerPageSelector from "../PerPageSelector";

export default function Controller({
  total,
  perPage,
  curPage,
  updatePage,
  updatePerPage,
}) {
  const totalPage = useMemo(() => {
    return Math.ceil(total / perPage);
  }, [perPage, total]);
  return (
    <div>
      <PerPageSelector
        curPage={curPage}
        perPage={perPage}
        updatePage={updatePage}
        updatePerPage={updatePerPage}
      />
      <Paginator
        totalPage={totalPage}
        curPage={curPage}
        perPage={perPage}
        updatePage={updatePage}
      />
    </div>
  );
}