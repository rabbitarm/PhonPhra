import React from 'react';
import { useSelector } from 'react-redux';

function ItemCategoryStatus({ itemCategoryStatus, addClassNameIcon, addClassNameText }) {

  const { itemCategoryList } = useSelector((state) => state.itemCategory);

  const classNameIcon = `material-symbols-outlined ${addClassNameIcon}`;
  const classNameText = `text ${addClassNameText}`;

  return (
    <><span className={classNameIcon}>category</span>
      {itemCategoryList?.filter(listItem => itemCategoryStatus?.some(statusItem => listItem?.item_category_id === statusItem?.item_category_id)).length > 0
      ? <>
          {itemCategoryStatus.map(itemCategoryStatus => (
            <span className={classNameText} key={itemCategoryStatus?.item_category_id}>
              {itemCategoryList?.find(item => item?.item_category_id === itemCategoryStatus?.item_category_id)
              ? <>{itemCategoryList?.find(item => item?.item_category_id === itemCategoryStatus?.item_category_id)?.item_category_title}</>
              : <span className="hidden">ไม่พบหมวดหมู่</span>
              }
            </span>
          ))}
        </>
      : <span className={classNameText + ' text-error'}>ไม่พบหมวดหมู่</span>
      }
    </>
  );

};

export default ItemCategoryStatus;