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
        <svg viewBox="0 -960 960 960">
          <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
        </svg>
      }
      nextLabel={
        <svg viewBox="0 -960 960 960">
          <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
        </svg>
      }
      breakLabel={
        <svg viewBox="0 -960 960 960">
          <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
        </svg>
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