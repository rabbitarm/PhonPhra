import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

function Bookmark({ itemList, itemAddNavSelect }) {

  /* Bookmark - List */
  const bookmarkListInitial = [
    {
      bookmark_id: 'idlist1',
      bookmark_title: 'List 1',
      bookmark_item_list: [
        {
          _id: '65c0902a4ad9b04b1819acaa',
          item_number: 1,
        },{
          _id: '65c090324ad9b04b1819acae',
          item_number: 3,
        },{
          _id: '65c0902f4ad9b04b1819acac',
          item_number: 2,
        },{
          _id: '65c090364ad9b04b1819acb0',
          item_number: 4,
        }
      ],
    },
    {
      bookmark_id: 'idlist2',
      bookmark_title: 'List 2',
      bookmark_item_list: [
        {
          _id: '65c1f07715d1b7c380880a21',
          item_number: 17,
        },{
          _id: '65c1d68cd84db6f5def7d3d4',
          item_number: 15,
        },{
          _id: '65c1dbcd15d1b7c3808807ba',
          item_number: 16,
        }
      ],
    },
  ];
  const [bookmarkList, setBookmarkList] = useState(bookmarkListInitial);

  /* Bookmark - Create */
  const [bookmarkCreateTitle, setBookmarkCreateTitle] = useState('');
  const bookmarkCreateId = nanoid();
  const bookmarkCreateChange = (event) => setBookmarkCreateTitle(event.target.value);
  const handleBookmarkCreateSubmit = (event) => {
    event.preventDefault();
    setBookmarkList(bookmarkListPrev => [...bookmarkListPrev, { bookmark_id: bookmarkCreateId, bookmark_title: bookmarkCreateTitle, bookmark_item_list: [] }]);
    setBookmarkCreateTitle('');
  };

  /* Bookmark - Delete */
  const bookmarkSelectInitial = bookmarkList[0]?.bookmark_id;
  const [bookmarkSelectId, setBookmarkSelectId] = useState(bookmarkSelectInitial);
  const bookmarkSelectItemList = bookmarkList?.find(itemBookmarkList => itemBookmarkList?.bookmark_id === bookmarkSelectId)?.bookmark_item_list;
  const bookmarkDelete = (bookmark_id) => setBookmarkList(bookmarkListUpdate => bookmarkListUpdate.filter(list => list?.bookmark_id !== bookmark_id));
  const handleBookmarkSelect = (event) => setBookmarkSelectId(bookmarkList[event]?.bookmark_id);
  const handleBookmarkSelectDelete = (event) => {
    event.preventDefault();
    bookmarkDelete(bookmarkSelectId);
  };
  /* Bookmark - Delete -- Check after delete bookmark */
  useEffect(() => {
    if (!bookmarkList.some(list => list?.bookmark_id === bookmarkSelectId)) {
      setBookmarkSelectId(bookmarkSelectInitial);
    };
  },[handleBookmarkSelectDelete]);

  /* Item in bookmark - Add */
/*  const bookmarkItemAdd = (bookmark_id, _id, item_number) => {
    setBookmarkList(bookmarkListUpdate => bookmarkListUpdate.map(list => list?.bookmark_id === bookmark_id
      ? [...list?.bookmark_item_list, { _id: _id, item_number: item_number }]
      : null
    ));
  };*/

  /* Item in bookmark - Remove */
  const handleBookmarkItemRemove = (bookmarkSelectId, _id) => {
    setBookmarkList(bookmarkListUpdate => bookmarkListUpdate.map(list => list?.bookmark_id === bookmarkSelectId
      ? { ...list, bookmark_item_list: list?.bookmark_item_list?.filter(item => item?._id !== _id)}
      : list
    ));
  };

  /* Item in bookmark - Toggle checkbox */
  const bookmarkItemSelect = (bookmark_id, _id, item_number) => {
    setBookmarkList(bookmarkListUpdate => bookmarkListUpdate.map(list => list?.bookmark_id === bookmark_id
      ? { ...list, bookmark_item_list: list?.bookmark_item_list?.some(item => item?._id === _id)
        ? list?.bookmark_item_list?.filter(item => item?._id !== _id)
        : [...list?.bookmark_item_list, { _id: _id, item_number: item_number }]
      }
      : list
    ));
  };
  /* Item in bookmark - Checked checkbox */
  const bookmarkItemChecked = (bookmark_id, _id) => bookmarkList.find(list => list?.bookmark_id === bookmark_id)?.bookmark_item_list.some(item => item?._id === _id) ? 'checked' : '';

  useEffect(() => {
    console.log('Bookmark List', bookmarkList);
  }, [bookmarkList]);

  return (
    <section id="bookmark" className="container">
      <section id="bookmarkCheckbox" className="flex flex-col gap">
        <h3>รายการโปรด (Chock Box)</h3>
        {bookmarkList.length === 0
        ? <section className="flex justify-center items-center gap-sm">
            <svg className="size-10 fill-slate-300" viewBox="0 -960 960 960">
              <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
            </svg>
            <p className="h5 text-slate-400">ไม่มีรายการโปรด</p>
          </section>
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
                          <input type="checkbox" id={itemBookmarkList?.bookmark_id} checked={bookmarkItemChecked(itemBookmarkList?.bookmark_id, itemAddNavSelect?._id) === 'checked'} onChange={() => bookmarkItemSelect(itemBookmarkList?.bookmark_id, itemAddNavSelect?._id, itemAddNavSelect?.item_number)} />
                          <label htmlFor={itemBookmarkList?.bookmark_id}>{itemBookmarkList?.bookmark_title}</label>
                        </div>
                      </fieldset>
                    </form>
                  </td>
                  <td>
                    <div className="tooltip" data-tip="ลบ">
                      <button className="btn btn-icon btn-mix-alternate-warning" onClick={() => bookmarkDelete(itemBookmarkList?.bookmark_id)}>
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
      </section>
      <section id="bookmarkList" className="flex flex-col gap">
        <h3>รายการโปรด</h3>
        {bookmarkList.length === 0
        ? <section className="flex justify-center items-center gap-sm">
            <svg className="size-10 fill-slate-300" viewBox="0 -960 960 960">
              <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
            </svg>
            <p className="h5 text-slate-400">ไม่มีรายการโปรด</p>
          </section>
        : <>
            <form className="form-inline" onSubmit={handleBookmarkSelectDelete}>
              <fieldset className="fieldset-border md:max-w-80">
                <div className="field">
                  <label className="label-border">เลือกรายการโปรด</label>
                  <select onChange={() => handleBookmarkSelect(event.target.selectedIndex)}>
                    {bookmarkList.map(itemBookmarkList => (
                      <option key={itemBookmarkList?.bookmark_id} value={itemBookmarkList?.bookmark_title}>{itemBookmarkList?.bookmark_title}</option>
                    ))}
                  </select>
                </div>
              </fieldset>
              <fieldset className="fieldset-button">
                <div className="tooltip" data-tip="ลบ">
                  <button className="btn btn-icon btn-alternate-error" type="submit">
                    <svg viewBox="0 -960 960 960">
                    <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
                    </svg>
                    <span className="hidden">ลบ</span>
                  </button>
                </div>
              </fieldset>
            </form>
            {bookmarkSelectItemList?.length === 0
            ? <>
                <p className="h5 text-slate-400">ไม่มีบทสวดมนต์</p>
              </>
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
                    {itemList?.filter(itemItemList => bookmarkSelectItemList?.some(bookmarkItemList => bookmarkItemList?._id === itemItemList?._id))
                            ?.sort((a, b) => bookmarkSelectItemList.findIndex(item => item?._id === a?._id) - bookmarkSelectItemList.findIndex(item => item?._id === b?._id))
                            ?.map(itemItemList => (
                      <tr key={itemItemList?._id}>
                        <td>{itemItemList?.item_number}</td>
                        <td><a href="#content">{itemItemList?.item_name}</a></td>
                        <td>
                          <div className="tooltip" data-tip="ลบ">
                            <button className="btn btn-icon btn-mix-alternate-warning" onClick={() => handleBookmarkItemRemove(bookmarkSelectId, itemItemList?._id)}>
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
      </section>
      <hr />
      <section id="bookmarkCreate">
        <form className="form-inner" onSubmit={handleBookmarkCreateSubmit}>
          <fieldset className="fieldset-border pt-0">
            <div className="field">
              <label className="label-border">สร้างรายการโปรด</label>
              <input type="text" name="title" value={bookmarkCreateTitle} onChange={bookmarkCreateChange} placeholder="บทสวดมนต์ประจำวัน" />
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