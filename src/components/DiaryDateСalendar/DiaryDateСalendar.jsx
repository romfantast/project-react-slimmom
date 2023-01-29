import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DiaryDateСalendar({ startDate, setStartDate }) {
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      dateFormat="Pp"
    />
  );
}

export default DiaryDateСalendar;
