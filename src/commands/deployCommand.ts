import { CommandModule } from "yargs";

import { applyConfig } from "../utils/applyConfig";
import { loadConfig } from "../utils/loadConfig";
import { generateServiceConfig } from "../utils/generateServiceConfig";
import { generateSourceConfig } from "../utils/generateSourceConfig";
import { generateSecretConfig } from "../utils/generateSecretConfig";

export const deployCommand: CommandModule = {
  command: "deploy",
  describe: "Deploy Knative FaaS function container",
  handler: async (args) => {
    const config = loadConfig();

    await applyConfig(generateSecretConfig(config.function));
    await applyConfig(generateServiceConfig(config.function));

    if (config.function.sources instanceof Array) {
      for (const source of config.function.sources) {
        await applyConfig(generateSourceConfig(config.function, source));
      }
    }
  },
};
