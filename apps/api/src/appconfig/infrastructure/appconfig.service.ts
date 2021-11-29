import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IAppConfig } from '../domain/app-config.interface';
import { IDatabaseConfig } from '../domain/database-config.interface';

@Injectable()
export class AppConfigService implements IAppConfig, IDatabaseConfig {
  constructor(private readonly configService: ConfigService) {}

  isProduction(): boolean {
    return (
      this.configService.get<string>('NODE_ENV', 'development') === 'production'
    );
  }

  getApplicationPort(): number {
    return this.configService.get<number>('PORT', 3000);
  }

  getApplicationPublicURL(): string {
    return this.configService.get<string>('PUBLIC_URL');
  }

  getDatabaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }

  getDatabasePort(): number {
    return this.configService.get<number>('DATABASE_PORT');
  }

  getDatabaseName(): string {
    return this.configService.get<string>('DATABASE_NAME');
  }

  getDatabaseUsername(): string {
    return this.configService.get<string>('DATABASE_USER');
  }

  getDatabasePassword(): string {
    return this.configService.get<string>('DATABASE_PASSWORD');
  }
}
