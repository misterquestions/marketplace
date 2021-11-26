export interface IAppConfig {
  isProduction(): boolean;
  getDatabaseHost(): string;
  getDatabasePort(): number;
  getDatabaseName(): string;
  getDatabaseUsername(): string;
  getDatabasePassword(): string;
}