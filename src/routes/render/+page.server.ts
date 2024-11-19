import { Interpreter } from "../../ts/interpreter";
import { NodeCanvasRenderer } from "../../ts/interpreter/renderer/nodecanvas";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async (event) => {
    const data = await event.request.formData();

    let script = data.get("script") as string;

    try {
      const interpreter = new Interpreter(script || "", NodeCanvasRenderer);
      await interpreter.Execute();

      const renderer = interpreter.renderer as NodeCanvasRenderer;

      return {
        success: true,
        image: renderer.export(),
        script,
      };
    } catch (e) {
      return {
        success: false,
        image: "banana",
        script,
      };
    }
  },
};
