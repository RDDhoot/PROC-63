import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyD_CaQgMu_A_W7lLDQn2croxwRlb9ZrQaw',
  authDomain: 'c-60pro.firebaseapp.com',
  databaseURL: 'https://c-60pro-default-rtdb.firebaseio.com',
  projectId: 'c-60pro',
  storageBucket: 'c-60pro.appspot.com',
  messagingSenderId: '32777408112',
  appId: '1:32777408112:web:b2edb62ac1ed8883d26eb5',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
