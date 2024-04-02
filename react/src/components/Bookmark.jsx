import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookmarkCreate, bookmarkEdit, bookmarkDelete } from '../store/bookmarkListSlice';
import { nanoid } from 'nanoid';
import { IconLoading, IconItemNotFound, IconBookmarkNotFound } from './Status';
import BookmarkEdit from './BookmarkEdit';

function Bookmark({ itemAddNavSelect }) {

  /* Bookmark - List */
  const dispatch = useDispatch();
  const { itemList } = useSelector((state) => state.itemList);
  const { bookmarkList, bookmarkLoading } = useSelector((state) => state.bookmarkList);

  /* Check highest bookmark number */
  const bookmarkNumberHighest = bookmarkList.reduce((max, bookmark) => {
    return bookmark.bookmark_number > max ? bookmark.bookmark_number : max;
  }, 0);

  /* Bookmark - Create */
  const [bookmarkCreateTitle, setBookmarkCreateTitle] = useState('');
  const bookmarkCreateChange = (event) => setBookmarkCreateTitle(event.target.value);
  const handleBookmarkCreateSubmit = (event) => {
    event.preventDefault();
    dispatch(bookmarkCreate({ bookmark_title: bookmarkCreateTitle, bookmark_id: nanoid(), bookmark_number: bookmarkNumberHighest + 1, bookmark_item_list: [] }));
    setBookmarkCreateTitle('');
  };
  /* Bookmark - Select */
  const bookmarkSelectInitial = bookmarkList[1]?.bookmark_id; /* Problem - Wrong choice */
  const [bookmarkSelectId, setBookmarkSelectId] = useState(bookmarkSelectInitial);
  const bookmarkSelectItemList = bookmarkList?.find(itemBookmarkList => itemBookmarkList?.bookmark_id === bookmarkSelectId)?.bookmark_item_list;
  const handleBookmarkSelect = (event) => setBookmarkSelectId(bookmarkList[event]?.bookmark_id);
  useEffect(() => {
    setBookmarkSelectId(bookmarkSelectInitial);
  }, [bookmarkSelectInitial]);
  /* Bookmark - Edit */
  const [bookmarkEditNavContent, setBookmarkEditNavContent] = useState([]);
  const handleBookmarkSelectRename = () => {
    setBookmarkEditNavContent(bookmarkList?.find(list => list?.bookmark_id === bookmarkSelectId));
  }
  /* Bookmark - Delete */
  const handleBookmarkSelectDelete = () => {
    dispatch(bookmarkDelete(bookmarkSelectId));
    setBookmarkSelectId(bookmarkSelectInitial);
  };
  const handlebookmarkCheckboxDelete = (bookmark_id) => {
    const bookmarkSelectId = bookmark_id;
    dispatch(bookmarkDelete(bookmarkSelectId));
    setBookmarkSelectId(bookmarkSelectInitial);
  }

  /* Item in bookmark */
  const [bookmarkEditContent, setBookmarkEditContent] = useState([]);
  /* Item in bookmark - Add */
/*  const bookmarkItemAdd = (bookmark_id, item_id, item_number) => {
    setBookmarkList(bookmarkListUpdate => bookmarkListUpdate.map(list => list?.bookmark_id === bookmark_id
      ? [...list?.bookmark_item_list, { item_id: item_id, item_number: item_number }]
      : null
    ));
  };*/

  /* Item in bookmark - Remove */
  const handleBookmarkItemRemove = (bookmarkSelectId, item_id) => {
    setBookmarkList(bookmarkListUpdate => bookmarkListUpdate.map(list => list?.bookmark_id === bookmarkSelectId
      ? { ...list, bookmark_item_list: list?.bookmark_item_list?.filter(item => item?.item_id !== item_id)}
      : list
    ));
  };

  /* Item in bookmark - Toggle checkbox */
  const bookmarkItemSelect = (bookmark_id, item_id, item_number) => {
/*    setBookmarkList(bookmarkListUpdate => bookmarkListUpdate.map(list => list?.bookmark_id === bookmark_id
      ? { ...list, bookmark_item_list: list?.bookmark_item_list?.some(item => item?.item_id === item_id)
        ? list?.bookmark_item_list?.filter(item => item?.item_id !== item_id)
        : [...list?.bookmark_item_list, { item_id: item_id, item_number: item_number }]
      }
      : list
    ));*/
    setBookmarkEditContent(bookmarkList.find(bookmark => bookmark.bookmark_id === bookmark_id 
      ? { ...bookmark, bookmark_item_list: bookmark.bookmark_item_list.some(item => item.item_id === item_id)
        ? bookmark.bookmark_item_list.filter(item => item.item_id !== item_id)
        : [...bookmark.bookmark_item_list, { item_id, item_number }]
      }
      : bookmark
    ));
    /*dispatch(bookmarkEdit(bookmarkEditContent));*/
  };
  useEffect(() => {
    console.log(bookmarkEditContent);
  }, [bookmarkEditContent]);
  /* Item in bookmark - Checked checkbox */
  const bookmarkItemChecked = (bookmark_id, item_id) => bookmarkList.find(list => list?.bookmark_id === bookmark_id)?.bookmark_item_list.some(item => item?.item_id === item_id) && 'checked';

  return (
    <section id="bookmark" className="container">
      <section id="bookmarkCheckbox" className="flex flex-col gap">
        <h3>รายการโปรด</h3>
        {bookmarkLoading
        ? <IconLoading />
        : <>
            {bookmarkList?.length === 0
            ? <IconBookmarkNotFound />
            : <table className="table-action">
                <thead>
                  <tr>
                    <th className="!w-full !p-0"></th>
                    <th className="!p-0"></th>
                  </tr>
                </thead>
                <tbody>
                  {bookmarkList.map(itemBookmarkList => (
                    <tr key={itemBookmarkList?.bookmark_id}>
                      <td>
                        <form>
                          <fieldset className="fieldset-inline">
                            <div className="field">
                            <input type="checkbox" id={itemBookmarkList?.bookmark_id} checked={bookmarkItemChecked(itemBookmarkList?.bookmark_id, itemAddNavSelect?.item_id) === 'checked'} onChange={() => bookmarkItemSelect(itemBookmarkList?.bookmark_id, itemAddNavSelect?.item_id, itemAddNavSelect?.item_number)} />
                              <label htmlFor={itemBookmarkList?.bookmark_id}>{itemBookmarkList?.bookmark_title} - {itemBookmarkList?.bookmark_id}</label>
                            </div>
                          </fieldset>
                        </form>
                      </td>
                      <td>
                        <div className="tooltip" data-tip="ลบ">
                          <button className="btn btn-icon btn-mix-alternate-warning" onClick={() => handlebookmarkCheckboxDelete(itemBookmarkList?.bookmark_id)}>
                            <svg viewBox="0 -960 960 960">
                              <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
                            </svg>
                            <span className="hidden">ลบ</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            }
          </>
        }
      </section>
      <section id="bookmarkList" className="flex flex-col gap">
        <h3>รายการโปรด</h3>
        {bookmarkLoading
        ? <IconLoading />
        : <>
            {bookmarkList?.length === 0
            ? <IconBookmarkNotFound />
            : <>
                <section className="flex justify-between items-end gap">
                  {bookmarkList.find(bookmark => bookmark.bookmark_id === bookmarkSelectId)?.bookmark_time_updated === bookmarkEditNavContent?.bookmark_time_updated
                  ? <BookmarkEdit bookmarkEditNavContent={bookmarkEditNavContent} />
                  : <>
                      <form className="form-inline">
                        <fieldset className="fieldset-border">
                          <div className="field">
                            <label className="label-border">เลือกรายการโปรด</label>
                            <select onChange={(event) => handleBookmarkSelect(event.target.selectedIndex)}>
                              {bookmarkList.map(itemBookmarkList => (
                                <option key={itemBookmarkList?.bookmark_id} value={itemBookmarkList?.bookmark_title}>{itemBookmarkList?.bookmark_title}</option>
                              ))}
                            </select>
                          </div>
                        </fieldset>
                      </form>
                      <div className="action-bar">
                        <div className="tooltip" data-tip="แก้ไข">
                          <button className="btn btn-icon btn-ghost" onClick={handleBookmarkSelectRename}>
                            <svg viewBox="0 -960 960 960">
                              <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                            </svg>
                            <span className="hidden">แก้ไข</span>
                          </button>
                        </div>
                        <div className="tooltip" data-tip="ลบ">
                          <button className="btn btn-icon btn-ghost-alternate-error" onClick={handleBookmarkSelectDelete}>
                            <svg viewBox="0 -960 960 960">
                              <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
                            </svg>
                            <span className="hidden">ลบ</span>
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
                        {itemList?.filter(itemItemList => bookmarkSelectItemList?.some(bookmarkItemList => bookmarkItemList?.item_id === itemItemList?.item_id))
                                 ?.sort((a, b) => bookmarkSelectItemList.findIndex(item => item?.item_id === a?.item_id) - bookmarkSelectItemList.findIndex(item => item?.item_id === b?.item_id))
                                 ?.map(itemItemList => (
                          <tr key={itemItemList?.item_id}>
                            <td>{itemItemList?.item_number}</td>
                            <td><a href="#content">{itemItemList?.item_name}</a></td>
                            <td>
                              <div className="tooltip" data-tip="ลบ">
                                <button className="btn btn-icon btn-mix-alternate-warning" onClick={() => handleBookmarkItemRemove(bookmarkSelectId, itemItemList?.item_id)}>
                                  <svg viewBox="0 -960 960 960">
                                    <path d="M840-680H600v-80h240v80ZM200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Z" />
                                  </svg>
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
              </>
            }
          </>
        }
      </section>
      <hr />
      <section id="bookmarkCreate">
        <form className="form-inner" onSubmit={handleBookmarkCreateSubmit}>
          <fieldset className="fieldset-border pt-0">
            <div className="field">
              <label className="label-border">สร้างรายการโปรด</label>
              <input type="text" name="bookmark_title" value={bookmarkCreateTitle} onChange={bookmarkCreateChange} placeholder="บทสวดมนต์ประจำวัน" />
            </div>
          </fieldset>
          <fieldset className="fieldset-button-field-end">
            <button className="btn btn-ghost-alternate-primary" type="submit">
              <svg viewBox="0 -960 960 960">
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
              <span>สร้าง</span>
            </button>
          </fieldset>
        </form>
      </section>
    </section>
  );

};

export default Bookmark;