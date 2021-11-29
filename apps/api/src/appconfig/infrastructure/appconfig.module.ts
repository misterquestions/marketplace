import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './appconfig.service';
import { appConfigSchema } from './appconfig.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: appConfigSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
