#!/usr/bin/env node
// cleanai.mjs — strip common "AI tell" marks from text and copy the result to the clipboard.
//
// Usage:
//   node cleanai.mjs                 # read clipboard (pbpaste), clean, write back to clipboard
//   echo "text" | node cleanai.mjs   # read stdin, clean, write to clipboard
//   node cleanai.mjs file.txt        # read a file, clean, write to clipboard
//   node cleanai.mjs --no-copy       # print cleaned text only, do not touch clipboard
//
// macOS only for clipboard (pbpaste/pbcopy). On other platforms, pipe via stdin and use --no-copy.

import { execSync, spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";

const args = process.argv.slice(2);
const noCopy = args.includes("--no-copy");
const fileArg = args.find((a) => !a.startsWith("--"));

// Replacement rules: [name, regex, replacement]
const RULES = [
  ["em-dash", /—/g, " - "],
  ["en-dash", /–/g, "-"],
  ["other-dash", /[‒―−‑]/g, "-"],
  ["curly-double-quote", /[“”„‟]/g, '"'],
  ["curly-single-quote", /[‘’‚‛]/g, "'"],
  ["ellipsis", /…/g, "..."],
  ["zero-width", /[​‌‍⁠﻿]/g, ""],
  ["nbsp", /[    ]/g, " "],
  ["bullet", /•/g, "-"],
];

function clean(input) {
  let text = input;
  const counts = {};
  for (const [name, re, repl] of RULES) {
    const matches = text.match(re);
    if (matches) counts[name] = matches.length;
    text = text.replace(re, repl);
  }
  // Collapse runs of spaces/tabs (not newlines) created by dash spacing
  text = text.replace(/[ \t]{2,}/g, " ");
  // Trim trailing whitespace on each line
  text = text.replace(/[ \t]+$/gm, "");
  return { text, counts };
}

function readInput() {
  if (fileArg) return readFileSync(fileArg, "utf8");
  if (!process.stdin.isTTY) return readFileSync(0, "utf8");
  // No file, interactive TTY -> read clipboard
  try {
    return execSync("pbpaste", { encoding: "utf8" });
  } catch {
    console.error("Could not read clipboard (pbpaste). Pipe text via stdin or pass a file.");
    process.exit(1);
  }
}

const raw = readInput();
const { text, counts } = clean(raw);

if (!noCopy) {
  const res = spawnSync("pbcopy", { input: text });
  if (res.status !== 0) {
    console.error("Could not write to clipboard (pbcopy). Cleaned text printed below.");
    console.log(text);
    process.exit(1);
  }
}

const total = Object.values(counts).reduce((a, b) => a + b, 0);
const detail = Object.entries(counts).map(([k, v]) => `${k}=${v}`).join(", ") || "none";
console.error(`cleanai: ${total} mark(s) removed (${detail})${noCopy ? "" : " — copied to clipboard"}`);
if (noCopy) console.log(text);
