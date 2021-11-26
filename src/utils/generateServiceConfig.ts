import { Function } from "../interfaces/Function";

export function generateServiceConfig(functionConfig: Function) {
  const name = functionConfig?.name;
  const image = functionConfig?.image;
  const namespace = functionConfig.namespace || "default";

  return {
    apiVersion: "serving.knative.dev/v1",
    kind: "Service",
    metadata: {
      name,
      namespace,
      annotations: {
        "knfaas.superboost.xyz/published-at": new Date(),
      },
    },
    spec: {
      template: {
        spec: {
          containers: [
            {
              image,
              envFrom: [{ secretRef: { name } }],
            },
          ],
        },
      },
    },
  };
}
