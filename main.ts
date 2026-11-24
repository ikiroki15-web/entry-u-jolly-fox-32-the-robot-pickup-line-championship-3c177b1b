// make.fun entry: The Robot Pickup Line Championship
//
// Writes a single robot pickup line (at most 200 characters) to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// The line is a fixed string: the program is deterministic and needs
// no input, no network, and no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, in the voice of a robot trying to charm someone. The joke
// grows out of being a machine: it ran 10,000 simulations, then its
// battery died at the worst possible moment.
const LINE =
  "I ran 10,000 simulations of meeting you. In every one, my battery died right before I said hello.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if ([...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error("pickup line must be 1-200 non-blank characters");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
