import firebase from 'firebase/app';  // importa a plataformna firebase //
import 'firebase/firestore';  // importa o banco de dados Firestore //
import 'firebase/auth';  // importa auth // 

const firebaseConfig = {  // Colocar dados de configuracao obtidos na plataforma Firebase //
    apiKey: "XX_xx",
    authDomain: "projetoead-xx.firebaseapp.com",
    projectId: "projetoead-xx",
    storageBucket: "projetoead-xx.appspot.com",
    messagingSenderId: "000333",
    appId: "0000"
  };

  // Inicializacao do Firebase
  if(!firebase.apps.length){ // Condicao: se firebase nao foi inicializado, então inicializa //
    firebase.initializeApp(firebaseConfig);
}

export default firebase; // Em outro uso, depois de verificar que foi inicializado, 
// apenas exporta o mesmo arquivo ou objeto inicializado
