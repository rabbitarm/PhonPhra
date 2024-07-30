import React from 'react';

function ItemStatus({ userGender  , addClassNameIcon, addClassNameText }) {

  const classNameIcon = 'material-symbols-outlined' + (addClassNameIcon ? ' ' + addClassNameIcon : '');
  const classNameText = 'text' + (addClassNameText ? ' ' + addClassNameText : '');

  return (
    <>
      {(() => {
        switch (userGender) {
          case 'male'   : return <><span className={classNameIcon}>face_6</span><span className={classNameText}>ชาย</span></>;
          case 'female' : return <><span className={classNameIcon}>face_3</span><span className={classNameText}>หญิง</span></>;
          case 'other'  : return <><span className={classNameIcon}>face_retouching_off</span><span className={classNameText}>ทางเลือก</span></>;
          default       : return <><span className={classNameIcon}>error</span><span className={classNameText}>เกิดข้อผิดพลาด</span></>;
        }
      })()}
    </>
  );

};

export default ItemStatus;