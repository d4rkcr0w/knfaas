import fs from "fs";
import yaml from "js-yaml";
import { resolve } from "path";
import { Function } from "../interfaces/Function";

export function loadConfig(
  path: string = resolve(process.cwd(), "./knfaas.yaml")
): { function: Function } {
  return yaml.load(fs.readFileSync(path, "utf8")) as { function: Function };
}
