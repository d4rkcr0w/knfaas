import { BaseSource } from "./BaseSource";

export interface PingSource extends BaseSource {
  schedule: string;
  jsonData: string;
}
