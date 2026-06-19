import { PassengerAttendance, ShiftType, AttendanceStatus } from '../types/attendance';

// Mock passenger data layer
export const MOCK_ATTENDANCE_DB: Record<string, PassengerAttendance> = {
  'mock-passenger-1': {
    passengerId: 'mock-passenger-1',
    date: new Date().toISOString().split('T')[0],
    morningShift: 'pending',
    eveningShift: 'pending',
  }
};
