import { App } from "../interfaces/App";
import { generateCommonLabels } from "./generateCommonLabels";

export function generateSecretConfig(app: App) {
  const name = app.name;
  const namespace = app.namespace || "default";
  const environment = app.environment || {};

  const data: Record<string, string> = {};

  Object.entries(environment).forEach(([key, value]) => {
    data[key] = Buffer.from(value).toString("base64");
  });

  return {
    apiVersion: "v1",
    kind: "Secret",
    metadata: {
      name,
      namespace,
      labels: generateCommonLabels(app),
    },
    type: "Opaque",
    data,
  };
}
