import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { itemDelete } from '../store/itemListSlice';

import { IconLoading, IconItemNotFound } from './includes/StatusCode';
/*import ItemStatus from './includes/ItemStatus';
import ItemCategoryStatus from './includes/ItemCategoryStatus';*/
import Paginate from './includes/Paginate';
import ItemCreate from './ItemCreate';
import ItemEdit from './ItemEdit';
import Bookmark from './Bookmark';

function ItemList() {

  const dispatch = useDispatch();
  const { userProfile } = useSelector((state) => state.user);
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
  const [itemAddSelect, setItemAddSelect] = useState([]);
  const [itemEditSelect, setItemEditSelect] = useState([]);
  const [itemDeleteSelect, setItemDeleteSelect] = useState('');
  const [itemActionSelect, setItemActionSelect] = useState('');
  /**/
  const handleItemCreate = () => {handleItemCancel(); setItemCreateToggle(!itemCreateToggle);}
  const handleItemAdd = (item_id, item_number) => {handleItemCancel(); setItemAddSelect({ item_id: item_id, item_number: item_number });}
  const handleItemEdit = (itemItemList) => {handleItemCancel(); setItemEditSelect(itemItemList);}
  const handleItemDelete = (item_id) => {handleItemCancel(); setItemDeleteSelect(itemDeleteSelect !== item_id && item_id);}
  const handleItemDeleteComfirm = () => dispatch(itemDelete(itemDeleteSelect));
  const handleItemAction = (item_id) => {handleItemCancel(); setItemActionSelect(itemActionSelect !== item_id && item_id);}
  const handleItemActionDelete = () => dispatch(itemDelete(itemActionSelect));
  /**/
  const handleItemCancel = () => {setItemCreateToggle(false); setItemAddSelect([]); setItemEditSelect([]); setItemDeleteSelect(''); setItemActionSelect('');}

  /* Check Item edit status */
  useEffect(() => {
    {itemList?.find(item => item?.item_id === itemEditSelect?.item_id) !== itemEditSelect &&
      setItemEditSelect([]);
    }
  }, [itemList?.find(item => item?.item_id === itemEditSelect?.item_id)]);

  return (
    <section id="itemList" className="container">
      <h1>บทสวดมนต์</h1>
      {itemLoading
      ? <IconLoading />
      : <>
          {itemList?.length === 0
          ? <>
              <IconItemNotFound />
              <div className="flex justify-center">
                <button className="btn btn-alternate-primary" onClick={handleItemCreate}>
                  <span className="material-symbols-outlined">add</span>
                  <span className="text">สร้างบทสวดมนต์</span>
                </button>
                {itemCreateToggle &&
                  <dialog className="modal">
                    <div className="modal-content fullscreen">
                      <div className="tooltip tooltip-left" data-tip="ยกเลิก">
                        <button className="btn btn-icon btn-ghost" onClick={handleItemCancel}>
                          <span className="material-symbols-outlined">close</span>
                          <span className="hidden">ยกเลิก</span>
                        </button>
                      </div>
                      <ItemCreate itemNumberHighest={itemNumberHighest} />
                    </div>
                    <button className="modal-close" onClick={handleItemCancel}></button>
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
                      <div className="tooltip sm:tooltip-none sm:w-full" data-tip="สร้าง">
                        <button className="btn btn-alternate-primary w-10 sm:w-full px-0 sm:px-4" onClick={handleItemCreate}>
                          <span className="material-symbols-outlined">add</span>
                          <span className="text hidden sm:inline-block">สร้าง</span>
                        </button>
                      </div>
                      {itemCreateToggle &&
                        <dialog className="modal">
                          <div className="modal-content fullscreen">
                            <div className="tooltip tooltip-left" data-tip="ยกเลิก">
                              <button className="btn btn-icon btn-ghost" onClick={handleItemCancel}>
                                <span className="material-symbols-outlined">close</span>
                                <span className="hidden">ยกเลิก</span>
                              </button>
                            </div>
                            <ItemCreate itemNumberHighest={itemNumberHighest} />
                          </div>
                          <button className="modal-close" onClick={handleItemCancel}></button>
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
                      <td /*className={userProfile?.user_role === 'admin' ? 'relative' : ''}*/>
                        {/*userProfile?.user_role === 'admin' &&
                          <>
                            <span className="badge badge-sm badge-reverse absolute top-1 right-0">
                              <ItemStatus itemStatus={itemItemList?.item_status} addClassNameIcon={''} addClassNameText={'hidden'} />
                            </span>
                            <span className="badge badge-sm badge-reverse absolute bottom-1 right-0">
                              <ItemCategoryStatus itemCategoryStatus={itemItemList?.item_category_list} addClassNameIcon={''} addClassNameText={'hidden'} />
                            </span>
                          </>
                        */}
                        <Link to={`/บทสวดมนต์/${itemItemList?.item_number}/${itemItemList?.item_name}`}>{itemItemList?.item_name}</Link>
                      </td>
                      <td>
                        <div className={`tooltip ${userProfile?.user_role === 'admin' ? 'hidden sm:inline-block' : ''}`} data-tip="เพิ่ม">
                          <button className="btn btn-icon btn-mix" onClick={() => handleItemAdd(itemItemList?.item_id, itemItemList?.item_number)}>
                            <span className="material-symbols-outlined">bookmark_add</span>
                            <span className="text hidden">เพิ่ม</span>
                          </button>
                        </div>
                        {itemItemList?.item_id === itemAddSelect?.item_id &&
                          <dialog className="modal">
                            <div className="modal-content">
                              <div className="tooltip tooltip-left" data-tip="ยกเลิก">
                                <button className="btn btn-icon btn-ghost" onClick={handleItemCancel}>
                                  <span className="material-symbols-outlined">close</span>
                                  <span className="text hidden">ยกเลิก</span>
                                </button>
                              </div>
                              <Bookmark itemAddSelect={itemAddSelect} />
                            </div>
                            <button className="modal-close" onClick={handleItemCancel}></button>
                          </dialog>
                        }
                        {userProfile?.user_role === 'admin' &&
                          <>
                            <div className="tooltip hidden sm:inline-block" data-tip="แก้ไข">
                              <button className="btn btn-icon btn-mix" onClick={() => handleItemEdit(itemItemList)}>
                                <span className="material-symbols-outlined">edit</span>
                                <span className="text hidden">แก้ไข</span>
                              </button>
                            </div>
                            {itemItemList?.item_id === itemEditSelect?.item_id &&
                              <dialog className="modal">
                                <div className="modal-content fullscreen">
                                  <div className="tooltip tooltip-left" data-tip="ยกเลิก">
                                    <button className="btn btn-icon btn-ghost" onClick={handleItemCancel}>
                                      <span className="material-symbols-outlined">close</span>
                                      <span className="text hidden">ยกเลิก</span>
                                    </button>
                                  </div>
                                  <ItemEdit itemEditSelect={itemEditSelect} />
                                </div>
                                <button className="modal-close" onClick={handleItemCancel}></button>
                              </dialog>
                            }
                            <div className="tooltip hidden sm:inline-block" data-tip="ลบ">
                              <button className="btn btn-icon btn-mix-alternate-warning" onClick={() => handleItemDelete(itemItemList?.item_id)}>
                                <span className="material-symbols-outlined">delete_forever</span>
                                <span className="text hidden">ลบ</span>
                              </button>
                              {itemItemList?.item_id === itemDeleteSelect &&
                                <dialog className="modal modal-tooltip modal-tooltip-right">
                                  <div className="modal-content">
                                    <p>ลบรายการนี้?</p>
                                    <fieldset className="fieldset-button">
                                      <button className="btn btn-2xs" onClick={handleItemCancel}>
                                        <span className="text">ยกเลิก</span>
                                      </button>
                                      <button className="btn btn-2xs btn-color-warning" onClick={handleItemDeleteComfirm}>
                                        <span className="text">ลบ</span>
                                      </button>
                                    </fieldset>
                                  </div>
                                </dialog>
                              }
                            </div>
                            <div className="tooltip sm:hidden" data-tip="ตัวเลือก">
                              <button className="btn btn-icon btn-mix" onClick={() => handleItemAction(itemItemList?.item_id)}>
                                <span className="material-symbols-outlined">more_vert</span>
                                <span className="text hidden">ตัวเลือก</span>
                              </button>
                              {itemItemList?.item_id === itemActionSelect &&
                                <dialog className="modal modal-tooltip modal-tooltip-right">
                                  <div className="modal-content !p-0">
                                    <button className="btn btn-sm btn-ghost w-full justify-start" onClick={() => handleItemAdd(itemItemList?.item_id, itemItemList?.item_number)}>
                                      <span className="material-symbols-outlined">bookmark_add</span>
                                      <span className="text">เพิ่มไปยังรายการโปรด</span>
                                    </button>
                                    <button className="btn btn-sm btn-ghost w-full justify-start" onClick={() => handleItemEdit(itemItemList)}>
                                      <span className="material-symbols-outlined">edit</span>
                                      <span className="text">แก้ไขบทสวดมนต์</span>
                                    </button>
                                    <hr />
                                    <button className="btn btn-sm btn-ghost-alternate-warning w-full justify-start" onClick={handleItemActionDelete}>
                                      <span className="material-symbols-outlined">delete_forever</span>
                                      <span className="text">ลบบทสวดมนต์</span>
                                    </button>
                                  </div>
                                </dialog>
                              }
                            </div>
                          </>
                        }
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
  );

};

export default ItemList;