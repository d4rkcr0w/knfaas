import { CommandModule } from "yargs";
import { loadConfig } from "../utils/loadConfig";
import { deleteConfig } from "../utils/deleteConfig";
import { generateAppConfig } from "../utils/generateAppConfig";

export const deleteCommand: CommandModule = {
  command: "delete",
  describe: "Delete deployed KPaaS app",
  handler: async (args) => {
    const config = loadConfig();

    await deleteConfig(...generateAppConfig(config.app));
  },
};
