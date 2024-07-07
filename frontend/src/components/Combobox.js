import React, { useState } from "react";
import "./Combobox.css";
function Combobox({ date }) {
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];
  const days = [];

  for (let i = 1; i <= 31; i++) {
    const dayValue = i < 10 ? `0${i}` : `${i}`;
    days.push({ value: dayValue, label: dayValue });
  }
  const years = [];

  for (let i = 1930; i <= 2024; i++) {
    years.push({ value: i.toString(), label: i.toString() });
  }
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  return (
    <div className="combobox-container">
      {date === "Month" && (
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          className="combobox"
        >
          <option value="">{date}</option>
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      )}
      {date === "Day" && (
        <select
          value={selectedDay}
          onChange={handleDayChange}
          className="combobox"
        >
          <option value="">{date}</option>
          {days.map((day) => (
            <option key={day.value} value={day.value}>
              {day.label}
            </option>
          ))}
        </select>
      )}
      {date === "Year" && (
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="combobox"
        >
          <option value="">{date}</option>
          {years.map((year) => (
            <option key={year.value} value={year.value}>
              {year.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Combobox;
