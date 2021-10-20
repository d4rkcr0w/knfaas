import { CommandModule } from "yargs";

import { buildCommand } from "./buildCommand";
import { pushCommand } from "./pushCommand";
import { deployCommand } from "./deployCommand";

export const createCommand: CommandModule = {
  command: "create",
  describe: "Build, push and deploy KPaaS app container",
  handler: async (args) => {
    await buildCommand.handler(args);
    await pushCommand.handler(args);
    await deployCommand.handler(args);
  },
};
