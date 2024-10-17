import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent, appConfig } from './app/app.component'; // Asegúrate de que el appConfig contenga las rutas
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router'; // Importa provideRouter
import { routes } from './app/app.routes'; // Importa tus rutas
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBDuzuAQHH8z-BE7Lq2MMUDWfpIsevUAbI",
      authDomain: "labo4-pp-30f81.firebaseapp.com",
      projectId: "labo4-pp-30f81",
      storageBucket: "labo4-pp-30f81.appspot.com",
      messagingSenderId: "307938924390",
      appId: "1:307938924390:web:cac78df9f6fa24a3fe5aa7"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideRouter(routes), // Asegúrate de agregar el enrutador aquí

  ]
});
