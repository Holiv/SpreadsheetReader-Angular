import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { inject } from '@vercel/analytics';

inject();

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));