import yargs from "yargs";
import { buildCommand } from "./commands/buildCommand";
import { pushCommand } from "./commands/pushCommand";
import { deployCommand } from "./commands/deployCommand";
import { upCommand } from "./commands/upCommand";
import { deleteCommand } from "./commands/deleteCommand";

yargs
  .scriptName("knfaas")
  .demandCommand(1)
  .help("h")
  .alias("h", "help")
  .alias("v", "version")
  .strict();

yargs.command(buildCommand);
yargs.command(pushCommand);
yargs.command(deployCommand);
yargs.command(upCommand);
yargs.command(deleteCommand);

yargs.argv;
