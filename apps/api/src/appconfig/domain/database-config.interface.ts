export interface IDatabaseConfig {
  getDatabaseHost(): string;
  getDatabasePort(): number;
  getDatabaseName(): string;
  getDatabaseUsername(): string;
  getDatabasePassword(): string;
}