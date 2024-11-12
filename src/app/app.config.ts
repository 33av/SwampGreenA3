// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
// };

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Certifique-se de que o caminho esteja correto
import { provideClientHydration } from '@angular/platform-browser';
// import { provideForms } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
// import { Router } from 'express';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), // Aqui você está fornecendo as rotas
    provideClientHydration(),
    // provideForms(),
    provideHttpClient()
  ]
};