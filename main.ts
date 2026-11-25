// Laugh Track: The Crypto Trading Joke Contest
// Writes one crypto-trading joke — a single line, under 200 characters —
// to /output/entry.txt. Deterministic: the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The chart said 'buy the dip' so I did — seven dips later, I'm the dip.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
