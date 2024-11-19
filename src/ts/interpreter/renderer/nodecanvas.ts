import { Canvas, CanvasRenderingContext2D, createCanvas } from "canvas";
import { Renderer } from ".";
import { Interpreter } from "..";
import { colorArrToRgb } from "../util";

export class NodeCanvasRenderer extends Renderer {
  private PIXEL_SIZE = 20;
  private context: CanvasRenderingContext2D;
  private canvas: Canvas;

  constructor(interpreter: Interpreter) {
    super(interpreter);

    this.canvas = createCanvas(0, 0);

    const context = this.canvas.getContext("2d");

    if (!context) throw new Error("Failed to get canvas context");

    this.context = context;
  }

  render() {
    this.resetPosition();

    this.canvas.width = this.interpreter.Size[0] * this.PIXEL_SIZE;
    this.canvas.height = this.interpreter.Size[1] * this.PIXEL_SIZE;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.interpreter.Memory.length; i++) {
      this.context.fillStyle = colorArrToRgb(
        this.interpreter.Depth[this.interpreter.Memory[i]]
      );

      this.context.fillRect(
        this.x * this.PIXEL_SIZE,
        this.y * this.PIXEL_SIZE,
        this.PIXEL_SIZE,
        this.PIXEL_SIZE
      );

      this.determineNextPosition();
    }
  }

  public export() {
    const image = this.canvas.toDataURL();

    return image;
  }
}
