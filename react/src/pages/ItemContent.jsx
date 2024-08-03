import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { /*useDispatch, */useSelector } from 'react-redux';
//import { fontSizeIncrease, fontSizeDecrease } from '../store/fontSizeSlice';

import { IconLoading, IconItemNotFound } from '../utilities/StatusCode';
import StatusItem from '../utilities/StatusItem';
import StatusItemCategory from '../utilities/StatusItemCategory';
import FormatDate from '../utilities/FormatDate';
import QRCode from '../lib/QRCode';
import ItemContentFontSize from '../features/ItemContentFontSize';
import WidgetCountNumber from '../features/WidgetCountNumber';
import ItemEdit from '../components/ItemEdit';
import Bookmark from './Bookmark';

function ItemContent() {

//  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemList , itemLoading } = useSelector((state) => state.itemList);
  const { bookmarkList } = useSelector((state) => state.bookmarkList);

  const [itemNumberIndex, setItemNumberIndex] = useState(1);
  const [bookmarkIdIndex, setBookmarkIdIndex] = useState('');
  const { item_number, bookmark_id } = useParams();
  useEffect(() => {
    setItemNumberIndex(parseInt(item_number));
    setBookmarkIdIndex(bookmark_id);
  }, [item_number, bookmark_id]);

  const bookmarkSelectId = bookmarkList.find(bookmark => bookmark?.bookmark_id === bookmarkIdIndex)
  /* Content Nav - https://www.w3schools.com/jsref/jsref_findindex.asp */
  const itemIndexPresent = bookmarkIdIndex === undefined 
    ? itemList.findIndex(item => item?.item_number === itemNumberIndex)
    : bookmarkSelectId?.bookmark_item_list?.findIndex(item => item?.item_number === itemNumberIndex)
  const itemIndexLast = bookmarkIdIndex === undefined 
    ? itemList.findLastIndex(item => item)
    : bookmarkSelectId?.bookmark_item_list?.findLastIndex(item => item)

  const handleItemNumberPrev = () => {
    {bookmarkIdIndex === undefined
    ? itemIndexPresent > 0 && navigate(`/บทสวดมนต์/${itemList[itemIndexPresent - 1]?.item_number}/${itemList[itemIndexPresent - 1]?.item_name}`)
    : itemIndexPresent > 0 && navigate(`/รายการโปรด/${bookmarkSelectId?.bookmark_id}/${bookmarkSelectId?.bookmark_item_list?.[itemIndexPresent - 1]?.item_number}/${itemList?.find(item => item?.item_id === bookmarkSelectId?.bookmark_item_list?.[itemIndexPresent - 1]?.item_id)?.item_name}`)
    };
  };
  const handleItemNumberNext = () => {
    {bookmarkIdIndex === undefined
    ? itemIndexPresent < itemIndexLast && navigate(`/บทสวดมนต์/${itemList[itemIndexPresent + 1]?.item_number}/${itemList[itemIndexPresent + 1]?.item_name}`)
    : itemIndexPresent < itemIndexLast && navigate(`/รายการโปรด/${bookmarkSelectId?.bookmark_id}/${bookmarkSelectId?.bookmark_item_list?.[itemIndexPresent + 1]?.item_number}/${itemList?.find(item => item?.item_id === bookmarkSelectId?.bookmark_item_list?.[itemIndexPresent + 1]?.item_id)?.item_name}`)
    };
  };
  const [itemNumberJumpIndex, setItemNumberJumpIndex] = useState('');
  const itemNumberJumpChange = (event) => setItemNumberJumpIndex(parseInt(event.target.value) || 0);
  const handleItemNumberJumpSubmit = (event) => {
    event.preventDefault();
    navigate(`/บทสวดมนต์/${itemNumberJumpIndex}`);
    setItemNumberJumpIndex('');
  };

  /* Add item to bookmark */
  const [itemAddSelect, setItemAddSelect] = useState([]);
  const [itemEditSelect, setItemEditSelect] = useState([]);
  /**/
  const itemNavInactive = () => {setItemAddSelect([]); setItemEditSelect([]);}
  /**/
  const handleItemAdd = (item_id, item_number) => {itemNavInactive(); setItemAddSelect({ item_id: item_id, item_number: item_number });}
  const handleItemAddCancel = () => {itemNavInactive(); setItemAddSelect([]);}
  /**/
  const handleItemEdit = (itemItemList) => {itemNavInactive(); setItemEditSelect(itemItemList);}
  const handleItemEditCancel = () => setItemEditSelect([]);
  /* Check Item edit status */
  useEffect(() => {
    {itemList?.find(item => item?.item_id === itemEditSelect?.item_id) !== itemEditSelect &&
      setItemEditSelect([]);
    }
  }, [itemList?.find(item => item?.item_id === itemEditSelect?.item_id)]);
  
  /* Share */
  const [contentShare, setContentShare] = useState(false);
  const handleContentShare = () => setContentShare(!contentShare);
  const contentShareLeave = () => {setContentShare(false);}
  /* Customize Tool */
  const [contentCustomize, setContentCustomize] = useState(false);
  const handleContentCustomize = () => setContentCustomize(!contentCustomize);
  const contentCustomizeLeave = () => {setContentCustomize(false);}
  /* Font Size */
  const { fontSizes, fontSizeIndex } = useSelector((state) => state.fontSize);
  /* Count Number */
  const [countNumberActive, setCountNumberActive] = useState(false);
  const handleCountNumberToggle = () => setCountNumberActive(!countNumberActive);

  return (
    <div id="itemContent" className="container">
      {itemLoading
      ? <IconLoading />
      : <>
          {itemList.some(item => item?.item_number === itemNumberIndex)
          ? <>
              {itemList.filter(item => item?.item_number === itemNumberIndex).map(itemContent => (itemContent &&
                <section key={itemContent?.item_id} className="wrapper">
                  <div className="itemcontent-heading">
                    <div className="itemcontent-info">
                      <div className="itemcontent-meta">
                        <span className="badge badge-color-info">เลขที่: {itemContent?.item_number}</span>
                        
                        <span className="badge badge-sm badge-reverse !p-0">
                          <FormatDate itemDateCreated={itemContent?.item_time_created} addClassNameIcon={''} addClassNameText={''} />
                        </span>
                        <span className="badge badge-sm badge-reverse !p-0">
                          <StatusItem statusItem={itemContent?.item_status} addClassNameIcon={''} addClassNameText={''} />
                        </span>
                        <span className="badge badge-sm badge-reverse !p-0">
                          <StatusItemCategory statusItemCategory={itemContent?.item_category_list} addClassNameIcon={''} addClassNameText={''} />
                        </span>
                        
                      </div>
                      <nav className="nav-action">
                        <div className="tooltip" data-tip="เพิ่ม">
                          <button className="btn btn-icon btn-ghost" onClick={() => handleItemAdd(itemContent?.item_id, itemContent?.item_number)}>
                            <span className="material-symbols-outlined">bookmark_add</span>
                            <span className="hidden">เพิ่ม</span>
                          </button>
                          {itemContent?.item_id === itemAddSelect?.item_id &&
                            <dialog className="modal">
                              <div className="modal-content">
                                <div className="tooltip tooltip-left" data-tip="ยกเลิก">
                                  <button className="btn btn-icon btn-ghost" onClick={handleItemAddCancel}>
                                    <span className="material-symbols-outlined">close</span>
                                    <span className="hidden">ยกเลิก</span>
                                  </button>
                                </div>
                                <Bookmark itemAddSelect={itemAddSelect} />
                              </div>
                              <button className="modal-close" onClick={handleItemAddCancel}></button>
                            </dialog>
                          }
                        </div>
                        <div className="tooltip" data-tip="แก้ไข">
                          <button className="btn btn-icon btn-ghost" onClick={() => handleItemEdit(itemContent)}>
                            <span className="material-symbols-outlined">edit</span>
                            <span className="hidden">แก้ไข</span>
                          </button>
                          {itemContent?.item_id === itemEditSelect?.item_id &&
                            <dialog className="modal">
                              <div className="modal-content fullscreen">
                                <div className="tooltip tooltip-left" data-tip="ยกเลิก">
                                  <button className="btn btn-icon btn-ghost" onClick={handleItemEditCancel}>
                                    <span className="material-symbols-outlined">close</span>
                                    <span className="hidden">ยกเลิก</span>
                                  </button>
                                </div>
                                <ItemEdit itemEditSelect={itemEditSelect} />
                              </div>
                              <button className="modal-close" onClick={handleItemEditCancel}></button>
                            </dialog>
                          }
                        </div>
                        <hr />
                        <div className="tooltip" data-tip="แบ่งปัน" onMouseLeave={contentShareLeave}>
                          <button className={'btn btn-icon' + (!contentShare ? ' btn-ghost' : '')} onClick={handleContentShare}>
                            <span className="material-symbols-outlined">share</span>
                            <span className="hidden">แบ่งปัน</span>
                          </button>
                          {contentShare &&
                            <section className="absolute top-full right-0 frame">
                              <QRCode />
                            </section>
                          }
                        </div>
                        <div className="tooltip" data-tip="ปรับแต่ง" onMouseLeave={contentCustomizeLeave}>
                          <button className={`btn btn-icon ${contentCustomize ? '' : 'btn-ghost'}`} onClick={handleContentCustomize}>
                            <span className="material-symbols-outlined">tune</span>
                            <span className="hidden">ปรับแต่ง</span>
                          </button>
                          {contentCustomize &&
                            <div id="navCustomizeList" className="nav-dropdown">
                              <h6>ตัวเลือก</h6>
                              <ul>
                                <li className="fontsize">
                                  <div id="navFontSizeToggle" className="btn btn-text">
                                    <span className="material-symbols-outlined">format_size</span>
                                    <span className="text">ขนาดเนื้อหา</span>
                                    <ItemContentFontSize itemContentFontSizeActive={true} addClassNameMode={'nav'} />
                                  </div>
                                </li>
                                <li className="countnumber">
                                  <button className="btn btn-ghost" onClick={handleCountNumberToggle}>
                                    <span className="material-symbols-outlined">pin</span>
                                    <span className="text">ที่นับจำนวน</span>
                                    <span className={`icon-xl material-symbols-outlined wght-200 ${countNumberActive ? 'fill text-success' : ''}`}>{countNumberActive ? 'toggle_on' : 'toggle_off'}</span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          }
                        </div>
                        <WidgetCountNumber countNumberActive={countNumberActive} />
                      </nav>
                    </div>
                    <hr />
                    <h1 className="text-2xl">{itemContent?.item_name}</h1>
                  </div>
                  <article id="itemContentDesc" className={fontSizes[fontSizeIndex]} dangerouslySetInnerHTML={{ __html: itemContent?.item_desc }} />
                </section>
              ))}
            </>
          : <IconItemNotFound />
          }
        </>
      }
      <hr />
      <nav className="itemcontent-nav-pagination">
        <button className="btn-prev btn" disabled={itemIndexPresent <= 0 && 'disabled'} onClick={handleItemNumberPrev}>
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span className="text hidden 2xs:flex">บทก่อนหน้า</span>
        </button>
        <button className="btn-next btn btn-color-primary" disabled={itemIndexPresent >= itemIndexLast && 'disabled'} onClick={handleItemNumberNext}>
          <span className="text">บทต่อไป</span>
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
        {bookmarkIdIndex === undefined &&
          <form className="form-jump form-inner" onSubmit={handleItemNumberJumpSubmit}>
            <fieldset className="fieldset-border pt-0">
              <div className="field">
                <label className="label-border">ไปเลขที่อื่น</label>
                <input type="number" pattern="[0-9]*" step="1" min="1" inputMode="numeric" name="number" value={itemNumberJumpIndex} onChange={itemNumberJumpChange} placeholder="9" />
              </div>
            </fieldset>
            <fieldset className="fieldset-button-field-end">
              <button className="btn btn-icon btn-ghost-alternate-primary" type="submit">
                <span className="material-symbols-outlined">input</span>
                <span className="text hidden">ค้นหา</span>
              </button>
            </fieldset>
          </form>
        }
      </nav>
    </div>
  );

};

export default ItemContent;