import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { itemNumberPrev, itemNumberNext, itemNumberJumpChange, itemNumberJump } from '../store/itemNumberSlice';
import { fontSizeIncrease, fontSizeDecrease } from '../store/fontSlice';
import { countIncrease, countDecrease, countReset } from '../store/countSlice';

function ItemContent() {

  const dispatch = useDispatch();
  const { itemList } = useSelector((state) => state.itemList);
  /* Show content by item_number from param */
  const { item_number } = useParams();
  useEffect(() => {
    dispatch(itemNumberJump(item_number));
  }, [item_number]);
  const navigate = useNavigate();

  /* Content Nav */
  const { itemNumberLast, itemNumberIndex, itemNumberJumpIndex } = useSelector((state) => state.itemNumber);
  const handleItemNumberPrev   = () => dispatch(itemNumberPrev());
  const handleItemNumberNext   = () => dispatch(itemNumberNext());
  const itemNumberChange       = (event) => dispatch(itemNumberJumpChange(event.target.value));
  const handleItemNumberSubmit = (event) => {
    event.preventDefault();
    dispatch(itemNumberJump(itemNumberJumpIndex));
    navigate.push(`/บทสวดมนต์/${itemNumberJumpIndex}`);
    dispatch(itemNumberJump(itemNumberJumpIndex));
  }

  /* Customize Tool */
  const [contentCustomize, setContentCustomize] = useState(false);
  const handleContentCustomize = () => setContentCustomize(!contentCustomize);
  /* Font Size */
  const { fontSizes, fontSizeIndex } = useSelector((state) => state.fontSize);
  const handleFontSizeIncrease = () => dispatch(fontSizeIncrease());
  const handleFontSizeDecrease = () => dispatch(fontSizeDecrease());
  /* Count Number */
  const { countInitial, countMaximum, countIndex } = useSelector((state) => state.countNumber);
  const handleCountIncrease = () => dispatch(countIncrease());
  const handleCountDecrease = () => dispatch(countDecrease());
  const handleCountReset    = () => dispatch(countReset());

  /* Check index of itemlist */
  const itemIndexFirst = 0;
  const itemIndexPresent = itemList.findIndex(item => item?.item_number === itemNumberIndex);
  const itemIndexLast = itemList.findLastIndex(item => item);
/*
  https://www.w3schools.com/jsref/jsref_findindex.asp
  console.log('indexOf',          itemList.indexOf(item => item));
  console.log('lastIndexOf',      itemList.lastIndexOf(item => item));
  console.log('find',             itemList.find(item => item?.item_number === itemNumberIndex));
  console.log('findIndex',        itemIndexPresent);
  console.log('findLast',         itemList.findLast(item => item));
  console.log('findLastIndex',    itemIndexLast);
  console.log('findIndex-Number', itemList[itemItemPresent]?.item_number);
*/
  console.log('findIndex',        itemIndexPresent);
  console.log('itemNumberIndex', itemNumberIndex);

  return (
    <article id="itemContent" className="container">
      {itemList.some(item => item?.item_number === itemNumberIndex)
      ? <>
          {itemList.filter(item => item?.item_number === itemNumberIndex).map(itemContent => (itemContent
          ? <main key={itemContent?._id} className="flex flex-col gap">
              <div className="flex justify-between items-start gap">
                <section>
                  <span className="badge badge-color-info">เลขที่: {itemContent?.item_number}</span>
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
                      <section id="itemContentFontSize" className="frame flex justify-between items-center w-full sm:min-w-60 gap-2 p-2 border border-info rounded-xl">
                        <button className="btn btn-icon btn-alternate-info" disabled={fontSizeIndex >= fontSizes.length - 1 ? 'disabled' : null} onClick={handleFontSizeIncrease}>
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
                            <span className="block w-4 text-2xl leading-none text-center">{fontSizeIndex + 1}</span>
                          </span>
                        </span>
                        <button className="btn btn-icon btn-alternate-info" disabled={fontSizeIndex <= 0 ? 'disabled' : null} onClick={handleFontSizeDecrease}>
                          <svg viewBox="0 -960 960 960">
                            <path d="M200-440v-80h560v80H200Z" />
                          </svg>
                          <span className="hidden">ลดขนาด</span>
                        </button>
                      </section>
                      <section id="itemContentCount" className="frame flex justify-between items-center w-full sm:min-w-60 gap-2 p-2 border border-info rounded-xl">
                        <button className="btn btn-icon btn-alternate-info" disabled={countIndex >= countMaximum ? 'disabled' : null} onClick={handleCountIncrease}>
                          <svg viewBox="0 -960 960 960">
                            <path d="M240-280v-120H120v-80h120v-120h80v120h120v80H320v120h-80Zm390 80v-438l-92 66-46-70 164-118h64v560h-90Z" />
                          </svg>
                          <span className="hidden">เพิ่ม</span>
                        </button>
                        <span className="block w-16 text-4xl leading-none text-center text-info">{countIndex}</span>
                        <button className="btn btn-icon btn-alternate-info" disabled={countIndex <= countInitial ? 'disabled' : null} onClick={handleCountDecrease}>
                          <svg viewBox="0 -960 960 960">
                            <path d="M400-400H120v-80h280v80Zm230 200v-438l-92 66-46-70 164-118h64v560h-90Z" />
                          </svg>
                          <span className="hidden">ลด</span>
                        </button>
                        <button className="btn btn-icon btn-alternate-warning" disabled={countIndex <= countInitial ? 'disabled' : null} onClick={handleCountReset}>
                          <svg viewBox="0 -960 960 960">
                            <path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z" />
                          </svg>
                          <span className="hidden">เริ่มใหม่</span>
                        </button>
                      </section>
                    </section>
                  : null
                  }
                </div>
              </div>
              <p className={'font-display whitespace-pre-wrap ' + fontSizes[fontSizeIndex]}>{itemContent?.item_desc}</p>
            </main>
          : <p>ไม่พบบทสวดมนต์</p>
          ))}
        </>
      : <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left">
          <svg className="size-40 sm:size-60 fill-slate-100 -m-4 sm:-m-6" viewBox="0 -960 960 960">
            <path d="M280-152q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm536-12L566-414q-14 12-33.5 23T496-374q-2-7-4.5-13.5T486-399q54-20 90-67.5T612-580q0-80-56-136t-136-56q-80 0-136 56t-56 136q0 14 2.5 28.5T236-524q-6 0-13.5 2.5L209-517q-4-13-6.5-29.5T200-580q0-92 64-156t156-64q92 0 156 64t64 156q0 43-15.5 81T586-434l250 250-20 20Zm-606-46 70-70 70 70 20-20-70-70 70-70-20-20-70 70-70-70-20 20 70 70-70 70 20 20Z" />
          </svg>
          <div>
            <h6 className="text-7xl sm:text-9xl !leading-[0.75] text-slate-100">404</h6>
            <h3 className="text-2xl sm:text-5xl !leading-[1.5] text-slate-300">ไม่พบบทสวดมนต์</h3>
          </div>
        </div>
      }
      <hr />
      <section id="itemContentNav" className="flex flex-wrap justify-between items-end gap">
        <Link to={'/บทสวดมนต์/' + itemList[itemIndexPresent - 1]?.item_number} className={'order-1 w-10 2xs:w-fit xs:w-40 px-0 2xs:px-4 btn' + 
          (itemIndexPresent <= 0 ? ' btn-disabled' : '')}>
          <svg viewBox="0 -960 960 960">
            <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
          </svg>
          <span className="hidden 2xs:flex">บทก่อนหน้า</span>
        </Link>
        <Link to={'/บทสวดมนต์/' + itemList[itemIndexPresent + 1]?.item_number} className={'order-2 md:order-3 flex-1 md:max-w-40 btn btn-color-primary' + 
          (itemIndexPresent >= itemIndexLast ? ' btn-disabled' : '')} onClick={handleItemNumberNext}>
          <span>บทต่อไป</span>
          <svg viewBox="0 -960 960 960">
            <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
          </svg>
        </Link>
        <form className="form-inner md:flex-1 md:max-w-80 order-3 md:order-2" onSubmit={handleItemNumberSubmit}>
          <fieldset className="fieldset-border pt-0">
            <div className="field">
              <label className="label-border">ไปเลขที่อื่น</label>
              <input type="number" pattern="[0-9]*" step="1" min="1" inputMode="numeric" name="number" value={itemNumberJumpIndex} onChange={itemNumberChange} placeholder="9" />
            </div>
          </fieldset>
          <fieldset className="fieldset-button-field-end">
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

export default ItemContent;