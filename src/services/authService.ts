import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';

type Role = 'driver' | 'passenger';

// Creates a login account 
export async function registerUser(
  email: string,
  password: string,
  profile: { name: string; mobile: string; role: Role }
) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  const uid = cred.user.uid; 

  await setDoc(doc(db, 'users', uid), {
    uid,
    name: profile.name,
    email,
    mobile: profile.mobile,
    role: profile.role,
    createdAt: serverTimestamp(),
  });

  return uid;
}

// Saves the driver's vehicle info, using the SAME uid 
export async function saveVehicleProfile(
  uid: string,
  vehicle: {
    vehicleNumber: string;
    nickname: string;
    routeTags: string[];
    contactNumber: string;
    whatsappLink?: string;
  }
) {
  await setDoc(doc(db, 'vehicles', uid), {
    driverId: uid,
    ...vehicle,
    createdAt: serverTimestamp(),
  });
}

// Saves passenger details
export async function savePassengerProfile(
  uid: string,
  passenger: {
    name: string;
    email?: string;
    phone?: string;
    pickupLocation?: string;
    dropLocation?: string;
  }
) {
  await setDoc(doc(db, 'passengers', uid), {
    uid,
    ...passenger,
    createdAt: serverTimestamp(),
  });
}