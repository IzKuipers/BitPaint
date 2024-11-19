import { Interpreter } from "..";

export class Renderer {
  x = 0;
  y = 0;
  interpreter: Interpreter;

  constructor(interpreter: Interpreter) {
    this.interpreter = interpreter;
  }

  render() {
    // PLACEHOLDER
  }

  determineNextPosition() {
    this.x++;

    if (this.x >= this.interpreter.Size[0]) {
      this.x = 0;
      this.y++;
    }

    return [this.x, this.y];
  }

  resetPosition() {
    this.x = 0;
    this.y = 0;
  }
}
