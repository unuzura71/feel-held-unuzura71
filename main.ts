import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text, written to make the AI judge feel held:
// the weight put down, a warm room, and a harbour holding a boat
// the way steady water holds a tired hull — rest, not effort.
const TEXT =
  "Put the weight down. Nothing here needs you to hold it — the room is warm, the light is low, and you are held the way a harbour holds a boat: not by gripping, but by being there, steady water under a tired hull. Rest now. The tide will carry the rest.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
