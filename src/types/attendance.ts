export type ShiftType = 'morning' | 'evening';
export type AttendanceStatus = 'present' | 'absent' | 'pending';

export interface PassengerAttendanceData {
  passengerId: string;
  date: string;
  morningShift: AttendanceStatus;
  eveningShift: AttendanceStatus;
  updatedAt?: number;
}
