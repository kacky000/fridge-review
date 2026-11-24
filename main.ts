import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An alien tourist's review of Earth, built on one ordinary ritual: staring into the fridge.
const review =
  "Three stars. Pleasant planet, but every household keeps a cold, lit cabinet that the natives open, gaze into, close, and reopen minutes later, as if it might have changed its mind.";

const limit = 200;
if ([...review].length > limit) throw new Error(`review is ${[...review].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), review);
