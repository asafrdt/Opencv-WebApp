import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB0cCimN1kc70x1U2XvqUroHSfPa4YLOxE",
  authDomain: "portfolio-6bf82.firebaseapp.com",
  databaseURL: "https://portfolio-6bf82.firebaseio.com",
  projectId: "portfolio-6bf82",
  storageBucket: "portfolio-6bf82.appspot.com",
  messagingSenderId: "932935092553",
  appId: "1:932935092553:web:2d5df40c668a2d54543298",
  measurementId: "G-E9NZM6MW14",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
