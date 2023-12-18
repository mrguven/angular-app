import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { ServiceModule } from './service/service.module';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(), ServiceModule
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
