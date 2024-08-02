import React from 'react';
import { useSelector } from 'react-redux';

function StatusItemCategory({ statusItemCategory, addClassNameIcon, addClassNameText }) {

  const classNameIcon = `material-symbols-outlined ${addClassNameIcon}`;
  const classNameText = `text ${addClassNameText}`;

  const { itemCategoryList } = useSelector((state) => state.itemCategory);

  return (
    <><span className={classNameIcon}>category</span>
      {itemCategoryList?.filter(listItem => statusItemCategory?.some(statusItem => listItem?.item_category_id === statusItem?.item_category_id)).length > 0
      ? <>
          {statusItemCategory.map(statusItemCategory => (
            <span className={classNameText} key={statusItemCategory?.item_category_id}>
              {itemCategoryList?.find(item => item?.item_category_id === statusItemCategory?.item_category_id)
              ? <>{itemCategoryList?.find(item => item?.item_category_id === statusItemCategory?.item_category_id)?.item_category_title}</>
              : <>ไม่พบหมวดหมู่</>
              }
            </span>
          ))}
        </>
      : <span className={classNameText}>ไม่พบหมวดหมู่</span>
      }
    </>
  );

};

export default StatusItemCategory;