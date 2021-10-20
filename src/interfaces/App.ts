import { PingSource } from "./sources/PingSource";

export interface App {
  name: string;
  namespace?: string;
  image: string;
  sources?: PingSource[];
  environment: Record<string, string>;
}
