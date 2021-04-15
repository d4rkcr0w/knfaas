import { CommandModule } from "yargs";
import { loadConfig } from "../utils/loadConfig";
import { spawn } from "child_process";

export const buildCommand: CommandModule = {
  command: "build",
  describe: "Build Knative FaaS function container",
  handler: async (args) => {
    const config = loadConfig();

    const image = config.function.image;

    return new Promise((resolve) => {
      const childProcess = spawn("docker", ["build", "-t", image, "."]);

      childProcess.stdout.on("data", (data) => console.log(data.toString()));
      childProcess.stderr.on("data", (data) => console.error(data.toString()));
      childProcess.on("close", resolve);
    });
  },
};
