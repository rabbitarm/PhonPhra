import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCreate from './ItemCreate';
import ItemEdit from './ItemEdit';
import ItemContent from './ItemContent';

function ItemList() {
  /* Item */
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /* Item Nav */
  const [itemCreateToggle, setItemCreateToggle] = useState(false);
  const handleItemCreate = () => setItemCreateToggle((toggle) => !toggle);
  /**/
  const [itemAddNavId, setItemAddNavId] = useState('');
  const handleItemAdd = () => setItemAddNavId('');
  const handleItemAddCancel = () => setItemAddNavId('');
  const handleItemAddComfirm = () => setItemAddNavId('');
  /**/
  const [itemEditNavContent, setItemEditNavContent] = useState([]);
  const handleItemEdit = (itemItemListd) => setItemEditNavContent(itemItemListd);
  const handleItemEditCancel = () => setItemEditNavId('');
  const handleItemEditComfirm = () => setItemEditNavId('');
  /**/
  const [itemDeleteNavId, setItemDeleteNavId] = useState('');
  const handleItemDelete = (_id) => setItemDeleteNavId(_id);
  const handleItemDeleteCancel = () => setItemDeleteNavId('');
  const handleItemDeleteComfirm = () => setItemDeleteNavId('');

  /* Item List - Get */
  useEffect(() => {
    const abortController = new AbortController();
    const itemListGet = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await axios.get(`http://localhost:3001/item/list`, {
          crossdomain: true,
          signal: abortController.signal
        });
        setItemList(response.data);
      } catch (error) {
        setError('Error getting item list: ' + error.message);
      } finally {
        setLoading(false);
      };
    };
    itemListGet();
    return () => abortController.abort();
  }, []);

  return (
    <>
      <section id="itemList" className="container">
        <h3>บทสวดมนต์</h3>
        <table className="table-action">
          <thead>
            <tr>
              <th>เลขที่</th>
              <th>ชื่อบทสวดมนต์</th>
              <th>
                <button className="btn btn-alternate-primary ml-auto mr-[6px]" onClick={handleItemCreate}>
                  <svg viewBox="0 -960 960 960">
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                  </svg>
                  <span>สร้าง</span>
                </button>
                {itemCreateToggle
                ? <dialog className="modal">
                    <div className="modal-content">
                      <div className="tooltip tooltip-left" data-tip="ยกเลิก">
                        <button className="btn btn-icon btn-ghost" onClick={handleItemCreate}>
                          <svg viewBox="0 -960 960 960">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                          </svg>
                          <span className="hidden">ยกเลิก</span>
                        </button>
                      </div>
                      <ItemCreate />
                    </div>
                    <button className="modal-close" onClick={handleItemCreate}></button>
                  </dialog>
                : null
                }
              </th>
            </tr>
          </thead>
          <tbody>
            {itemList.map(itemItemList => (
              <tr key={itemItemList?._id}>
                <td>{itemItemList?.item_number}</td>
                <td><a href="#test">{itemItemList?.item_name}</a></td>
                <td>
                  <div className="tooltip" data-tip="เพิ่ม">
                    <button className="btn btn-icon btn-mix-alternate" onClick={() => handleItemAdd(itemItemList._id)}>
                      <svg viewBox="0 -960 960 960">
                        <path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
                      </svg>
                      <span className="hidden">เพิ่ม</span>
                    </button>
                  </div>
                  <div className="tooltip" data-tip="แก้ไข">
                    <button className="btn btn-icon btn-mix-alternate" onClick={() => handleItemEdit(itemItemList)}>
                      <svg viewBox="0 -960 960 960">
                        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                      </svg>
                      <span className="hidden">แก้ไข</span>
                    </button>
                    {itemItemList?._id === itemEditNavContent?._id
                    ? <dialog className="modal">
                        <div className="modal-content">
                          <div className="tooltip tooltip-left" data-tip="ยกเลิก">
                            <button className="btn btn-icon btn-ghost" onClick={handleItemEdit}>
                              <svg viewBox="0 -960 960 960">
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                              </svg>
                              <span className="hidden">ยกเลิก</span>
                            </button>
                          </div>
                          <ItemEdit item={itemItemList} />
                        </div>
                        <button className="modal-close" onClick={handleItemEdit}></button>
                      </dialog>
                    : null
                    }
                  </div>
                  <div className="tooltip" data-tip="ลบ">
                    <button className="btn btn-icon btn-mix-alternate-warning" onClick={() => handleItemDelete(itemItemList._id)}>
                      <svg viewBox="0 -960 960 960">
                        <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
                      </svg>
                      <span className="hidden">ลบ</span>
                    </button>
                    {itemItemList?._id === itemDeleteNavId
                    ? <dialog className="modal modal-tooltip modal-tooltip-right">
                        <div className="modal-content">
                          <p>ลบรายการนี้?</p>
                          <fieldset className="fieldset-button">
                            <button className="btn btn-2xs btn-alternate-success" onClick={handleItemDeleteCancel}>
                              <span>ยกเลิก</span>
                            </button>
                            <button className="btn btn-2xs btn-color-error" onClick={handleItemDeleteComfirm}>
                              <span>ลบ</span>
                            </button>
                          </fieldset>
                        </div>
                      </dialog>
                    : null
                    }
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <span className="badge badge-sm mx-auto">{itemList?.length} บทสวดมนต์</span>
      </section>
      <ItemContent />
    </>
  );

};

export default ItemList;