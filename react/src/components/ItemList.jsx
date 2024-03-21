import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../store/itemListSlice';

import ItemCreate from './ItemCreate';
import ItemEdit from './ItemEdit';
import Bookmark from './Bookmark';

function ItemList() {

  const dispatch = useDispatch();
  const { itemList, loading, error } = useSelector((state) => state.itemList);

  /* Item Nav */
  const [itemCreateToggle, setItemCreateToggle] = useState(false);
  const handleItemCreate = () => setItemCreateToggle((toggle) => !toggle);
  /**/
  const [itemAddNavSelect, setItemAddNavSelect] = useState([]);
  const handleItemAdd = (_id, item_number) => setItemAddNavSelect({ _id: _id, item_number: item_number });
  const handleItemAddCancel = () => setItemAddNavSelect('');
  /**/
  const [itemEditNavContent, setItemEditNavContent] = useState([]);
  const handleItemEdit = (itemItemList) => setItemEditNavContent(itemItemList);
  const handleItemEditCancel = () => setItemEditNavId('');
  const handleItemEditComfirm = () => setItemEditNavId('');
  /**/
  const [itemDeleteNavId, setItemDeleteNavId] = useState('');
  const handleItemDelete = (_id,) => setItemDeleteNavId(_id,);
  const handleItemDeleteCancel = () => setItemDeleteNavId('');
  const handleItemDeleteComfirm = () => setItemDeleteNavId('');

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
                <button className="btn btn-alternate-primary w-full" onClick={handleItemCreate}>
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
            {itemList?.map(itemItemList => (
              <tr key={itemItemList?._id}>
                <td>{itemItemList?.item_number}</td>
                <td><Link to={'/บทสวดมนต์/' + itemItemList?.item_number} onClick={() => handleItemOpen(itemItemList?.item_number)}>{itemItemList?.item_name}</Link></td>
                <td>
                  <div className="tooltip" data-tip="เพิ่ม">
                    <button className="btn btn-icon btn-mix-alternate" onClick={() => handleItemAdd(itemItemList?._id, itemItemList?.item_number)}>
                      <svg viewBox="0 -960 960 960">
                        <path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
                      </svg>
                      <span className="hidden">เพิ่ม</span>
                    </button>
                    {itemItemList?._id === itemAddNavSelect?._id
                    ? <dialog className="modal">
                        <div className="modal-content">
                          <div className="tooltip tooltip-left" data-tip="ยกเลิก">
                            <button className="btn btn-icon btn-ghost" onClick={handleItemAddCancel}>
                              <svg viewBox="0 -960 960 960">
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                              </svg>
                              <span className="hidden">ยกเลิก</span>
                            </button>
                          </div>
                          <Bookmark itemAddNavSelect={itemAddNavSelect} />
                        </div>
                        <button className="modal-close" onClick={handleItemAddCancel}></button>
                      </dialog>
                    : null
                    }
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
                          <ItemEdit data={itemEditNavContent} />
                        </div>
                        <button className="modal-close" onClick={handleItemEdit}></button>
                      </dialog>
                    : null
                    }
                  </div>
                  <div className="tooltip" data-tip="ลบ">
                    <button className="btn btn-icon btn-mix-alternate-warning" onClick={() => handleItemDelete(itemItemList?._id)}>
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
      <Bookmark itemList={itemList} />
    </>
  );

};

export default ItemList;