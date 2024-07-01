import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countNumberIncrease, countNumberDecrease, countNumberReset, countNumberChange } from '../../store/countNumberSlice';

function WidgetCountNumber({ countNumberActive }) {

  const dispatch = useDispatch();

  const { countNumberInitial, countNumberMaximum, countNumberIndex } = useSelector((state) => state.countNumber);
  const handleCountNumberIncrease = () => dispatch(countNumberIncrease());
  const handleCountNumberDecrease = () => dispatch(countNumberDecrease());
  const handleCountNumberReset    = () => dispatch(countNumberReset());
  const handleCountNumberChange = (event) => dispatch(countNumberChange(parseInt(event.target.value) || 0));
  const handleCountNumberSubmit = (event) => {event.preventDefault();}

  return (
    <>
      {countNumberActive &&
        <section id="widgetCountNumber" className="widget">
          <div className="heading bg-gradient-1">
            <span className="icon-xl -ml-0.5 material-symbols-outlined fill">pin</span>
            <h6>ที่นับจำนวน</h6>
          </div>
          <form onSubmit={handleCountNumberSubmit}>
            <fieldset>
              <button className="btn btn-icon" disabled={countNumberIndex >= countNumberMaximum && 'disabled'} onClick={handleCountNumberIncrease}>
                <span className="material-symbols-outlined">exposure_plus_1</span>
                <span className="text hidden">เพิ่มจำนวน</span>
              </button>
              <input name="number" type="number" inputMode="numeric" pattern="[0-9]*" step="1" min="1" max={countNumberMaximum} value={countNumberIndex} onChange={handleCountNumberChange} placeholder="9" />
              <button className="btn btn-icon" disabled={countNumberIndex <= countNumberInitial && 'disabled'} onClick={handleCountNumberDecrease}>
                <span className="material-symbols-outlined">exposure_neg_1</span>
                <span className="text hidden">ลดจำนวน</span>
              </button>
              {countNumberIndex > countNumberInitial &&
                <button className="btn-countnumber-reset btn btn-2xs btn-icon btn-reverse-warning" disabled={countNumberIndex <= countNumberInitial && 'disabled'} onClick={handleCountNumberReset}>
                  <span className="material-symbols-outlined -scale-x-100">refresh</span>
                  <span className="text hidden">เริ่มใหม่</span>
                </button>
              }
            </fieldset>
          </form>
        </section>
      }
    </>
  );

};

export default WidgetCountNumber;