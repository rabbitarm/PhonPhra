import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { itemCategoryDelete } from '../store/itemCategorySlice';

import { IconLoading, IconItemCategoryNotFound } from '../utilities/StatusCode';
import ItemCategoryForm from '../components/includes/ItemCategoryForm';

function ItemCategory({ itemCategorySelect, itemCategoryChange }) {

  /* Item Category - List */
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemList , itemLoading } = useSelector((state) => state.itemList);
  const { itemCategoryList, itemCategoryLoading } = useSelector((state) => state.itemCategory);

  /* Check highest item category number */
  const itemCategoryNumberHighest = itemCategoryList.reduce((max, itemCategory) => {
    return itemCategory.item_category_number > max ? itemCategory.item_category_number : max;
  }, 0);

  /* Item Category - Edit */
  const [itemCategoryEditSelect, setItemCategoryEditSelect] = useState([]);
  const handleItemCategoryEdit = (itemCategoryList) => setItemCategoryEditSelect(itemCategoryList);
  /* Item Category - Delete */
  const handleItemCategoryDelete = (item_category_id) => {
    dispatch(itemCategoryDelete(item_category_id));
  };

  /* Item Category - Change on Item */
  const itemCategorySelectValue = itemCategorySelect ? itemCategoryList?.find(item => item?.item_category_id === itemCategorySelect?.find(item => item?.item_category_id)?.item_category_id)?.item_category_title : 'ไม่พบหมวดหมู่';
  const handleItemCategoryChange = (event) => {
    itemCategoryChange([{ item_category_id: itemCategoryList[event - 1]?.item_category_id, item_category_number: itemCategoryList[event - 1]?.item_category_number }]);
  }

  return (
    <section id="itemCategory" className="container">
      {itemCategorySelect !== undefined
      ? <section id="itemCategorySelectOption" className="flex justify-between items-end gap-2">
          <fieldset className="fieldset-border pt-0">
            <div className="field">
              <label className="label-border">หมวดหมู่</label>
              <select defaultValue={itemCategorySelectValue} onChange={(event) => handleItemCategoryChange(event.target.selectedIndex)}>
                <option value="ไม่พบหมวดหมู่">เลือกหมวดหมู่</option>
                {itemCategoryList.map(itemItemCategory => (
                  <option key={itemItemCategory?.item_category_id} value={itemItemCategory?.item_category_title}>{itemItemCategory?.item_category_title}</option>
                ))}
              </select>
            </div>
          </fieldset>
          <div className="tooltip" data-tip="จัดการหมวดหมู่">
            <button className="btn btn-icon" onClick={() => navigate(`/หมวดหมู่`)}>
              <span className="material-symbols-outlined">settings</span>
              <span className="hidden">จัดการหมวดหมู่</span>
            </button>
          </div>
        </section>
      : <>
          <h1>หมวดหมู่</h1>
          {itemCategoryLoading
          ? <IconLoading />
          : <>
              {itemCategoryList?.length === 0
              ? <IconItemCategoryNotFound />
              : <section id="itemCategoryList" className="flex flex-1 flex-col gap">
                  <table className="table-action">
                    <thead>
                      <tr>
                        <th>จำนวน</th>
                        <th>ชื่อหมวดหมู่</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {itemCategoryList?.map(itemItemCategory => (
                        <tr key={itemItemCategory?.item_category_id}>
                          <td>
                            {!itemLoading && itemList !== 0 &&
                              itemList?.filter(item => item?.item_category_list?.find(category => category?.item_category_id === itemItemCategory?.item_category_id))?.length
                            }
                          </td>
                          {itemItemCategory?.item_category_time_updated === itemCategoryEditSelect?.item_category_time_updated                      
                          ? <>
                              <td colSpan="2"><ItemCategoryForm itemCategoryEditSelect={itemCategoryEditSelect} /></td>
                            </>
                          : <>
                              <td>{itemItemCategory?.item_category_title}</td>
                              <td>
                                <div className="tooltip" data-tip="แก้ไข">
                                  <button className="btn btn-icon btn-mix" onClick={() => handleItemCategoryEdit(itemItemCategory)}>
                                    <span className="material-symbols-outlined">edit</span>
                                    <span className="hidden">แก้ไข</span>
                                  </button>
                                </div>
                                <div className="tooltip" data-tip="ลบ">
                                  <button className="btn btn-icon btn-mix-alternate-warning" onClick={() => handleItemCategoryDelete(itemItemCategory?.item_category_id)}>
                                    <span className="material-symbols-outlined">delete_forever</span>
                                    <span className="hidden">ลบ</span>
                                  </button>
                                </div>
                              </td>
                            </>
                          }
                        </tr>
                      ))}
                      <tr>
                        <td>
                          {!itemLoading && itemList !== 0 &&
                            itemList?.filter(item => !item?.item_category_list?.some(category => category?.item_category_id !== itemCategoryList?.item_category_id))?.length
                          }
                        </td>
                        <td>ไม่พบหมวดหมู่</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <span className="badge badge-sm mx-auto">{itemCategoryList?.length} หมวดหมู่</span>
                </section>
              }
            </>
          }
          <hr />
          <section id="itemCategoryCreate">
            <ItemCategoryForm itemCategoryNumberHighest={itemCategoryNumberHighest} />
          </section>
        </>
      }
    </section>
  );

};

export default ItemCategory;