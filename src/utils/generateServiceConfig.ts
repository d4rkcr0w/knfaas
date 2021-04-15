import { Function } from "../interfaces/Function";

export function generateServiceConfig(functionConfig: Function) {
  const name = functionConfig?.name;
  const image = functionConfig?.image;
  const namespace = functionConfig.namespace || "default";
  const environment = functionConfig?.environment || {};
  const sources = functionConfig?.sources || [];

  return {
    apiVersion: "serving.knative.dev/v1",
    kind: "Service",
    metadata: {
      name,
      namespace,
    },
    spec: {
      template: {
        spec: {
          containers: [
            {
              image,
              imagePullPolicy: "Always",
              env: Object.entries(environment).map(([name, value]) => ({
                name,
                value,
              })),
            },
          ],
        },
      },
    },
  };
}
