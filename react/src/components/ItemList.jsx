import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { itemDelete } from '../store/itemListSlice';

import { IconLoading, IconItemNotFound } from './includes/StatusCode';
import ItemCategoryStatus from './includes/ItemCategoryStatus';
import Paginate from './includes/Paginate';
import ItemCreate from './ItemCreate';
import ItemEdit from './ItemEdit';
import Bookmark from './Bookmark';

function ItemList() {

  const dispatch = useDispatch();
  const { itemList, itemLoading, pageCurrent, pagePerItem } = useSelector((state) => state.itemList);

  /* Check item index of item list */
  const indexOfLastItem = pageCurrent * pagePerItem;
  const indexOfFirstItem = indexOfLastItem - pagePerItem;
  const itemListCurrent = itemList.slice(indexOfFirstItem, indexOfLastItem);

  /* Check highest item number */
  const itemNumberHighest = itemList.reduce((max, item) => {
    return item.item_number > max ? item.item_number : max;
  }, 0);

  /* Item Action */
  const [itemCreateToggle, setItemCreateToggle] = useState(false);
  const [itemAddNavSelect, setItemAddNavSelect] = useState([]);
  const [itemEditNavContent, setItemEditNavContent] = useState([]);
  const [itemDeleteNavId, setItemDeleteNavId] = useState('');
  /**/
  const itemNavInactive = () => {setItemCreateToggle(false); setItemAddNavSelect([]); setItemEditNavContent([]); setItemDeleteNavId('');}
  /**/
  const handleItemCreate = () => {itemNavInactive(); setItemCreateToggle(!itemCreateToggle);}
  const handleItemCreateCancel = () => setItemCreateToggle(false);
  /**/
  const handleItemAdd = (item_id, item_number) => {itemNavInactive(); setItemAddNavSelect({ item_id: item_id, item_number: item_number });}
  const handleItemAddCancel = () => {itemNavInactive(); setItemAddNavSelect([]);}
  /**/
  const handleItemEdit = (itemItemList) => {itemNavInactive(); setItemEditNavContent(itemItemList);}
  const handleItemEditCancel = () => setItemEditNavContent([]);
  /**/
  const handleItemDelete = (item_id) => {itemNavInactive(); setItemDeleteNavId(item_id);}
  const handleItemDeleteCancel = () => setItemDeleteNavId('');
  const handleItemDeleteComfirm = () => dispatch(itemDelete(itemDeleteNavId));

  /* Check Item edit status */
  useEffect(() => {
    {itemList?.find(item => item?.item_id === itemEditNavContent?.item_id) !== itemEditNavContent &&
      setItemEditNavContent([]);
    }
  }, [itemList?.find(item => item?.item_id === itemEditNavContent?.item_id)]);

  return (
    <>
      <section id="itemList" className="container">
        <h3>บทสวดมนต์</h3>
        {itemLoading
        ? <IconLoading />
        : <>
            {itemList?.length === 0
            ? <>
                <IconItemNotFound />
                <div className="flex justify-center">
                  <button className="btn btn-alternate-primary" onClick={handleItemCreate}>
                    <span className="material-symbols-outlined">add</span>
                    <span>สร้างบทสวดมนต์</span>
                  </button>
                  {itemCreateToggle &&
                    <dialog className="modal">
                      <div className="modal-content">
                        <div className="tooltip tooltip-left" data-tip="ยกเลิก">
                          <button className="btn btn-icon btn-ghost" onClick={handleItemCreateCancel}>
                            <span className="material-symbols-outlined">close</span>
                            <span className="hidden">ยกเลิก</span>
                          </button>
                        </div>
                        <ItemCreate itemNumberHighest={itemNumberHighest} />
                      </div>
                      <button className="modal-close" onClick={handleItemCreateCancel}></button>
                    </dialog>
                  }
                </div>
              </>
            : <>
                <table className="table-action">
                  <thead>
                    <tr>
                      <th>เลขที่</th>
                      <th>ชื่อบทสวดมนต์</th>
                      <th>
                        <button className="btn btn-alternate-primary w-full" onClick={handleItemCreate}>
                          <span className="material-symbols-outlined">add</span>
                          <span>สร้าง</span>
                        </button>
                        {itemCreateToggle &&
                          <dialog className="modal">
                            <div className="modal-content">
                              <div className="tooltip tooltip-left" data-tip="ยกเลิก">
                                <button className="btn btn-icon btn-ghost" onClick={handleItemCreateCancel}>
                                  <span className="material-symbols-outlined">close</span>
                                  <span className="hidden">ยกเลิก</span>
                                </button>
                              </div>
                              <ItemCreate itemNumberHighest={itemNumberHighest} />
                            </div>
                            <button className="modal-close" onClick={handleItemCreateCancel}></button>
                          </dialog>
                        }
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemListCurrent?.map(itemItemList => (
                      <tr key={itemItemList?.item_id}>
                        <td>
                          {itemItemList?.item_number}
                        </td>
                        <td className="relative">
                          <span className="badge badge-reverse absolute right-0">
                            <ItemCategoryStatus itemCategoryStatus={itemItemList?.item_category_list} addClassNameIcon={'hidden'} addClassNameText={''} />
                          </span>
                          <Link to={`/บทสวดมนต์/${itemItemList?.item_number}/${itemItemList?.item_name}`}>{itemItemList?.item_name}</Link>
                        </td>
                        <td>
                          <div className="tooltip" data-tip="เพิ่ม">
                            <button className="btn btn-icon btn-mix" onClick={() => handleItemAdd(itemItemList?.item_id, itemItemList?.item_number)}>
                              <span className="material-symbols-outlined">bookmark_add</span>
                              <span className="hidden">เพิ่ม</span>
                            </button>
                            {itemItemList?.item_id === itemAddNavSelect?.item_id &&
                              <dialog className="modal">
                                <div className="modal-content">
                                  <div className="tooltip tooltip-left" data-tip="ยกเลิก">
                                    <button className="btn btn-icon btn-ghost" onClick={handleItemAddCancel}>
                                      <span className="material-symbols-outlined">close</span>
                                      <span className="hidden">ยกเลิก</span>
                                    </button>
                                  </div>
                                  <Bookmark itemAddNavSelect={itemAddNavSelect} />
                                </div>
                                <button className="modal-close" onClick={handleItemAddCancel}></button>
                              </dialog>
                            }
                          </div>
                          <div className="tooltip" data-tip="แก้ไข">
                            <button className="btn btn-icon btn-mix" onClick={() => handleItemEdit(itemItemList)}>
                              <span className="material-symbols-outlined">edit</span>
                              <span className="hidden">แก้ไข</span>
                            </button>
                            {itemItemList?.item_id === itemEditNavContent?.item_id &&
                              <dialog className="modal">
                                <div className="modal-content">
                                  <div className="tooltip tooltip-left" data-tip="ยกเลิก">
                                    <button className="btn btn-icon btn-ghost" onClick={handleItemEditCancel}>
                                      <span className="material-symbols-outlined">close</span>
                                      <span className="hidden">ยกเลิก</span>
                                    </button>
                                  </div>
                                  <ItemEdit itemEditNavContent={itemEditNavContent} />
                                </div>
                                <button className="modal-close" onClick={handleItemEditCancel}></button>
                              </dialog>
                            }
                          </div>
                          <div className="tooltip" data-tip="ลบ">
                            <button className="btn btn-icon btn-mix-alternate-warning" onClick={() => handleItemDelete(itemItemList?.item_id)}>
                              <span className="material-symbols-outlined">delete_forever</span>
                              <span className="hidden">ลบ</span>
                            </button>
                            {itemItemList?.item_id === itemDeleteNavId &&
                              <dialog className="modal modal-tooltip modal-tooltip-right">
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
                            }
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <span className="badge badge-sm mx-auto">{itemList?.length} บทสวดมนต์</span>
                <Paginate />
              </>
            }
          </>
        }
      </section>
    </>
  );

};

export default ItemList;