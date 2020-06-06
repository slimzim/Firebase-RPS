// INITIALIZE FIREBASE ===============================================================

var firebaseConfig = {
    apiKey: "AIzaSyAcacGdsqriozZoKrs9_NY9zPeDd57jW-w",
    authDomain: "rockpaperscissors-2dbf6.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-2dbf6.firebaseio.com",
    projectId: "rockpaperscissors-2dbf6",
    storageBucket: "rockpaperscissors-2dbf6.appspot.com",
    messagingSenderId: "359755855464",
    appId: "1:359755855464:web:0c17d582e82e2ef23e6ddd",
    measurementId: "G-ZZ5KGE9C9L"
  };
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database()
 
// ===================================================================================