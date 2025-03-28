import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {providePrimeNG} from 'primeng/config';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {authInterceptor} from '../interceptors/auth.interceptor';
import {errorInterceptor} from '../interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withInterceptors([authInterceptor, errorInterceptor]),
      withFetch()
    ),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })]
};
