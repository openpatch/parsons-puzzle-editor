import { ParsonsUI } from "./lib/ParsonsUI";
import { ParsonsSettings } from "./@types/types";
import { deserializeState, serializeState } from "./lib/serde";
import "./style.less";

export const build = (selector: string, settings: ParsonsSettings): ParsonsUI =>
  new ParsonsUI(selector, settings);

export { serializeState, deserializeState };

export default build;
