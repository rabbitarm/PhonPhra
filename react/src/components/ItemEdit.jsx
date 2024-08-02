import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { tinyApi, tinyInit } from '../api/tinyApi';

import { useDispatch } from 'react-redux';
import ItemCategory from '../pages/ItemCategory';
import { itemEdit } from '../store/itemListSlice';

function ItemEdit({ itemEditSelect }) {

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const dispatch = useDispatch();

  const [itemEditContent, setItemEditContent] = useState(itemEditSelect);
  const [itemModeUpdating, setItemModeUpdating] = useState(false);
  const itemEditChange = (event) => setItemEditContent({ ...itemEditContent, [event.target.name]: event.target.value });
  const handleItemEditSubmit = (event) => {
    event.preventDefault();
    setItemModeUpdating(!itemModeUpdating);
    dispatch(itemEdit(itemEditContent));
  }
  const handleItemEditReset = () => setItemEditContent(itemEditSelect);

  const [itemCategoryChange, setItemCategoryChange] = useState(itemEditSelect?.item_category_list);
  const handleItemCategoryChange = (event) => {
    setItemCategoryChange(event);
    setItemEditContent({ ...itemEditContent, item_category_list: event });
  }

  return (
    <>
      <h3 className="flex items-center gap-sm">แก้ไขบทสวดมนต์ <span className="badge badge-lg badge-color-info">เลขที่: {itemEditContent?.item_number}</span></h3>
      <form className="flex-1" key={itemEditContent.item_id} onSubmit={handleItemEditSubmit}>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ชื่อบทสวดมนต์</label>
            <input type="text" name="item_name" value={itemEditContent.item_name} onChange={itemEditChange} placeholder="คําบูชาพระรัตนตรัย" />
          </div>
        </fieldset>
        <ItemCategory itemCategorySelect={itemCategoryChange} itemCategoryChange={handleItemCategoryChange} />
        {/*
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">บทสวดมนต์</label>
            <textarea name="item_desc" value={itemEditContent?.item_desc} onChange={itemEditChange} placeholder="อะระหัง สัมมาสัมพุทโธ ภะคะวา, พุทธัง ภะคะวันตัง อภิวาเทมิ&#10;สวากขาโต ภะคะวะตา ธัมโม, ธัมมังนะมัสสามิ&#10;สุปะฏิปปันโน ภะคะวะโต สาวะกะสังโฆ, สังฆัง นะมามิ"></textarea>
          </div>
        </fieldset>
        */}
        <fieldset className="flex-1">
          <Editor
            apiKey = { tinyApi }
            onInit = {(evt, editor) => editorRef.current = editor}
            name = "item_desc"
            /*initialValue = "<p>อะระหัง สัมมาสัมพุทโธ ภะคะวา, พุทธัง ภะคะวันตัง อภิวาเทมิ<br />สวากขาโต ภะคะวะตา ธัมโม, ธัมมังนะมัสสามิ<br />สุปะฏิปปันโน ภะคะวะโต สาวะกะสังโฆ, สังฆัง นะมามิ</p>"*/
            value={itemEditContent?.item_desc}
            onEditorChange = {content => {itemEditChange({ target: { name: "item_desc", value: content } });}}
            init = { tinyInit }
          />
        </fieldset>
        <fieldset className="fieldset-button">
          {itemModeUpdating
          ? <button className="btn btn-color-primary w-full 2xs:w-fit btn-disabled" type="submit">
              <span className="material-symbols-outlined animate-spin">progress_activity</span>
              <span>กำลังอัพเดท</span>
            </button>
          : <button className="btn btn-color-primary w-full 2xs:w-fit" type="submit">
              <span className="material-symbols-outlined">done</span>
              <span>ยืนยันการแก้ไข</span>
            </button>
          }
          <button className="btn btn-ghost w-full 2xs:w-fit" type="reset" onClick={handleItemEditReset}>
            <span className="material-symbols-outlined">undo</span>
            <span>รีเซ็ต</span>
          </button>
        </fieldset>
      </form>
    </>
  );

};

export default ItemEdit;