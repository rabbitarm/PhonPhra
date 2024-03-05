import React, { useState } from 'react';
import axios from 'axios';

function ItemCreate() {

  const abortController = new AbortController();
  const itemCreateNewInitial = { item_name: '', item_desc: '' };
  const [itemCreateNew, setItemCreateNew] = useState(itemCreateNewInitial);
  const itemCreateChange = (event) => setItemCreateNew({ ...itemCreateNew, [event.target.name]: event.target.value });
  const itemCreateSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/item/create`, itemCreateNew, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        crossdomain: true,
        signal: abortController.signal
      });
      setItemCreateNew(response.data);
      console.log('Item created successfully:', response.data);
      setItemCreateNew(itemCreateNewInitial);
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };
  const itemCreateReset = () => setItemCreateNew(itemCreateNewInitial);

  return (
    <>
      <h4>เพิ่มบทสวดมนต์</h4>
      <form onSubmit={itemCreateSubmit}>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">ชื่อบทสวดมนต์</label>
            <input type="text" name="item_name" value={itemCreateNew.item_name} onChange={itemCreateChange} placeholder="คําบูชาพระรัตนตรัย" />
          </div>
        </fieldset>
        <fieldset className="fieldset-border">
          <div className="field">
            <label className="label-border">บทสวดมนต์</label>
            <textarea name="item_desc" value={itemCreateNew.item_desc} onChange={itemCreateChange} placeholder="อะระหัง สัมมาสัมพุทโธ ภะคะวา, พุทธัง ภะคะวันตัง อภิวาเทมิ&#10;สวากขาโต ภะคะวะตา ธัมโม, ธัมมังนะมัสสามิ&#10;สุปะฏิปปันโน ภะคะวะโต สาวะกะสังโฆ, สังฆัง นะมามิ"></textarea>
          </div>
        </fieldset>
        <fieldset className="fieldset-button">
          <button className="btn btn-color-primary w-full 2xs:w-fit" type="submit">
            <svg viewBox="0 -960 960 960">
              <path d="M440-240h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
            </svg>
            <span>ส่ง</span>
          </button>
          <button className="btn btn-ghost w-full 2xs:w-fit" type="reset" onClick={itemCreateReset}>
            <svg viewBox="0 -960 960 960">
              <path d="M360-200q-20 0-37.5-9T294-234L120-480l174-246q11-16 28.5-25t37.5-9h400q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H360Zm400-80v-400 400Zm-400 0h400v-400H360L218-480l142 200Zm96-40 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Z" />
            </svg>
            <span>ล้าง</span>
          </button>
        </fieldset>
      </form>
    </>
  );

};

export default ItemCreate;