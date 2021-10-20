import { CommandModule } from "yargs";

import { applyConfig } from "../utils/applyConfig";
import { loadConfig } from "../utils/loadConfig";
import { generateAppConfig } from "../utils/generateAppConfig";

export const deployCommand: CommandModule = {
  command: "deploy",
  describe: "Deploy KPaaS app",
  handler: async (args) => {
    const config = loadConfig();

    await applyConfig(...generateAppConfig(config.app));
  },
};
