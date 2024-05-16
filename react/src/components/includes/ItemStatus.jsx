import React from 'react';

function ItemStatus({ itemStatus, addClassNameIcon, addClassNameText }) {

  const classNameIcon = 'material-symbols-outlined' + (addClassNameIcon ? ' ' + addClassNameIcon : '');
  const classNameText = 'text' + (addClassNameText ? ' ' + addClassNameText : '');

  return (
    <>
      {(() => {
        switch (itemStatus) {
          case 'pending' : return <><span className={classNameIcon}>update</span><span className={classNameText}>รอดำเนินการ</span></>;
          case 'public'  : return <><span className={classNameIcon}>public</span><span className={classNameText}>เผยแพร่</span></>;
          case 'private' : return <><span className={classNameIcon}>lock</span><span className={classNameText}>ส่วนตัว</span></>;
          case 'delete'  : return <><span className={classNameIcon}>remove_selection</span><span className={classNameText}>ไม่พบรายการ</span></>;
          default        : return <><span className={classNameIcon}>error</span><span className={classNameText}>เกิดข้อผิดพลาด</span></>;
        }
      })()}
    </>
  );

};

export default ItemStatus;