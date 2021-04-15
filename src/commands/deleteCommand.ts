import { CommandModule } from "yargs";
import { loadConfig } from "../utils/loadConfig";
import { generateServiceConfig } from "../utils/generateServiceConfig";
import { generateSourceConfig } from "../utils/generateSourceConfig";
import { deleteConfig } from "../utils/deleteConfig";

export const deleteCommand: CommandModule = {
  command: "delete",
  describe: "Delete deployed Knative FaaS function",
  handler: async (args) => {
    const config = loadConfig();

    await deleteConfig(generateServiceConfig(config.function));

    if (config.function.sources instanceof Array) {
      for (const source of config.function.sources) {
        await deleteConfig(generateSourceConfig(config.function, source));
      }
    }
  },
};
