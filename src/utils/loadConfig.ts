import fs from "fs";
import yaml from "js-yaml";
import { resolve } from "path";
import { App } from "../interfaces/App";

export function loadConfig(
  path: string = resolve(process.cwd(), "./kpaas.yaml")
): { app: App } {
  return yaml.load(fs.readFileSync(path, "utf8")) as { app: App };
}
