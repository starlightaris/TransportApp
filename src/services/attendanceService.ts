import { PassengerAttendance, ShiftType, AttendanceStatus } from '../types/attendance';

// Simulating a Firebase Firestore service with a mock fallback
const USE_MOCK = !process.env.REACT_APP_FIREBASE_API_KEY;

let mockAttendanceData: Record<string, PassengerAttendance> = {
  'mock-passenger-1_2026-06-19': {
    passengerId: 'mock-passenger-1',
    date: '2026-06-19',
    morningShift: 'pending',
    eveningShift: 'pending',
    updatedAt: Date.now(),
  }
};

export const fetchAttendance = async (passengerId: string, date: string): Promise<PassengerAttendance> => {
  if (USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const id = `${passengerId}_${date}`;
        resolve(mockAttendanceData[id] || {
          passengerId,
          date,
          morningShift: 'pending',
          eveningShift: 'pending',
          updatedAt: Date.now(),
        });
      }, 500);
    });
  }

  // Real Firebase implementation would go here:
  // const docRef = doc(db, 'attendance', `${passengerId}_${date}`);
  // const docSnap = await getDoc(docRef);
  // return docSnap.exists() ? docSnap.data() as PassengerAttendance : defaultState;
  
  throw new Error("Firebase fetch not fully implemented without env vars");
};

export const updateAttendance = async (passengerId: string, date: string, shift: ShiftType, status: AttendanceStatus): Promise<void> => {
  if (USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const id = `${passengerId}_${date}`;
        const current = mockAttendanceData[id] || { passengerId, date, morningShift: 'pending', eveningShift: 'pending' };
        
        mockAttendanceData[id] = {
          ...current,
          [shift === 'morning' ? 'morningShift' : 'eveningShift']: status,
          updatedAt: Date.now(),
        };
        resolve();
      }, 500);
    });
  }

  // Real Firebase implementation:
  // const docRef = doc(db, 'attendance', `${passengerId}_${date}`);
  // await setDoc(docRef, { [`${shift}Shift`]: status, updatedAt: Date.now() }, { merge: true });
  
  throw new Error("Firebase update not fully implemented without env vars");
};
