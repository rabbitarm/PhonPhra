import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { itemCategoryCreate, itemCategoryEdit } from '../store/itemCategorySlice';
import { nanoid } from 'nanoid';

function ItemCategoryForm({ itemCategoryNumberHighest, itemCategoryEditSelect }) {

  const dispatch = useDispatch();

  /* Item Category - Create & Edit */
  const [itemCategoryFormContent, setItemCategoryFormContent] = useState(itemCategoryEditSelect ? itemCategoryEditSelect : {'item_category_title': ''});
  const itemCategoryFormChange = (event) => setItemCategoryFormContent({ ...itemCategoryFormContent, [event.target.name]: event.target.value });
  const handleItemCategoryFormSubmit = (event) => {
    event.preventDefault();
    {itemCategoryEditSelect
    ? dispatch(itemCategoryEdit(itemCategoryFormContent))
    : (
        dispatch(itemCategoryCreate({
          item_category_id: nanoid(),
          item_category_number: itemCategoryNumberHighest + 1,
          item_category_title: itemCategoryFormContent?.item_category_title,
        })),
        setItemCategoryFormContent({'item_category_title': ''})
      )
    };
  };

  return (
    <form className="form-inner" onSubmit={handleItemCategoryFormSubmit}>
      <fieldset className={itemCategoryEditSelect ? '' : 'fieldset-border'}>
        <div className="field">
          {itemCategoryEditSelect
          ? <label className="label-border hidden">แก้ไขหมวดหมู่</label>
          : <label className="label-border">สร้างหมวดหมู่</label>
          }
          <input type="text" name="item_category_title" value={itemCategoryFormContent?.item_category_title} onChange={itemCategoryFormChange} placeholder="บทสวดมนต์" />
        </div>
      </fieldset>
      <fieldset className="fieldset-button-field-end">
        <button className={`btn ${itemCategoryEditSelect ? 'btn-icon' : ''} btn-ghost-alternate-primary`} type="submit">
          {itemCategoryEditSelect
          ? <>
              <span className="material-symbols-outlined">done</span>
              <span className="text hidden">ยืนยันการแก้ไข</span>
            </>
          : <>
              <span className="material-symbols-outlined">add</span>
              <span className="text">สร้าง</span>
            </>
          }
        </button>
      </fieldset>
    </form>
  );

};

export default ItemCategoryForm;