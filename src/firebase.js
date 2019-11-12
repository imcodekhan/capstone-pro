import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyDiXvnckPfD0omkfRZnu1SipxPUKO6LYWo",
  authDomain: "capstone-904d3.firebaseapp.com",
  databaseURL: "https://capstone-904d3.firebaseio.com",
  projectId: "capstone-904d3",
  storageBucket: "capstone-904d3.appspot.com",
  messagingSenderId: "85991109538",
  appId: "1:85991109538:web:58c57ad87e56e2d43778fb",
  measurementId: "G-Q219ND259T"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const orderRef = databaseRef;
