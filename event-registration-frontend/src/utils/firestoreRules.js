/**
 * Firestore Security Rules for EventHub
 * 
 * This file contains the recommended security rules for the EventHub application.
 * These rules should be implemented in your Firebase console.
 */

export const firestoreRules = `
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access to all events
    match /events/{eventId} {
      allow read: if true;
      
      // Only allow write operations if the user is authenticated
      allow create: if request.auth != null;
      
      // Only allow updates and deletes if the user is the organizer or an admin
      allow update, delete: if request.auth != null && 
                              (resource.data.organizerId == request.auth.uid || 
                               get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }
    
    // User profiles - only the user can read/write their own profile, admins can read all
    match /users/{userId} {
      allow read: if request.auth != null && 
                    (request.auth.uid == userId || 
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Event registrations - users can read/write their own registrations
    match /registrations/{registrationId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
      allow update, delete: if request.auth != null && resource.data.userId == request.auth.uid;
    }
  }
}
`;

/**
 * How to Implement Firestore Rules:
 * 
 * 1. Go to your Firebase console (https://console.firebase.google.com/)
 * 2. Select your project: "eventhub-databutton"
 * 3. Navigate to Firestore Database in the left sidebar
 * 4. Click on the "Rules" tab
 * 5. Replace the existing rules with the ones above
 * 6. Click "Publish"
 * 
 * Rules Explanation:
 * 
 * Events Collection:
 * - Anyone can read event data (public events listing)
 * - Only authenticated users can create events
 * - Only the event organizer or admin users can update or delete events
 * 
 * Users Collection:
 * - Users can only read/write their own profile data
 * - Admin users can read all user profiles
 * 
 * Registrations Collection:
 * - Users can view all registrations (needed to see who's attending)
 * - Users can only create registrations for themselves
 * - Users can only update/delete their own registrations
 */