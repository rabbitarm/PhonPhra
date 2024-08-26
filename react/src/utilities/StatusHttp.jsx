import React from 'react';

function StatusHttp({ statusHttp, addClassNameIcon, addClassNameText }) {

  const classNameIcon = `icon material-symbols-outlined ${addClassNameIcon}`;
  const classNameText = `text ${addClassNameText}`;

  return (
    <>
      {(() => {
        switch (statusHttp) {
          case 'loading'          : return <><span className={`${classNameIcon} animate-[spin_3s_linear_infinite]`}>progress_activity</span><span className={classNameText}>กำลังดาวน์โหลด</span></>;
          case 'item-404'         : return <><span className={classNameIcon}>search_off</span><span className={classNameText}>ไม่พบบทสวดมนต์</span></>;
          case 'itemcategory-404' : return <><span className={classNameIcon}>category</span><span className={classNameText}>ไม่พบหมวดหมู่</span></>;
          case 'bookmark-404'     : return <><span className={classNameIcon}>bookmark</span><span className={classNameText}>ไม่พบรายการโปรด</span></>;
          case 'page-404'         : return <><span className={classNameIcon}>web_asset_off</span><span className={classNameText}>ไม่พบหน้านี้</span></>;
          default                 : return <><span className={classNameIcon}>error</span><span className={classNameText}>เกิดข้อผิดพลาด</span></>;
        }
      })()}
    </>
  );

};

export default StatusHttp;