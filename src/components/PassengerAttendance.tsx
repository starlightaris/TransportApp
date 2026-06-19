import React, { useState, useEffect } from 'react';
import { PassengerAttendance as AttendanceData, ShiftType, AttendanceStatus } from '../types/attendance';
import './PassengerAttendance.css';

interface PassengerAttendanceProps {
  passengerId: string;
}

export const PassengerAttendance: React.FC<PassengerAttendanceProps> = ({ passengerId }) => {
  return (
    <div className="attendance-dashboard">
      <h2>Passenger Attendance Dashboard</h2>
      
      <div className="shift-card">
        <h3>Morning Shift</h3>
        {/* Toggle buttons will go here */}
      </div>

      <div className="shift-card">
        <h3>Evening Shift</h3>
        {/* Toggle buttons will go here */}
      </div>
    </div>
  );
};
