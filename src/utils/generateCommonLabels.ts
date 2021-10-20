import { App } from "../interfaces/App";

export function generateCommonLabels(app: App) {
  return {
    "app.kubernetes.io/name": app.name,
    "app.kubernetes.io/instance": app.name,
    "app.kubernetes.io/managed-by": "KPaaS",
  };
}
