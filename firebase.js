// firebase.js (this file MUST be separate, not inline)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMSgMWERSKOC4ochM2hvOcIqzFq1PXHTM",
  authDomain: "standfix-kitchen-fce08.firebaseapp.com",
  projectId: "standfix-kitchen-fce08",
  storageBucket: "standfix-kitchen-fce08.firebasestorage.app",
  messagingSenderId: "135835598826",
  appId: "1:135835598826:web:48cd8163520c1d519b3c93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export for use in other files
export const db = getFirestore(app);
export const storage = getStorage(app);
