import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fontSizeIncrease, fontSizeDecrease } from '../store/fontSizeSlice';

function ItemContentFontSize({ itemContentFontSizeActive, addClassNameMode }) {

  const dispatch = useDispatch();

  const { fontSizes, fontSizeIndex } = useSelector((state) => state.fontSize);
  const handleFontSizeIncrease = () => dispatch(fontSizeIncrease());
  const handleFontSizeDecrease = () => dispatch(fontSizeDecrease());
  const handleFontSizeSubmit = (event) => {event.preventDefault();}

  // Mode = .nav or .widget

  return (
    <>
      {itemContentFontSizeActive &&     
        <section id="fontSize" className={addClassNameMode}>
          {addClassNameMode === 'widget' &&
          <div className="heading bg-info-gradient">
            <span className="material-symbols-outlined fill">format_size</span>
            <h6>ปรับขนาดอักษร</h6>
          </div>
          }
          <form onSubmit={handleFontSizeSubmit}>
            <fieldset>
              <button className={`btn btn-icon ${addClassNameMode === 'nav' ? 'btn-2xs btn-ghost' : ''}`} disabled={fontSizeIndex >= fontSizes.length - 1 && 'disabled'} onClick={handleFontSizeIncrease}>
                <span className="material-symbols-outlined">add</span>
                <span className="hidden">เพิ่มขนาด</span>
              </button>
              <input value={fontSizeIndex + 1} readOnly />
              <button className={`btn btn-icon ${addClassNameMode === 'nav' ? 'btn-2xs btn-ghost' : ''}`} disabled={fontSizeIndex <= 0 && 'disabled'} onClick={handleFontSizeDecrease}>
                <span className="material-symbols-outlined">remove</span>
                <span className="hidden">ลดขนาด</span>
              </button>
            </fieldset>
          </form>
        </section>
      }
    </>
  );

};

export default ItemContentFontSize;