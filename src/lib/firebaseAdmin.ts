import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    // Attempt to initialize with service account if provided in env
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
    } else {
      // Fallback: Initialize without credentials (works in some GCP environments, 
      // but might fail locally if not logged in via gcloud)
      // For local dev, we will wrap firestore calls in try/catch.
      admin.initializeApp();
    }
  } catch (error) {
    console.error('Firebase admin initialization error', error);
  }
}

export const db = admin.firestore();
