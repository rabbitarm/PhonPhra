import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookmarkCreate, bookmarkEdit } from '../store/bookmarkListSlice';
import { nanoid } from 'nanoid';

function BookmarkForm({ bookmarkNumberHighest, bookmarkEditSelect }) {

  const dispatch = useDispatch();

  /* Bookmark - Create & Edit */
  const [bookmarkFormContent, setBookmarkFormContent] = useState(bookmarkEditSelect ? bookmarkEditSelect : {'bookmark_title': ''});
  const bookmarkFormChange = (event) => setBookmarkFormContent({ ...bookmarkFormContent, [event.target.name]: event.target.value });
  const handleBookmarkFormSubmit = (event) => {
    event.preventDefault();
    {bookmarkEditSelect
    ? dispatch(bookmarkEdit(bookmarkFormContent))
    : (
        dispatch(bookmarkCreate({
          bookmark_id: nanoid(),
          bookmark_number: bookmarkNumberHighest + 1,
          bookmark_title: bookmarkFormContent?.bookmark_title,
          bookmark_item_list: [],
        })),
        setBookmarkFormContent({'bookmark_title': ''})
      )
    };
  };

  return (
    <form className="form-inner" onSubmit={handleBookmarkFormSubmit}>
      <fieldset className={bookmarkEditSelect ? '' : 'fieldset-border'}>
        <div className="field">
          <label className="label-border">
          {bookmarkEditSelect
          ? 'แก้ไขชื่อรายการ'
          : 'สร้างรายการโปรด'
          }
          </label>
          <input type="text" name="bookmark_title" value={bookmarkFormContent?.bookmark_title} onChange={bookmarkFormChange} placeholder="บทสวดมนต์ประจำวัน" />
        </div>
      </fieldset>
      <fieldset className="fieldset-button-field-end">
        <button className={`btn ${bookmarkEditSelect ? 'btn-icon' : ''} btn-ghost-alternate-primary`} type="submit">
          {bookmarkEditSelect
          ? <>
              <span className="material-symbols-outlined">done</span>
              <span className="text hidden">ยืนยันการแก้ไข</span>
            </>
          : <>
              <span className="material-symbols-outlined">add</span>
              <span className="text">สร้าง</span>
            </>
          }
        </button>
      </fieldset>
    </form>
  );

};

export default BookmarkForm;