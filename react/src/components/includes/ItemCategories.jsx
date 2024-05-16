import React from 'react';

function ItemCategories({ itemCategories, addClassNameIcon, addClassNameText }) {

  const classNameIcon = 'material-symbols-outlined' + (addClassNameIcon ? ' ' + addClassNameIcon : '');
  const classNameText = 'text' + (addClassNameText ? ' ' + addClassNameText : '');

  return (
    <>
      {itemCategories
        ? <>
            <span className={classNameIcon}>category</span>
            <span className={classNameText}>{itemCategories}</span>
          </>
        : <>
            <span className={classNameIcon}>category</span>
            <span className={classNameText}>เกิดข้อผิดพลาด</span>
          </>
      }
    </>
  );

};

export default ItemCategories;