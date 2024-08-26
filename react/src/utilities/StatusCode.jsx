import React from 'react';

/* https://umbraco.com/knowledge-base/http-status-codes/ */

export function IconLoading() {
  return (
    <div className="status-code">
      <span className="material-symbols-outlined animate-[spin_3s_linear_infinite]">progress_activity</span>
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
export function IconItemCategoryNotFound() {
  return (
    <div className="status-code">
      <span className="material-symbols-outlined">category</span>
      <div>
        <h6>404</h6>
        <h3>ไม่พบหมวดหมู่</h3>
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

/* Page */
export function IconPageNotFound() {
  return (
    <div className="status-code">
      <span className="material-symbols-outlined">web_asset_off</span>
      <div>
        <h6>404</h6>
        <h3>ไม่พบหน้านี้</h3>
      </div>
    </div>
  );
}

export function IconError() {
  return (
    <div className="status-code">
      <span className="material-symbols-outlined">error</span>
      <div>
        <h6>404</h6>
        <h3>เกิดข้อผิดพลาด</h3>
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
        <IconItemCategoryNotFound />
        <IconBookmarkNotFound />
        <IconPageNotFound />
        <IconError />
      </section>
    </>
  )

};

export default StatusCode;