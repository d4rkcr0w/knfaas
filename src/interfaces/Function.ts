import { PingSource } from "./sources/PingSource";

export interface Function {
  name: string;
  namespace?: string;
  image: string;
  sources?: PingSource[];
  environment: Record<string, string>;
}
