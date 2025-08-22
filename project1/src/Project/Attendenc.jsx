import React, { useState, useEffect } from "react";

const Attendenc = () => {
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [daysArray, setDaysArray] = useState([]);
  const [viewMode, setViewMode] = useState("monthly");
  const [stats, setStats] = useState({ present: 0, absent: 0 });

  const API_URL = "http://localhost:5000/api/attendance";

 useEffect(() => {
  fetchMonthlyData(currentMonth, currentYear);
}, [currentMonth, currentYear]);

  // ------------------ FETCH MONTHLY ------------------
  const fetchMonthlyData = async (month, year) => {
    try {
      const res = await fetch(`${API_URL}/${year}/${month + 1}`);
      const data = await res.json();

      // Ensure correct format
      const presentDays = Array.isArray(data.present) ? data.present : [];
      const absentDays = Array.isArray(data.absent) ? data.absent : [];

      renderCalendar(month, year, presentDays, absentDays);
    } catch (error) {
      console.error("Error fetching monthly data:", error);
      // fallback: render blank calendar
      renderCalendar(month, year, [], []);
    }
  };

  // ------------------ FETCH YEARLY ------------------
  const fetchYearlyData = async (year) => {
    try {
      const res = await fetch(`${API_URL}/${year}`);
      const records = await res.json();

      let totalPresent = 0, totalAbsent = 0;
      records.forEach(month => {
        totalPresent += month.present?.length || 0;
        totalAbsent += month.absent?.length || 0;
      });

      setStats({ present: totalPresent, absent: totalAbsent });
      setDaysArray([]);
    } catch (error) {
      console.error("Error fetching yearly data:", error);
    }
  };

  // ------------------ RENDER CALENDAR ------------------
  const renderCalendar = (month, year, presentDays, absentDays) => {
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const tempDays = [];

    // Empty slots before start
    for (let i = 0; i < firstDay; i++) tempDays.push(null);

    // Dates
    for (let i = 1; i <= totalDays; i++) {
      let status = "";
      if (presentDays.includes(i)) status = "present";
      else if (absentDays.includes(i)) status = "absent";
      tempDays.push({ day: i, status });
    }

    setDaysArray(tempDays);
    setStats({ present: presentDays.length, absent: absentDays.length });
  };

  // ------------------ NAVIGATION ------------------
  const nextMonth = () => {
    setCurrentMonth(prev =>
      prev === 11 ? (setCurrentYear(y => y + 1), 0) : prev + 1
    );
  };

  const prevMonth = () => {
    setCurrentMonth(prev =>
      prev === 0 ? (setCurrentYear(y => y - 1), 11) : prev - 1
    );
  };

  // ------------------ STATS ------------------
  const total = stats.present + stats.absent;
  const presentPercent = total ? ((stats.present / total) * 100).toFixed(2) : 0;
  const absentPercent = total ? ((stats.absent / total) * 100).toFixed(2) : 0;

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 24,
        border: "1px solid #eee",
        borderRadius: 12,
        background: "#fafcff",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Attendance Dashboard</h2>

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <button onClick={prevMonth}>&lt;</button>
        <span style={{ fontWeight: "bold" }}>
          {monthNames[currentMonth]} {currentYear}
        </span>
        <button onClick={nextMonth}>&gt;</button>
      </div>

      {/* Stats */}
      <div style={{ marginBottom: 16 }}>
        <span style={{ color: "green", fontWeight: "bold" }}>
          Present: {stats.present}
        </span>{" "}
        |{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          Absent: {stats.absent}
        </span>{" "}
        | <span>Total: {total}</span>
      </div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ color: "green" }}>Present %: {presentPercent}%</span> |{" "}
        <span style={{ color: "red" }}>Absent %: {absentPercent}%</span>
      </div>

      {/* Calendar Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 4,
        }}
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} style={{ fontWeight: "bold", textAlign: "center" }}>
            {d}
          </div>
        ))}

        {daysArray.map((day, idx) =>
          day === null ? (
            <div key={idx}></div>
          ) : (
            <div
              key={idx}
              style={{
                textAlign: "center",
                padding: "6px 0",
                background:
                  day.status === "present"
                    ? "#d4f8e8"
                    : day.status === "absent"
                    ? "#ffd6d6"
                    : "#fff",
                borderRadius: 6,
                color:
                  day.status === "present"
                    ? "green"
                    : day.status === "absent"
                    ? "red"
                    : "#333",
                border: day.status ? "1px solid #eee" : "none",
              }}
            >
              {day.day}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Attendenc;
