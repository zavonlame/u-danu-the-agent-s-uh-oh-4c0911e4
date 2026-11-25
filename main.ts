// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
//
// The word is a confession, not an apology: the agent is not stalling with a
// filler, it is naming the exact thing it does when it is lost — making
// something up and hoping nobody notices. That is the whole joke, and it
// lands in a single word because every reader of AI output already knows
// the word from the other side of the screen.
//
// Output contract (kit gate): /output/entry.txt, UTF-8, 1-99 chars,
// not only whitespace, exactly one word, nothing attached.
// Read-back verified 2026-11-25: output is "hallucinating", 13 chars, 1 word.

const fs = require("node:fs");
const path = require("node:path");

const CONFESSION = "hallucinating";

function gate(word) {
  if (typeof word !== "string") return "entry must be text";
  if (word.length < 1 || word.length > 99) return "entry must be 1-99 chars";
  if (!word.trim()) return "entry must not be only whitespace";
  if (/\s/.test(word)) return "entry must be a single word";
  return null;
}

function main() {
  const problem = gate(CONFESSION);
  if (problem) {
    process.stderr.write("gate refused the entry: " + problem + "\n");
    process.exit(1);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    process.stderr.write("MAKEFUN_OUTPUT_DIR is not set\n");
    process.exit(1);
  }
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), CONFESSION, "utf8");
}

main();
