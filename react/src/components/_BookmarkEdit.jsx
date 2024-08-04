import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookmarkEdit } from '../store/bookmarkListSlice';

function BookmarkEdit({ bookmarkEditNavContent }) {

  const dispatch = useDispatch();

  const [bookmarkEditContent, setBookmarkEditContent] = useState(bookmarkEditNavContent);
  const bookmarkEditChange = (event) => setBookmarkEditContent({ ...bookmarkEditContent, [event.target.name]: event.target.value });
  const handleBookmarkEditSubmit = (event) => {
    event.preventDefault();
    dispatch(bookmarkEdit(bookmarkEditContent));
  }

  return (
    <>
      <form key={bookmarkEditContent.bookmark_id} className="form-inner" onSubmit={handleBookmarkEditSubmit}>
          <fieldset className="fieldset-border">
            <div className="field">
              <label className="label-border">แก้ไขชื่อรายการ</label>
              <input type="text" name="bookmark_title" value={bookmarkEditContent.bookmark_title} onChange={bookmarkEditChange} placeholder="บทสวดมนต์ประจำวัน" />
            </div>
          </fieldset>
          <fieldset className="fieldset-button-field-end">
            <button className="btn btn-icon btn-ghost-alternate-primary" type="submit">
              <span className="material-symbols-outlined">done</span>
              <span className="hidden">ยืนยันการแก้ไข</span>
            </button>
          </fieldset>
        </form>
    </>
  );

};

export default BookmarkEdit;