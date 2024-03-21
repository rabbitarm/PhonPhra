import React from 'react';

function NotFound() {
  return (
    <section id="notFound" className="container sm:flex-row justify-center items-center text-center">
      <svg className="size-40 sm:size-60 fill-slate-100 -m-4 sm:-m-6" viewBox="0 -960 960 960">
        <path d="M852-68 708-212H192q-25 0-42.5-17.5T132-272v-416q0-25 17.5-42.5T192-748h20v40L90-830l20-20L872-88l-20 20ZM192-240h488L280-640H160v368q0 14 9 23t23 9Zm631-9-23-23v-368H432L324-748h444q25 0 42.5 17.5T828-688v416q0 6-1.5 12t-3.5 11Z" />
      </svg>
      <div>
        <h6 className="text-7xl sm:text-9xl !leading-[0.75] text-slate-100">404</h6>
        <h3 className="text-2xl sm:text-5xl !leading-[1.5] text-slate-300">ไม่พบหน้านี้</h3>
      </div>
    </section>
  );
};

export default NotFound;