import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calendarBuddhismFetch } from '../store/calendarBuddhismSlice';

import { IconLoading, IconItemNotFound } from '../utilities/StatusCode';
import StatusHttp from '../utilities/StatusHttp';
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
        <>
          {calendarBuddhismLoading
          ? <span className="badge badge-sm badge-reverse"><StatusHttp statusHttp={'loading'} /></span>
          : calendarBuddhismError
            ? <span className="badge badge-sm badge-reverse-color-warning"><StatusHttp statusHttp={''} /></span>
            : calendarBuddhismDateNext &&
              <section id="widgetCalendar" className={`widget ${addClassNameMode}`}>
                <span className="icon-moon bg-info-gradient">
                  <span className="material-symbols-outlined fill">{dateWaxingCrescent(calendarBuddhismDateNext?.desc)}</span>
                </span>
                <div className="date-display">
                  <h6>{calendarBuddhismDateNext?.title}</h6>
                  <p className="date-number">{getDateNumber(calendarBuddhismDateNext?.date)}</p>
                  <p className="date-full"><FormatDate itemDateCreated={calendarBuddhismDateNext?.date} addClassNameIcon={'hidden'} /></p>
                  <p className="desc">{calendarBuddhismDateNext?.desc}</p>
                </div>
              </section>
          }
        </>
      }
    </>
  );

};

export default WidgetCalendar;