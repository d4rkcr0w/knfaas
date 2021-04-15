import { CommandModule } from "yargs";
import { loadConfig } from "../utils/loadConfig";
import { spawn } from "child_process";

export const pushCommand: CommandModule = {
  command: "push",
  describe: "Push Knative FaaS function container to remote registry",
  handler: (argv) => {
    const config = loadConfig();

    const image = config.function.image;

    const childProcess = spawn("kubectl", ["delete", "-f"]);

    childProcess.stdout.on("data", (data) => console.log(data.toString()));
    childProcess.stderr.on("data", (data) => console.error(data.toString()));
  },
};
