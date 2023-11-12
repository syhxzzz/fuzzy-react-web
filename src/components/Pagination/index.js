import { Pagination } from "antd";
import { PaginationWrapper } from "./style";
import { memo } from "react";

export default memo(function Pagination1(props) {
  const { current, total, onPageChange, pageSize } = props;
  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <button className="control prev"> &lt; 上一页</button>;
    }
    if (type === "next") {
      return <button className="control next">下一页 &gt;</button>;
    }
    return originalElement;
  }
  return (
    <PaginationWrapper>
      <Pagination
        className="pagination"
        size="small"
        total={total}
        defaultCurrent={1}
        pageSize={pageSize}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onPageChange}
      />
    </PaginationWrapper>
  );
});
