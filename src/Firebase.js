import firebase from 'firebase/app';  // importa a plataformna firebase //
import 'firebase/firestore';  // importa o banco de dados Firestore //
import 'firebase/auth';  // importa o Authentication do Firebase // 

const firebaseConfig = {  // Colocar dados de configuracao obtidos na plataforma Firebase //
  apiKey: "REACT_APP_FIREBASE_API_KEY",
  authDomain: " REACT_APP_FIREBASE_AUTH_DOMAIN",
  projectId: "REACT_APP_FIREBASE_PROJECTED_ID",
  storageBucket: "REACT_APP_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
  appId: "REACT_APP_FIREBASE_APP_ID"
  };

  // Inicializacao do Firebase
  if(!firebase.apps.length){ // Condicao: se firebase nao foi inicializado, então inicializa //
    firebase.initializeApp(firebaseConfig);
}

export default firebase; // Em outro uso, depois de verificar que foi inicializado, 
// apenas exporta o mesmo arquivo ou objeto inicializado
