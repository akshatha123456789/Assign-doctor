import { enableProdMode, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
import { bootstrapApplication, enableDebugTools } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// if (environment.production) {
//   enableProdMode();
// }

bootstrapApplication(AppComponent)



// platformBrowserDynamic().bootstrapModule(AppModule)



