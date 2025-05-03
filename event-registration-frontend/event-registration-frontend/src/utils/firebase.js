import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  Timestamp
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCYbUEIimAULgniH_co1KcPNqgRfUOArY4",
  authDomain: "event-hub-d6789.firebaseapp.com",
  projectId: "event-hub-d6789",
  storageBucket: "event-hub-d6789.firebasestorage.app",
  messagingSenderId: "410601434367",
  appId: "1:410601434367:web:43f6b16641ecd704f3f0ca"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// -------------------- Event Functions -------------------- //

// Get all events
export const getEvents = async () => {
  const eventsRef = collection(db, 'events');
  const snapshot = await getDocs(eventsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Get upcoming events (sorted by date ascending)
export const getUpcomingEvents = async (max = 10) => {
  const now = Timestamp.now();
  const q = query(
    collection(db, 'events'),
    where('date', '>=', now),
    orderBy('date', 'asc'),
    limit(max)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Add a new event
export const addEvent = async (eventData) => {
  const docRef = await addDoc(collection(db, 'events'), {
    ...eventData,
    createdAt: Timestamp.now(),
  });
  return { id: docRef.id, ...eventData };
};

// Update an event by ID
export const updateEvent = async (eventId, eventData) => {
  const eventRef = doc(db, 'events', eventId);
  await updateDoc(eventRef, eventData);
  return { id: eventId, ...eventData };
};

// Delete an event by ID
export const deleteEvent = async (eventId) => {
  const eventRef = doc(db, 'events', eventId);
  await deleteDoc(eventRef);
};
