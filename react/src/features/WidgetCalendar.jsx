import React from 'react';

function WidgetCalendar({ calendarActive,  addClassNameMode }) {

  return (
    <>
      {calendarActive &&
        <section id="widgetCalendar" className={`widget ${addClassNameMode}`}>
          <span className="icon-moon bg-info-gradient">
            <span className="material-symbols-outlined fill">clear_night</span>
          </span>
          <div className="date">
            <h6>วันพระ</h6>
            <p className="date-full"><span className="date-number">21</span><span> มิถุนายน 2567<br />
              ขึ้น 15 ค่ำ เดือน 7</span></p>
          </div>
        </section>
      }
    </>
  );

};

export default WidgetCalendar;