import { CommandModule } from "yargs";

import { buildCommand } from "./buildCommand";
import { pushCommand } from "./pushCommand";
import { deployCommand } from "./deployCommand";

export const upCommand: CommandModule = {
  command: "up",
  describe: "Build, push and deploy Knative function container",
  handler: async (args) => {
    await buildCommand.handler(args);
    await pushCommand.handler(args);
    await deployCommand.handler(args);
  },
};
