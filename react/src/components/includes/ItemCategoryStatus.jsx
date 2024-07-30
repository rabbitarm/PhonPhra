import React from 'react';
import { useSelector } from 'react-redux';

function ItemCategoryStatus({ itemCategoryStatus, addClassNameIcon, addClassNameText }) {

  const { itemCategoryList } = useSelector((state) => state.itemCategory);

  return (
    <><span className={`material-symbols-outlined ${addClassNameIcon}`}>category</span>
      {itemCategoryList?.filter(listItem => itemCategoryStatus?.some(statusItem => listItem?.item_category_id === statusItem?.item_category_id)).length > 0
      ? <>
          {itemCategoryStatus.map(itemCategoryStatus => (
            <span className={`text ${addClassNameText}`} key={itemCategoryStatus?.item_category_id}>
              {itemCategoryList?.find(item => item?.item_category_id === itemCategoryStatus?.item_category_id)
              ? <>{itemCategoryList?.find(item => item?.item_category_id === itemCategoryStatus?.item_category_id)?.item_category_title}</>
              : <>ไม่พบหมวดหมู่</>
              }
            </span>
          ))}
        </>
      : <span className={`text ${addClassNameText}`}>ไม่พบหมวดหมู่</span>
      }
    </>
  );

};

export default ItemCategoryStatus;