import React, { useState } from 'react'
import axios from 'axios'

function ItemEdit() {

  const abortController = new AbortController()
  const itemEditPrev = { item_name: '', item_desc: '' }
  const [itemEditContent, setItemEditContent] = useState(itemEditPrev)
  const itemEditChange = (event) => setItemEditContent({ ...itemEditContent, [event.target.name]: event.target.value })
  const itemEditSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/item/edit/:id`, itemEditContent, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        crossdomain: true,
        signal: abortController.signal
      });
      setItemEditContent(response.data);
      console.log('Item edited successfully:', response.data);
      setItemEditContent(itemEditPrevInitial);
    } catch (error) {
      console.error('Error editing item:', error);
    }
  }
  const itemEditReset = () => setItemEditContent(itemEditPrev)

  return (
    <>
      <h4>แก้ไขบทสวดมนต์</h4>
      <mark className="inline-block text-white px-3 py-1 rounded-lg bg-info">เลขที่: {itemEditContent?.item_number}</mark>
      <form onSubmit={itemEditSubmit}>
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
          <button className="btn btn-color-primary w-full 2xs:w-fit" type="submit">
            <svg viewBox="0 -960 960 960">
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
            <span>ยืนยันการแก้ไข</span>
          </button>
          <button className="btn btn-ghost w-full 2xs:w-fit" type="reset" onClick={itemEditReset}>
            <svg viewBox="0 -960 960 960">
              <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" />
            </svg>
            <span>รีเซ็ตข้อความ</span>
          </button>
        </fieldset>
      </form>
    </>
  );

}

export default ItemEdit