import React from 'react';

function TimeFormat({ itemTimeCreated }) {

  const dateCreated = new Date(itemTimeCreated);
  const dateThai = dateCreated.toLocaleDateString('th-TH', {year: 'numeric', month: 'long', day: '2-digit'});
  const monthThaiNames = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
  const thaiDateWithThaiMonth = dateThai.replace(
    /\b(\w+) (\d{1,2}) (\d{4})\b/,
    (_, month, day, year) => `${parseInt(day, 10)} ${monthThaiNames[parseInt(month, 10) - 1]} ${parseInt(year, 10) + 543}`
  );

  return (
    <>
      {thaiDateWithThaiMonth}
    </>
  );
};

export default TimeFormat;