import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bookmarkEdit, bookmarkDelete } from '../store/bookmarkListSlice';

import { IconLoading, IconItemNotFound, IconBookmarkNotFound } from '../utilities/StatusCode';
import StatusItem from '../utilities/StatusItem';
import BookmarkForm from '../components/BookmarkForm';

function Bookmark({ itemAddSelect }) {

  /* Bookmark - List */
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemList, itemLoading } = useSelector((state) => state.itemList);
  const { bookmarkList, bookmarkLoading } = useSelector((state) => state.bookmarkList);

  /* Bookmark - Check highest number */
  const bookmarkNumberHighest = bookmarkList.reduce((max, bookmark) => {
    return bookmark?.bookmark_number > max ? bookmark?.bookmark_number : max;
  }, 0);

  /* Bookmark - Select */
  const bookmarkSelectInitial = bookmarkList[0];
  const [bookmarkSelectId, setBookmarkSelectId] = useState(bookmarkSelectInitial?.bookmark_id);
  const [bookmarkSelectValue, setBookmarkSelectValue] = useState(bookmarkSelectInitial?.bookmark_title);
  const bookmarkSelectItemList = bookmarkList?.find(itemBookmarkList => itemBookmarkList?.bookmark_id === bookmarkSelectId)?.bookmark_item_list;
  const handleBookmarkSelect = (event) => {
    setBookmarkSelectId(bookmarkList[event]?.bookmark_id);
    setBookmarkSelectValue(bookmarkList[event]?.bookmark_title)
  }
  useEffect(() => {
    setBookmarkSelectId(bookmarkSelectInitial?.bookmark_id);
    setBookmarkSelectValue(bookmarkSelectInitial?.bookmark_title);
  }, [bookmarkSelectInitial]);

  /* Bookmark - Edit */
  const [bookmarkEditSelect, setBookmarkEditSelect] = useState([]);
  const handleBookmarkEdit = () => setBookmarkEditSelect(bookmarkList?.find(list => list?.bookmark_id === bookmarkSelectId));
  /* Bookmark - Delete on list */
/*  const handleBookmarkDelete = (bookmark_id) => {
    dispatch(bookmarkDelete(bookmark_id));
  };*/
  /* Bookmark - Delete on select */
  const handleBookmarkSelectDelete = () => {
    dispatch(bookmarkDelete(bookmarkSelectId));
    setBookmarkSelectId(bookmarkSelectInitial?.bookmark_id);
  };
  /* Bookmark - Delete on checkbox */
/*  const handleBookmarkCheckboxDelete = (bookmark_id) => {
    const bookmarkSelectId = bookmark_id;
    dispatch(bookmarkDelete(bookmarkSelectId));
    setBookmarkSelectId(bookmarkSelectInitial?.bookmark_id);
  }*/

  /* Item in bookmark - Add */
/*  const handleBookmarkItemAdd = (bookmark_id, item_id, item_number) => {
    const bookmarkItemSelectContent = bookmarkList.find(bookmark => bookmark?.bookmark_id === bookmark_id);
    const bookmarkEditContent = (item_id !== undefined && item_number !== undefined && bookmarkItemSelectContent
      && { ...bookmarkItemSelectContent, bookmark_item_list: bookmarkItemSelectContent?.bookmark_item_list?.some(item => item?.item_id != item_id)
        && [...bookmarkItemSelectContent?.bookmark_item_list, { item_id: item_id, item_number: item_number }]
      }
    );
    dispatch(bookmarkEdit(bookmarkEditContent));
  };*/

  /* Item in bookmark - Remove */
  const handleBookmarkItemRemove = (bookmarkSelectId, item_id) => {
    const bookmarkItemSelectContent = bookmarkList.find(bookmark => bookmark?.bookmark_id === bookmarkSelectId);
    const bookmarkEditContent = (item_id !== undefined && bookmarkItemSelectContent
      && { ...bookmarkItemSelectContent, bookmark_item_list: bookmarkItemSelectContent?.bookmark_item_list?.some(item => item?.item_id === item_id)
        && bookmarkItemSelectContent?.bookmark_item_list?.filter(item => item?.item_id !== item_id)
      }
    );
    dispatch(bookmarkEdit(bookmarkEditContent));
  };

  /* Item in bookmark - Toggle checkbox */
  const bookmarkItemSelect = (bookmark_id, item_id, item_number) => {
    const bookmarkItemSelectContent = bookmarkList?.find(list => list?.bookmark_id === bookmark_id);
    const bookmarkEditContent = (item_id !== undefined && item_number !== undefined && bookmarkItemSelectContent
      && { ...bookmarkItemSelectContent, bookmark_item_list: bookmarkItemSelectContent?.bookmark_item_list?.some(item => item?.item_id === item_id)
        ? bookmarkItemSelectContent?.bookmark_item_list?.filter(item => item?.item_id !== item_id)
        : [...bookmarkItemSelectContent?.bookmark_item_list, { item_id: item_id, item_number: item_number }]
      }
    );
    dispatch(bookmarkEdit(bookmarkEditContent));
  };

  /* Item in bookmark - Checked checkbox */
  const bookmarkItemChecked = (bookmark_id, item_id) => bookmarkList?.find(bookmark => bookmark?.bookmark_id === bookmark_id)?.bookmark_item_list?.some(item => item?.item_id === item_id) && 'checked';

  return (
    <section id="bookmark" className="container">
      <h1>รายการโปรด</h1>
      {bookmarkLoading
      ? <IconLoading />
      : <>
          {bookmarkList?.length === 0
          ? <IconBookmarkNotFound />
          : <>
              {itemAddSelect !== undefined
              ? <section id="bookmarkCheckbox" className="flex flex-col items-center gap">
                  <table className="table-action">
                    <thead>
                      <tr>
                        <th className="!w-full !p-0"></th>
                        <th className="!p-0"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookmarkList?.map(itemBookmarkList => (
                        <tr key={itemBookmarkList?.bookmark_id}>
                          <td>
                            <form>
                              <fieldset className="fieldset-inline">
                                <div className="field">
                                  <input type="checkbox" id={itemBookmarkList?.bookmark_id} checked={bookmarkItemChecked(itemBookmarkList?.bookmark_id, itemAddSelect?.item_id)} onChange={() => bookmarkItemSelect(itemBookmarkList?.bookmark_id, itemAddSelect?.item_id, itemAddSelect?.item_number)} />
                                  <label htmlFor={itemBookmarkList?.bookmark_id}>{itemBookmarkList?.bookmark_title}</label>
                                </div>
                              </fieldset>
                            </form>
                          </td>
                          <td>
                            {/*
                              <div className="tooltip" data-tip="ลบ">
                                <button className="btn btn-icon btn-mix-alternate-warning" onClick={() => handleBookmarkCheckboxDelete(itemBookmarkList?.bookmark_id)}>
                                  <span className="material-symbols-outlined">delete_forever</span>
                                  <span className="text hidden">ลบ</span>
                                </button>
                              </div>
                            */}
                            <StatusItem statusItem={itemBookmarkList?.bookmark_status} addClassNameIcon={'icon-2xs text-slate-200 my-3'} addClassNameText={'hidden'} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button className="btn btn-sm btn-ghost w-fit"onClick={() => navigate(`/รายการโปรด`)}>
                    <span className="material-symbols-outlined">settings</span>
                    <span className="text">จัดการรายการโปรด</span>
                  </button>
                </section>
              : <section id="bookmarkList" className="flex flex-1 flex-col gap">
                  <section className="flex justify-between items-end gap">
                    {bookmarkList.find(bookmark => bookmark.bookmark_id === bookmarkSelectId)?.bookmark_time_updated === bookmarkEditSelect?.bookmark_time_updated
                    ? <BookmarkForm bookmarkEditSelect={bookmarkEditSelect} />
                    : <>
                        <form className="form-inline">
                          <fieldset className="fieldset-border">
                            <div className="field">
                              <label className="label-border">เลือกรายการโปรด</label>
                              <select defaultValue={bookmarkSelectValue} onChange={(event) => handleBookmarkSelect(event.target.selectedIndex)}>
                                {bookmarkList.map((itemBookmarkList) => (
                                  <option key={itemBookmarkList?.bookmark_id} value={itemBookmarkList?.bookmark_title}>{itemBookmarkList?.bookmark_title}</option>
                                ))}
                              </select>
                            </div>
                          </fieldset>
                        </form>
                        <div className="nav-action">
                          <div className="tooltip" data-tip="แก้ไข">
                            <button className="btn btn-icon btn-ghost" onClick={handleBookmarkEdit}>
                              <span className="material-symbols-outlined">edit</span>
                              <span className="text hidden">แก้ไข</span>
                            </button>
                          </div>
                          <div className="tooltip" data-tip="ลบ">
                            <button className="btn btn-icon btn-ghost-alternate-error" onClick={handleBookmarkSelectDelete}>
                              <span className="material-symbols-outlined">delete_forever</span>
                              <span className="text hidden">ลบ</span>
                            </button>
                          </div>
                        </div>
                      </>
                    }
                  </section>
                  {bookmarkSelectItemList?.length === 0
                  ? <IconItemNotFound />
                  : <>
                      <table className="table-action">
                        <thead>
                          <tr>
                            <th>เลขที่</th>
                            <th>ชื่อบทสวดมนต์</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {bookmarkSelectItemList?.map(itemItemList => (
                            <tr key={itemItemList?.item_id}>
                              {itemList?.find(item => item?.item_id === itemItemList?.item_id)
                              ? <>
                                  <td>{itemItemList?.item_number}</td>
                                  <td><Link to={`/รายการโปรด/${bookmarkList?.find(bookmark => bookmark?.bookmark_id === bookmarkSelectId)?.bookmark_id}/${itemItemList?.item_number}/${itemList?.find(item => item?.item_id === itemItemList?.item_id)?.item_name}`}>{itemList?.find(item => item?.item_id === itemItemList?.item_id)?.item_name}</Link></td>
                                </>
                              : <>
                                  <td className="!text-slate-200">{itemItemList?.item_number}</td>
                                  <td className="text-slate-200">ไม่พบบทสวดมนต์</td>
                                </>
                              }
                              <td>
                                <div className="tooltip" data-tip="ลบ">
                                  <button className="btn btn-icon btn-mix-alternate-warning" onClick={() => handleBookmarkItemRemove(bookmarkSelectId, itemItemList?.item_id)}>
                                    <span className="material-symbols-outlined">bookmark_remove</span>
                                    <span className="hidden">ลบ</span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <span className="badge badge-sm mx-auto">{bookmarkSelectItemList?.length} บทสวดมนต์</span>
                    </>
                  }
                </section>
              }
            </>
          }
        </>
      }
      <hr />
      <section id="bookmarkCreate">
        <BookmarkForm bookmarkNumberHighest={bookmarkNumberHighest} />
      </section>
    </section>
  );

};

export default Bookmark;