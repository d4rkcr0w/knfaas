import { App } from "../interfaces/App";
import { generateCommonLabels } from "./generateCommonLabels";

export function generateServiceConfig(app: App) {
  const name = app.name;
  const image = app.image;
  const namespace = app.namespace || "default";
  const environment = app.environment || {};

  return {
    apiVersion: "serving.knative.dev/v1",
    kind: "Service",
    metadata: {
      name,
      namespace,
      labels: generateCommonLabels(app),
    },
    spec: {
      template: {
        spec: {
          containers: [
            {
              image,
              imagePullPolicy: "Always",
              env: Object.keys(environment).map((key) => {
                return {
                  name: key,
                  valueFrom: {
                    secretKeyRef: {
                      name,
                      key,
                    },
                  },
                };
              }),
            },
          ],
        },
      },
    },
  };
}
