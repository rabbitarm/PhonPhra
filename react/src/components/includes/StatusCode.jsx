import React from 'react';

/* https://umbraco.com/knowledge-base/http-status-codes/ */

export function IconLoading() {
  return (
    <div className="status-code">
      <span className="material-symbols-outlined">hourglass_top</span>
      <div>
        <h6>102</h6>
        <h3>กำลังดาวน์โหลด</h3>
      </div>
    </div>
  );
}

/* Item */
export function IconItemNotFound() {
  return (
    <div className="status-code">
      <span className="material-symbols-outlined">search_off</span>
      <div>
        <h6>404</h6>
        <h3>ไม่พบบทสวดมนต์</h3>
      </div>
    </div>
  );
}

/* Bookamrk */
export function IconBookmarkNotFound() {
  return (
    <div className="status-code">
      <span className="material-symbols-outlined">bookmark</span>
      <div>
        <h6>404</h6>
        <h3>ไม่พบรายการโปรด</h3>
      </div>
    </div>
  );
}

function StatusCode() {

  return (
    <>
      <section className="container">
        <IconLoading />
        <IconItemNotFound />
        <IconBookmarkNotFound />
      </section>
    </>
  )

};

export default StatusCode;