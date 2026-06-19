import { PassengerAttendanceData, ShiftType, AttendanceStatus } from '../types/attendance';

const MOCK_PROFILES: Record<string, PassengerAttendanceData> = {
  'mock-user-1': {
    passengerId: 'mock-user-1',
    date: new Date().toISOString().split('T')[0],
    morningShift: 'pending',
    eveningShift: 'pending',
  }
};

export const getMockProfile = (id: string): PassengerAttendanceData => {
  return MOCK_PROFILES[id] || {
    passengerId: id,
    date: new Date().toISOString().split('T')[0],
    morningShift: 'pending',
    eveningShift: 'pending',
  };
};
