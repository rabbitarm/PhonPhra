import React from 'react';

function StatusUserGender({ statusUserGender  , addClassNameIcon, addClassNameText }) {

  const classNameIcon = `material-symbols-outlined ${addClassNameIcon}`;
  const classNameText = `text ${addClassNameText}`;

  return (
    <>
      {(() => {
        switch (statusUserGender) {
          case 'male'   : return <><span className={classNameIcon}>face_6</span><span className={classNameText}>ชาย</span></>;
          case 'female' : return <><span className={classNameIcon}>face_3</span><span className={classNameText}>หญิง</span></>;
          case 'other'  : return <><span className={classNameIcon}>face_retouching_off</span><span className={classNameText}>ทางเลือก</span></>;
          default       : return <><span className={classNameIcon}>error</span><span className={classNameText}>เกิดข้อผิดพลาด</span></>;
        }
      })()}
    </>
  );

};

export default StatusUserGender;