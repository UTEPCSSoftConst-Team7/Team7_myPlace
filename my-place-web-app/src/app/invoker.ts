import { Command } from "./command";

export class Invoker {
  private commandInvoker!: Command;

  constructor() {}

  setCommand(command: Command) {
    this.commandInvoker = command
  }

  run() {
    if (this.commandInvoker != null) {
      this.commandInvoker.execute();
    }
    else {
      console.log("Command not set")
    }
  }
}
