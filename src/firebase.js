import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyDv9ofnt2edgenY-Rtbbcyfffiaqs2lTOg",
    authDomain: "m-city-55934.firebaseapp.com",
    databaseURL: "https://m-city-55934.firebaseio.com",
    projectId: "m-city-55934",
    storageBucket: "m-city-55934.appspot.com",
    messagingSenderId: "269558778023"
  };
  firebase.initializeApp(config);

  const firebaseDB=firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions=firebaseDB.ref('promotions');
  const firebaseTeams= firebaseDB.ref('teams');
  const firebasePlayers= firebaseDB.ref('players');

  export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
  }
