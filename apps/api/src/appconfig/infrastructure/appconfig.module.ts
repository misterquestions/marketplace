import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
})
export class AppConfigModule {}
