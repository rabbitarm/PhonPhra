import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { itemEdit } from '../store/itemListSlice';

function ItemEdit({ itemEditNavContent }) {

  const dispatch = useDispatch();

  const [itemEditContent, setItemEditContent] = useState(itemEditNavContent);
  const [itemModeUpdating, setItemModeUpdating] = useState(false);
  const [itemModeError, setItemModeError] = useState(false);
  const itemEditChange = (event) => setItemEditContent({ ...itemEditContent, [event.target.name]: event.target.value });
  const handleItemEditSubmit = (event) => {
    event.preventDefault();
    setItemModeUpdating(!itemModeUpdating);
    dispatch(itemEdit(itemEditContent));
  }
  const handleItemEditReset = () => setItemEditContent(itemEditNavContent);

  return (
    <>
      <h4>แก้ไขบทสวดมนต์</h4>
      <span className="badge badge-lg badge-color-info">เลขที่: {itemEditContent?.item_number}</span>
      <form key={itemEditContent.item_id} onSubmit={handleItemEditSubmit}>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ชื่อบทสวดมนต์</label>
            <input type="text" name="item_name" value={itemEditContent.item_name} onChange={itemEditChange} placeholder="คําบูชาพระรัตนตรัย" />
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">บทสวดมนต์</label>
            <textarea name="item_desc" value={itemEditContent.item_desc} onChange={itemEditChange} placeholder="อะระหัง สัมมาสัมพุทโธ ภะคะวา, พุทธัง ภะคะวันตัง อภิวาเทมิ&#10;สวากขาโต ภะคะวะตา ธัมโม, ธัมมังนะมัสสามิ&#10;สุปะฏิปปันโน ภะคะวะโต สาวะกะสังโฆ, สังฆัง นะมามิ"></textarea>
          </div>
        </fieldset>
        <fieldset className="fieldset-button">
          {itemModeUpdating
          ? <button className="btn btn-color-primary w-full 2xs:w-fit btn-disabled" type="submit">
              <svg className="animate-spin" viewBox="0 -960 960 960">
                <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" />
              </svg>
              <span>กำลังอัพเดท</span>
            </button>
          : <button className="btn btn-color-primary w-full 2xs:w-fit" type="submit">
              <svg viewBox="0 -960 960 960">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
              <span>ยืนยันการแก้ไข</span>
            </button>
          }
          <button className="btn btn-ghost w-full 2xs:w-fit" type="reset" onClick={handleItemEditReset}>
            <svg viewBox="0 -960 960 960">
              <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" />
            </svg>
            <span>รีเซ็ต</span>
          </button>
        </fieldset>
      </form>
    </>
  );

};

export default ItemEdit;