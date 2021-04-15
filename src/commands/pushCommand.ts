import { CommandModule } from "yargs";
import { loadConfig } from "../utils/loadConfig";
import { spawn } from "child_process";

export const pushCommand: CommandModule = {
  command: "push",
  describe: "Push Knative FaaS function container to remote registry",
  handler: (args) => {
    const config = loadConfig();

    const image = config.function.image;

    return new Promise((resolve) => {
      const childProcess = spawn("docker", ["push", image]);

      childProcess.stdout.on("data", (data) => console.log(data.toString()));
      childProcess.stderr.on("data", (data) => console.error(data.toString()));
      childProcess.on("close", resolve);
    });
  },
};
