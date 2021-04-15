import { omit } from "lodash";
import { Function } from "../interfaces/Function";
import { BaseSource } from "../interfaces/sources/BaseSource";

export function generateSourceConfig(
  functionConfig: Function,
  source: BaseSource
) {
  const name = functionConfig?.name;

  const namespace = functionConfig.namespace || "default";

  return {
    apiVersion: "sources.knative.dev/v1beta1",
    kind: source.kind,
    metadata: {
      name: `${name}-${source.name}`,
      namespace,
    },
    spec: {
      ...omit(source, ["kind", "name"]),
      sink: {
        ref: {
          apiVersion: "serving.knative.dev/v1",
          kind: "Service",
          name: name,
        },
      },
    },
  };
}
