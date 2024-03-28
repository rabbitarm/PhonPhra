import React from 'react';

/* https://umbraco.com/knowledge-base/http-status-codes/ */

export function IconLoading() {
  return (
    <div className="icon-loading icon-status">
      <svg className="size-20 fill-slate-300 -my-8" viewBox="0 0 200 200">
        <circle r="20" cx="40" cy="100">
          <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
        </circle>
        <circle r="20" cx="100" cy="100">
          <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
        </circle>
        <circle r="20" cx="160" cy="100">
          <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
        </circle>
      </svg>
      <div>
        <h6 className="text-7xl sm:text-8xl !leading-[0.75] text-slate-100">102</h6>
        <h3 className="text-2xl sm:text-4xl !leading-[1.5] text-slate-300">กำลังดาวน์โหลด</h3>
      </div>
    </div>
  );
}

/* Item */
export function IconItemNotFound() {
  return (
    <div className="icon-notfound icon-status">
      <svg className="size-40 fill-slate-100 -my-6" viewBox="0 -960 960 960">
        <path d="M280-152q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm536-12L566-414q-14 12-33.5 23T496-374q-2-7-4.5-13.5T486-399q54-20 90-67.5T612-580q0-80-56-136t-136-56q-80 0-136 56t-56 136q0 14 2.5 28.5T236-524q-6 0-13.5 2.5L209-517q-4-13-6.5-29.5T200-580q0-92 64-156t156-64q92 0 156 64t64 156q0 43-15.5 81T586-434l250 250-20 20Zm-606-46 70-70 70 70 20-20-70-70 70-70-20-20-70 70-70-70-20 20 70 70-70 70 20 20Z" />
      </svg>
      <div>
        <h6 className="text-7xl sm:text-8xl !leading-[0.75] text-slate-100">404</h6>
        <h3 className="text-2xl sm:text-4xl !leading-[1.5] text-slate-300">ไม่พบบทสวดมนต์</h3>
      </div>
    </div>
  );
}

/* Bookamrk */
export function IconBookmarkNotFound() {
  return (
    <div className="icon-notfound icon-status">
      <svg className="size-40 fill-slate-100 -my-6" viewBox="0 -960 960 960">
        <path d="M252-198v-530q0-26 17-43t43-17h336q26 0 43 17t17 43v530l-228-98-228 98Zm28-44 200-86 200 86v-486q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v486Zm0-518h400-400Z" />
      </svg>
      <div>
        <h6 className="text-7xl sm:text-8xl !leading-[0.75] text-slate-100">404</h6>
        <h3 className="text-2xl sm:text-4xl !leading-[1.5] text-slate-300">ไม่พบรายการโปรด</h3>
      </div>
    </div>
  );
}

function Status() {

  return (
    <section className="container">
      <IconLoading />
      <IconItemNotFound />
      <IconBookmarkNotFound />
    </section>
  )

};

export default Status;