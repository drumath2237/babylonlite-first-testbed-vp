import {
  addToScene,
  attachControl,
  createBox,
  createDefaultCamera,
  createDirectionalLight,
  createEngine,
  createSceneContext,
  createStandardMaterial,
  registerScene,
  startEngine,
} from "@babylonjs/lite";
import "./style.css";

async function main() {
  const renderCanvas = document.getElementById("renderCanvas");
  if (!(renderCanvas instanceof HTMLCanvasElement)) {
    return;
  }

  const engine = await createEngine(renderCanvas);
  const scene = createSceneContext(engine);

  const camera = createDefaultCamera(scene);
  attachControl(camera, renderCanvas, scene);

  const light = createDirectionalLight([-0.5, -1, 2]);
  addToScene(scene, light);

  const box = createBox(engine, 0.3);
  // box.position.set(0, 0, 1);
  box.material = createStandardMaterial();
  addToScene(scene, box);

  await registerScene(scene);
  await startEngine(engine);
}

await main();
