export interface IAppConfig {
  isProduction(): boolean;
  getApplicationPort(): number;
  getApplicationPublicURL(): string;
}