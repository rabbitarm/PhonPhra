import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fontSizeIncrease, fontSizeDecrease } from '../../store/fontSizeSlice';

function WidgetCountNumber({ fontSizeActive }) {

  const dispatch = useDispatch();

  const { fontSizes, fontSizeIndex } = useSelector((state) => state.fontSize);
  const handleFontSizeIncrease = () => dispatch(fontSizeIncrease());
  const handleFontSizeDecrease = () => dispatch(fontSizeDecrease());
  const handleFontSizeSubmit = (event) => {event.preventDefault();}


  return (
    <>
      {fontSizeActive &&     
        <section id="fontSize" className="widget">
          <div className="heading bg-gradient-1">
            <span className="material-symbols-outlined fill">format_size</span>
            <h6>ปรับขนาดอักษร</h6>
          </div>
          <form onSubmit={handleFontSizeSubmit}>
            <fieldset>
              <button className="btn btn-icon" disabled={fontSizeIndex >= fontSizes.length - 1 && 'disabled'} onClick={handleFontSizeIncrease}>
                <span className="material-symbols-outlined">add</span>
                <span className="hidden">เพิ่มขนาด</span>
              </button>
              <input value={fontSizeIndex + 1} readOnly />
              <button className="btn btn-icon" disabled={fontSizeIndex <= 0 && 'disabled'} onClick={handleFontSizeDecrease}>
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

export default WidgetCountNumber;