import { App } from "../interfaces/App";
import { generateSecretConfig } from "./generateSecretConfig";
import { generateServiceConfig } from "./generateServiceConfig";
import { generateSourceConfig } from "./generateSourceConfig";

export function generateAppConfig(app: App) {
  return [
    generateSecretConfig(app),
    generateServiceConfig(app),
    ...app.sources.map((source) => generateSourceConfig(app, source)),
  ];
}
