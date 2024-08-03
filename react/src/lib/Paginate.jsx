import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageCurrent } from '../store/itemListSlice';
import ReactPaginate from 'react-paginate';

function Paginate() {

  const dispatch = useDispatch();
  const { itemList, pagePerItem } = useSelector((state) => state.itemList);
  const handlePageChange = (data) => dispatch(setPageCurrent(data.selected + 1));

  return (
    <ReactPaginate
      previousLabel={
        <span className="material-symbols-outlined">arrow_left_alt</span>
      }
      nextLabel={
        <span className="material-symbols-outlined">arrow_right_alt</span>
      }
      breakLabel={
        <span className="material-symbols-outlined">more_horiz</span>
      }
      pageCount={Math.ceil(itemList?.length / pagePerItem)}
      marginPagesDisplayed={2}
      pageRangeDisplayed={1}
      onPageChange={handlePageChange}
      containerClassName={'pagination flex justify-center gap-2'}
      activeClassName={'active'}
      pageLinkClassName={'btn btn-xs'}
      previousLinkClassName={'btn btn-icon btn-xs'}
      nextLinkClassName={'btn btn-icon btn-xs'}
      activeLinkClassName={'btn-color-primary'}
      disabledLinkClassName={'btn-disabled'}
      breakLinkClassName={'btn btn-icon btn-xs btn-disabled'}
    />
  );

};

export default Paginate;