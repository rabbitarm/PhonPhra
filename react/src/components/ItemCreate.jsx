import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { tinyApi, tinyInit } from '../api/tinyApi';

import { useDispatch } from 'react-redux';
import ItemCategory from './ItemCategory';
import { itemCreate } from '../store/itemListSlice';
import { nanoid } from 'nanoid';

function ItemCreate({ itemNumberHighest }) {

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const dispatch = useDispatch();

  const itemCreateInitial = { item_name: '', item_desc: '', item_category_list: [] };
  const [itemCreateContent, setItemCreateContent] = useState(itemCreateInitial);
  const itemCreateChange = (event) => setItemCreateContent({ ...itemCreateContent, [event.target.name]: event.target.value });
  const handleItemCreateSubmit = (event) => {
    event.preventDefault();
    dispatch(itemCreate({ ...itemCreateContent, item_id: nanoid(), item_number: itemNumberHighest + 1 }));
    setItemCreateContent(itemCreateInitial);
  };
  const itemCreateReset = () => setItemCreateContent(itemCreateInitial);

  const [itemCategoryChange, setItemCategoryChange] = useState(itemCreateContent?.item_category_list);
  const handleItemCategoryChange = (event) => {
    setItemCategoryChange(event);
    setItemCreateContent({ ...itemCreateContent, item_category_list: event });
  }

  return (
    <>
      <h4>เพิ่มบทสวดมนต์</h4>
      <form onSubmit={handleItemCreateSubmit}>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ชื่อบทสวดมนต์</label>
            <input type="text" name="item_name" value={itemCreateContent.item_name} onChange={itemCreateChange} placeholder="คําบูชาพระรัตนตรัย" />
          </div>
        </fieldset>
        <ItemCategory itemCategorySelect={itemCategoryChange} itemCategoryChange={handleItemCategoryChange} />
        {/*
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">บทสวดมนต์</label>
            <textarea name="item_desc" value={itemCreateContent?.item_desc} onChange={itemCreateChange} placeholder="อะระหัง สัมมาสัมพุทโธ ภะคะวา, พุทธัง ภะคะวันตัง อภิวาเทมิ&#10;สวากขาโต ภะคะวะตา ธัมโม, ธัมมังนะมัสสามิ&#10;สุปะฏิปปันโน ภะคะวะโต สาวะกะสังโฆ, สังฆัง นะมามิ"></textarea>
          </div>
        </fieldset>
        */}
        <fieldset>
          <Editor
            apiKey = { tinyApi }
            onInit = {(evt, editor) => editorRef.current = editor}
            name = "item_desc"
            initialValue = "<p>อะระหัง สัมมาสัมพุทโธ ภะคะวา, พุทธัง ภะคะวันตัง อภิวาเทมิ<br />สวากขาโต ภะคะวะตา ธัมโม, ธัมมังนะมัสสามิ<br />สุปะฏิปปันโน ภะคะวะโต สาวะกะสังโฆ, สังฆัง นะมามิ</p>"
            value={itemCreateContent?.item_desc}
            onEditorChange = {content => {itemCreateChange({ target: { name: "item_desc", value: content } });}}
            init = { tinyInit }
          />
        </fieldset>
        <fieldset className="fieldset-button">
          <button className="btn btn-color-primary w-full 2xs:w-fit" type="submit">
            <span className="material-symbols-outlined">note_add</span>
            <span>ส่ง</span>
          </button>
          <button className="btn btn-ghost w-full 2xs:w-fit" type="reset" onClick={itemCreateReset}>
            <span className="material-symbols-outlined">backspace</span>
            <span>ล้าง</span>
          </button>
        </fieldset>
      </form>
    </>
  );

};

export default ItemCreate;