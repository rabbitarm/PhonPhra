import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fontSizeIncrease, fontSizeDecrease } from '../store/fontSizeSlice';
import { countNumberIncrease, countNumberDecrease, countNumberReset } from '../store/countNumberSlice';
import { IconLoading, IconItemNotFound } from './Status';

function ItemContent() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemList , itemLoading } = useSelector((state) => state.itemList);

  const [itemNumberIndex, setItemNumberIndex] = useState(1);
  const { item_number } = useParams();
  useEffect(() => {
    setItemNumberIndex(parseInt(item_number));
  }, [item_number]);

  /* Content Nav - https://www.w3schools.com/jsref/jsref_findindex.asp */
  const itemIndexPresent = itemList.findIndex(item => item?.item_number === itemNumberIndex);
  const itemIndexLast = itemList.findLastIndex(item => item);

  const handleItemNumberPrev = () => itemIndexPresent > 0 && navigate(`/บทสวดมนต์/${itemList[itemIndexPresent - 1]?.item_number}`);
  const handleItemNumberNext = () => itemIndexPresent < itemIndexLast && navigate(`/บทสวดมนต์/${itemList[itemIndexPresent + 1]?.item_number}`);

  const [itemNumberJumpIndex, setItemNumberJumpIndex] = useState('');
  const itemNumberJumpChange = (event) => setItemNumberJumpIndex(parseInt(event.target.value) || 0);
  const handleItemNumberJumpSubmit = (event) => {
    event.preventDefault();
    navigate(`/บทสวดมนต์/${itemNumberJumpIndex}`);
    setItemNumberJumpIndex('');
  };

  /* Customize Tool */
  const [contentCustomize, setContentCustomize] = useState(false);
  const handleContentCustomize = () => setContentCustomize(!contentCustomize);
  /* Font Size */
  const { fontSizes, fontSizeIndex } = useSelector((state) => state.fontSize);
  const handleFontSizeIncrease = () => dispatch(fontSizeIncrease());
  const handleFontSizeDecrease = () => dispatch(fontSizeDecrease());
  /* Count Number */
  const { countNumberInitial, countNumberMaximum, countNumberIndex } = useSelector((state) => state.countNumber);
  const handleCountNumberIncrease = () => dispatch(countNumberIncrease());
  const handleCountNumberDecrease = () => dispatch(countNumberDecrease());
  const handleCountNumberReset    = () => dispatch(countNumberReset());

  return (
    <article id="itemContent" className="container">
      {itemLoading
      ? <IconLoading />
      : <>
          {itemList.some(item => item?.item_number === itemNumberIndex)
          ? <>
              {itemList.filter(item => item?.item_number === itemNumberIndex).map(itemContent => (itemContent &&
                <main key={itemContent?.item_id} className="flex flex-col gap">
                  <div className="flex justify-between items-start gap">
                    <section>
                      <span className="badge badge-color-info">เลขที่: {itemContent?.item_number}</span>
                      <h1 className="text-2xl">{itemContent?.item_name}</h1>
                    </section>
                    <div className="action-bar">
                      <div className="tooltip" data-tip="เพิ่ม">
                        <button className="btn btn-icon btn-ghost">
                          <svg viewBox="0 -960 960 960">
                            <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
                          </svg>
                          <span className="hidden">เพิ่ม</span>
                        </button>
                      </div>
                      <div className="tooltip" data-tip="แบ่งปัน">
                        <button className="btn btn-icon btn-ghost">
                          <svg viewBox="0 -960 960 960">
                            <path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280" />
                          </svg>
                          <span className="hidden">แบ่งปัน</span>
                        </button>
                      </div>
                      <div className="tooltip select-none" data-tip="ปรับแต่ง">
                        <button className={'btn btn-icon ' + (!contentCustomize && 'btn-ghost')} onClick={handleContentCustomize}>
                          <svg viewBox="0 -960 960 960">
                            <path d="M710-150q-63 0-106.5-43.5T560-300q0-63 43.5-106.5T710-450q63 0 106.5 43.5T860-300q0 63-43.5 106.5T710-150Zm0-80q29 0 49.5-20.5T780-300q0-29-20.5-49.5T710-370q-29 0-49.5 20.5T640-300q0 29 20.5 49.5T710-230Zm-550-30v-80h320v80H160Zm90-250q-63 0-106.5-43.5T100-660q0-63 43.5-106.5T250-810q63 0 106.5 43.5T400-660q0 63-43.5 106.5T250-510Zm0-80q29 0 49.5-20.5T320-660q0-29-20.5-49.5T250-730q-29 0-49.5 20.5T180-660q0 29 20.5 49.5T250-590Zm230-30v-80h320v80H480Zm230 320ZM250-660Z" />
                          </svg>
                          <span className="hidden">ปรับแต่ง</span>
                        </button>
                        {contentCustomize
                        ? <section className="absolute top-full right-0 translate-y-2 flex flex-wrap justify-between items-center gap-2">
                            <section id="itemContentFontSize" className="frame flex justify-between items-center w-full sm:min-w-60 gap-2 p-2 border border-info rounded-xl">
                              <button className="btn btn-icon btn-alternate-info" disabled={fontSizeIndex >= fontSizes.length - 1 && 'disabled'} onClick={handleFontSizeIncrease}>
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
                              <button className="btn btn-icon btn-alternate-info" disabled={fontSizeIndex <= 0 && 'disabled'} onClick={handleFontSizeDecrease}>
                                <svg viewBox="0 -960 960 960">
                                  <path d="M200-440v-80h560v80H200Z" />
                                </svg>
                                <span className="hidden">ลดขนาด</span>
                              </button>
                            </section>
                            <section id="itemContentCountNumber" className="frame flex justify-between items-center w-full sm:min-w-60 gap-2 p-2 border border-info rounded-xl">
                              <button className="btn btn-icon btn-alternate-info" disabled={countNumberIndex >= countNumberMaximum && 'disabled'} onClick={handleCountNumberIncrease}>
                                <svg viewBox="0 -960 960 960">
                                  <path d="M240-280v-120H120v-80h120v-120h80v120h120v80H320v120h-80Zm390 80v-438l-92 66-46-70 164-118h64v560h-90Z" />
                                </svg>
                                <span className="hidden">เพิ่ม</span>
                              </button>
                              <span className="block w-16 text-4xl leading-none text-center text-info">{countNumberIndex}</span>
                              <button className="btn btn-icon btn-alternate-info" disabled={countNumberIndex <= countNumberInitial && 'disabled'} onClick={handleCountNumberDecrease}>
                                <svg viewBox="0 -960 960 960">
                                  <path d="M400-400H120v-80h280v80Zm230 200v-438l-92 66-46-70 164-118h64v560h-90Z" />
                                </svg>
                                <span className="hidden">ลด</span>
                              </button>
                              <button className="btn btn-icon btn-alternate-warning" disabled={countNumberIndex <= countNumberInitial && 'disabled'} onClick={handleCountNumberReset}>
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
                  </div>
                  <p className={'font-display whitespace-pre-wrap ' + fontSizes[fontSizeIndex]}>{itemContent?.item_desc}</p>
                </main>
              ))}
            </>
          : <IconItemNotFound />
          }
        </>
      }
      <hr />
      <section id="itemContentNav" className="flex flex-wrap justify-between items-end gap">
        <button className="order-1 w-10 2xs:w-fit xs:w-40 px-0 2xs:px-4 btn" disabled={itemIndexPresent <= 0 ? 'disabled' : null} onClick={handleItemNumberPrev}>
          <svg viewBox="0 -960 960 960">
            <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
          </svg>
          <span className="hidden 2xs:flex">บทก่อนหน้า</span>
        </button>
        <button className="order-2 md:order-3 flex-1 md:max-w-40 btn btn-color-primary" disabled={itemIndexPresent >= itemIndexLast ? 'disabled' : null} onClick={handleItemNumberNext}>
          <span>บทต่อไป</span>
          <svg viewBox="0 -960 960 960">
            <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
          </svg>
        </button>
        <form className="form-inner md:flex-1 md:max-w-80 order-3 md:order-2" onSubmit={handleItemNumberJumpSubmit}>
          <fieldset className="fieldset-border pt-0">
            <div className="field">
              <label className="label-border">ไปเลขที่อื่น</label>
              <input type="number" pattern="[0-9]*" step="1" min="1" inputMode="numeric" name="number" value={itemNumberJumpIndex} onChange={itemNumberJumpChange} placeholder="9" />
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