import React, { useState, useContext, useEffect } from 'react';
import Calendar from 'react-calendar';

function UserCalendar () {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div className="calendarContainer">
        <Calendar onChange={setDate} value={date}/>
      </div>
      <div className="text-center">
      Selected date: {date.toDateString()}
      </div>
    </div>
  );
}

export default UserCalendar;
