import { CommandModule } from "yargs";
import { loadConfig } from "../utils/loadConfig";
import { generateServiceConfig } from "../utils/generateServiceConfig";
import { generateSourceConfig } from "../utils/generateSourceConfig";
import { remove } from "../utils/remove";

export const removeCommand: CommandModule = {
  command: "remove",
  describe: "Remove deployed Knative FaaS function",
  handler: async (argv) => {
    const config = loadConfig();

    await remove(generateServiceConfig(config.function));

    if (config.function.sources instanceof Array) {
      for (const source of config.function.sources) {
        await remove(generateSourceConfig(config.function, source));
      }
    }
  },
};
