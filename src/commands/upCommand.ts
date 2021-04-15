import { CommandModule } from "yargs";
import { loadConfig } from "../utils/loadConfig";
import { spawn } from "child_process";

export const upCommand: CommandModule = {
  command: "up",
  describe: "Build, push and deploy Knative function container",
  handler: (argv) => {
    const config = loadConfig();

    const image = config.function.image;

    const childProcess = spawn("docker", ["push", image]);

    childProcess.stdout.on("data", (data) => console.log(data.toString()));
    childProcess.stderr.on("data", (data) => console.error(data.toString()));
  },
};
