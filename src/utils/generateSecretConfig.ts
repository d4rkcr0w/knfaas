import { Function } from "../interfaces/Function";

export function generateSecretConfig(functionConfig: Function) {
  const name = functionConfig?.name;
  const namespace = functionConfig.namespace || "default";
  const environment = functionConfig.environment || {};

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
    },
    type: "Opaque",
    data,
  };
}
