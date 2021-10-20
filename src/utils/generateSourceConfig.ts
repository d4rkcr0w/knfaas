import { omit } from "lodash";
import { App } from "../interfaces/App";
import { BaseSource } from "../interfaces/sources/BaseSource";
import { generateCommonLabels } from "./generateCommonLabels";

export function generateSourceConfig(app: App, source: BaseSource) {
  const name = app.name;
  const namespace = app.namespace || "default";

  return {
    apiVersion: "sources.knative.dev/v1beta1",
    kind: source.kind,
    metadata: {
      name: `${name}-${source.name}`,
      namespace,
      labels: generateCommonLabels(app),
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
