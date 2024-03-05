import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemContent({ data }) {

  const [itemContent, setItemContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /* Content number nav */
  const contentNumberInitial = parseInt(data ? data : 1);
  const [contentNumber, setContentNumber] = useState(contentNumberInitial);
  console.log('data', data, 'contentNumberInitial', contentNumberInitial, 'contentNumber', contentNumber);
  const contentNumberLast = 999;
  const [contentNumberJump, setContentNumberJump] = useState('');
  const handleContentNumberPrev = () => setContentNumber(contentNumber > 1 ? contentNumber - 1 : contentNumber);
  const handleContentNumberPext = () => setContentNumber(contentNumber <= contentNumberLast ? contentNumber + 1 : contentNumber);
  const handleContentNumberChange = (event) => setContentNumberJump(parseInt(event.target.value) || 0);
  const handleContentNumberSubmit = (event) => {
    event.preventDefault();
    setContentNumber(contentNumberJump);
  };

  /* Customize */
  const [contentCustomize, setContentCustomize] = useState(false);
  const handleContentCustomize = () => setContentCustomize(!contentCustomize);
  /* Font Size */
  const fontSizeName = ['text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl'];
  const [fontSize, setFontSize] = useState(0);
  const handleFontSizeIncrease = () => setFontSize(fontSize < fontSizeName?.length - 1 ? fontSize + 1 : fontSize);
  const handleFontSizeDecrease = () => setFontSize(fontSize > 0 ? fontSize - 1 : fontSize);
  /* Count */
  const countInitial = 0
  const countMaximum = 999
  const [countNumber, setCountNumber] = useState(countInitial);
  const handleCountIncrease = () => setCountNumber(countNumber < countMaximum ? countNumber + 1 : countNumber);
  const handleCountReset = () => setCountNumber(countInitial);

  useEffect(() => {
    const abortController = new AbortController();
    const itemContentGet = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3001/item/no/${contentNumber}`, {
          crossdomain: true,
          signal: abortController.signal
        });
        setItemContent(response.data);
        setError('');
      } catch (error) {
        setError('Error getting contetn: ' + error.message);
      } finally {
        setLoading(false);
      }
    };
    itemContentGet();
    return () => abortController.abort();
  }, [contentNumber, data]);

  return (
    <article id="itemContent" className="container">
      <main key={itemContent?._id} className="flex flex-col gap">
        <div className="flex justify-between items-start gap">
          <section>
            <span className="badge badge-lg badge-color-info">เลขที่: {itemContent?.item_number}</span>
            <h1 className="text-2xl">{itemContent?.item_name}</h1>
          </section>
          <div className="tooltip" data-tip="ปรับแต่ง">
            <button className={'btn btn-icon' + (contentCustomize ? ' btn-color-info' : '')} onClick={handleContentCustomize}>
              <svg viewBox="0 -960 960 960">
                <path d="M710-150q-63 0-106.5-43.5T560-300q0-63 43.5-106.5T710-450q63 0 106.5 43.5T860-300q0 63-43.5 106.5T710-150Zm0-80q29 0 49.5-20.5T780-300q0-29-20.5-49.5T710-370q-29 0-49.5 20.5T640-300q0 29 20.5 49.5T710-230Zm-550-30v-80h320v80H160Zm90-250q-63 0-106.5-43.5T100-660q0-63 43.5-106.5T250-810q63 0 106.5 43.5T400-660q0 63-43.5 106.5T250-510Zm0-80q29 0 49.5-20.5T320-660q0-29-20.5-49.5T250-730q-29 0-49.5 20.5T180-660q0 29 20.5 49.5T250-590Zm230-30v-80h320v80H480Zm230 320ZM250-660Z" />
              </svg>
              <span className="hidden">ปรับแต่ง</span>
            </button>
            {contentCustomize
            ? <section className="absolute top-full right-0 translate-y-2 flex flex-wrap justify-between items-center gap-2">
                <section id="itemContentFontSize" className="flex justify-between items-center frame w-full sm:min-w-60 gap-2 p-2 border border-info rounded-xl">
                  <button className="btn btn-icon btn-alternate-info" disabled={fontSize === fontSizeName.length - 1 ? 'disabled' : ''} onClick={handleFontSizeIncrease}>
                    <svg viewBox="0 -960 960 960">
                      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                    <span className="hidden">เพิ่มขนาด</span>
                  </button>
                  <span className="flex justify-between items-center gap-1 text-info fill-info">
                    <svg viewBox="0 -960 960 960">
                      <path d="M560-160v-520H360v-120h520v120H680v520H560Zm-360 0v-320H80v-120h360v120H320v320H200Z" />
                    </svg>
                    <span className="flex justify-center items-center gap-1">ขนาดอักษร:
                      <span className="block w-4 text-2xl leading-none text-center">{fontSize + 1}</span>
                    </span>
                  </span>
                  <button className="btn btn-icon btn-alternate-info" disabled={fontSize === 0 ? 'disabled' : ''} onClick={handleFontSizeDecrease}>
                    <svg viewBox="0 -960 960 960">
                      <path d="M200-440v-80h560v80H200Z" />
                    </svg>
                    <span className="hidden">ลดขนาด</span>
                  </button>
                </section>
                <section id="itemContentCount" className="flex justify-between items-center frame w-full sm:min-w-60 gap-2 p-2 border border-info rounded-xl">
                  <button className="btn btn-icon btn-alternate-info" disabled={countNumber === countInitial ? 'disabled' : ''} onClick={handleCountReset}>
                    <svg viewBox="0 -960 960 960">
                      <path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z" />
                    </svg>
                    <span className="hidden">เริ่มใหม่</span>
                  </button>
                  <span className="block w-16 text-4xl leading-none text-center text-info">{countNumber}</span>
                  <button className="btn btn-icon btn-alternate-info" disabled={countNumber === countMaximum ? 'disabled' : ''} onClick={handleCountIncrease}>
                    <svg viewBox="0 -960 960 960">
                      <path d="M240-280v-120H120v-80h120v-120h80v120h120v80H320v120h-80Zm390 80v-438l-92 66-46-70 164-118h64v560h-90Z" />
                    </svg>
                    <span className="hidden">เพิ่ม</span>
                  </button>
                </section>
              </section>
            : null
            }
          </div>
        </div>
        <p className={'font-display whitespace-pre-wrap ' + fontSizeName[fontSize]}>{itemContent?.item_desc}</p>
      </main>
      <section id="itemContentNev" className="flex flex-wrap justify-between items-end gap">
        <button className="order-1 w-10 2xs:w-fit xs:w-40 px-0 2xs:px-4 btn" onClick={handleContentNumberPrev}>
           <svg viewBox="0 -960 960 960">
            <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
          </svg>
          <span className="hidden 2xs:flex">บทก่อนหน้า</span>
        </button>
        <button className="order-2 md:order-3 w-fit xs:w-40 btn btn-color-primary" onClick={handleContentNumberPext}>
          <span>บทต่อไป</span>
           <svg viewBox="0 -960 960 960">
            <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
          </svg>
        </button>
        <form className="form-inline md:flex-1 md:max-w-80 order-3 md:order-2" onSubmit={handleContentNumberSubmit}>
          <fieldset className="fieldset-border md:pt-0">
            <div className="field">
              <label className="label-border">ไปเลขที่อื่น</label>
              <input type="number" pattern="[0-9]*" step="1" min="1" inputMode="numeric" name="number" value={contentNumberJump} onChange={handleContentNumberChange} placeholder="9" />
            </div>
          </fieldset>
          <fieldset className="fieldset-button">
            <button className="btn btn-icon btn-ghost-alternate-primary" type="submit">
              <svg viewBox="0 -960 960 960">
              <path d="M160-160q-33 0-56.5-23.5T80-240v-120h80v120h640v-480H160v120H80v-120q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm300-140-56-58 83-82H80v-80h407l-83-82 56-58 180 180-180 180Z" />
              </svg>
              <span className="hidden">ค้นหา</span>
            </button>
          </fieldset>
        </form>
      </section>
    </article>
  )
}

export default ItemContent