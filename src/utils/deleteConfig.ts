import { spawn } from "child_process";
import { dump } from "js-yaml";

export async function deleteConfig(spec: object) {
  return new Promise((resolve) => {
    const childProcess = spawn("kubectl", ["delete", "-f", "-"]);

    childProcess.stdout.on("data", (data) => console.log(data.toString()));
    childProcess.stderr.on("data", (data) => console.error(data.toString()));
    childProcess.on("close", resolve);

    childProcess.stdin.write(dump(spec));
    childProcess.stdin.end();
  });
}
