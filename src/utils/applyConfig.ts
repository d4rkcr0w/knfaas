import { spawn } from "child_process";
import { dump } from "js-yaml";

export async function applyConfig(...specs: any[]) {
  return new Promise((resolve) => {
    const childProcess = spawn("kubectl", ["apply", "-f", "-"]);

    childProcess.stdout.on("data", (data) => console.log(data.toString()));
    childProcess.stderr.on("data", (data) => console.error(data.toString()));
    childProcess.on("close", resolve);

    console.log("specs", specs);

    childProcess.stdin.write(
      specs.map((spec) => dump(spec, { sortKeys: true })).join("---\n")
    );

    childProcess.stdin.end();
  });
}
