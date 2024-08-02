import React from 'react';

function FormatDate({ itemDateCreated, addClassNameIcon, addClassNameText }) {

  const dateCreated = new Date(itemDateCreated);
  const dateThai = dateCreated.toLocaleDateString('th-TH', {year: 'numeric', month: 'long', day: '2-digit'});
  const monthThaiNames = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
  const thaiDateWithThaiMonth = dateThai.replace(
    /\b(\w+) (\d{1,2}) (\d{4})\b/,
    (_, month, day, year) => `${parseInt(day, 10)} ${monthThaiNames[parseInt(month, 10) - 1]} ${parseInt(year, 10) + 543}`
  );

  const classNameIcon = `material-symbols-outlined ${addClassNameIcon}`;
  const classNameText = `text' ${addClassNameText}`;

  return (
    <>
      {itemDateCreated
        ? <>
            <span className={classNameIcon}>schedule</span>
            <span className={classNameText}>{thaiDateWithThaiMonth}</span>
          </>
        : <>
            <span className={classNameIcon}>timer_off</span>
            <span className={classNameText}>เกิดข้อผิดพลาด</span>
          </>
      }
    </>
  );
};

export default FormatDate;