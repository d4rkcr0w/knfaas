import { spawn } from "child_process";
import { dump } from "js-yaml";

export async function remove(spec: object) {
  const childProcess = spawn("kubectl", ["delete", "-f", "-"]);

  childProcess.stdout.on("data", (data) => console.log(data.toString()));
  childProcess.stderr.on("data", (data) => console.error(data.toString()));

  childProcess.stdin.write(dump(spec));
  childProcess.stdin.end();
}
