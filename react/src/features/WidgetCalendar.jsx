import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calendarBuddhismFetch } from '../store/calendarBuddhismSlice';

import { IconLoading, IconItemNotFound } from '../utilities/StatusCode';
import FormatDate from '../utilities/FormatDate';

function WidgetCalendar({ calendarActive,  addClassNameMode }) {

  const dispatch = useDispatch();
  const { calendarBuddhismDateNext, calendarBuddhismLoading, calendarBuddhismError } = useSelector((state) => state.calendarBuddhism);

  useEffect(() => {
    dispatch(calendarBuddhismFetch());
  }, [dispatch]);

  const dateWaxingCrescent = (desc) =>
    desc?.includes('15 ค่ำ') || desc?.includes('14 ค่ำ')
      ? 'circle'
      : desc?.includes('8 ค่ำ')
        ? 'clear_night'
        : 'error';
  const getDateNumber = (date) => new Date(date).getDate();

  return (
    <>
      {calendarActive &&
        <section id="widgetCalendar" className={`widget ${addClassNameMode}`}>
          <span className="icon-moon bg-info-gradient">
            <span className="material-symbols-outlined fill">{dateWaxingCrescent(calendarBuddhismDateNext?.desc)}</span>
          </span>
          <div className="date-display">
            {calendarBuddhismDateNext
            ? <>
                <h6>{calendarBuddhismDateNext?.title}</h6>
                <p className="date-number">{getDateNumber(calendarBuddhismDateNext?.date)}</p>
                <p className="date-full"><FormatDate itemDateCreated={calendarBuddhismDateNext?.date} addClassNameIcon={'hidden'} addClassNameText={''} /></p>
                <p className="desc">{calendarBuddhismDateNext?.desc}</p>
              </>
            : <span className="badge badge-sm badge-reverse-error">
                <span className="material-symbols-outlined">error</span>
                <span className="text">เกิดข้อผิดพลาด</span>
              </span>
            }
          </div>
        </section>
      }
    </>
  );

};

export default WidgetCalendar;