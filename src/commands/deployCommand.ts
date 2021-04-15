import { CommandModule } from "yargs";

import { apply } from "../utils/apply";
import { loadConfig } from "../utils/loadConfig";
import { generateServiceConfig } from "../utils/generateServiceConfig";
import { generateSourceConfig } from "../utils/generateSourceConfig";

export const deployCommand: CommandModule = {
  command: "deploy",
  describe: "Deploy Knative FaaS function container",
  handler: async (argv) => {
    const config = loadConfig();

    await apply(generateServiceConfig(config.function));

    if (config.function.sources instanceof Array) {
      for (const source of config.function.sources) {
        await apply(generateSourceConfig(config.function, source));
      }
    }
  },
};
