// news-image-20261118 — "The World in One Day" (Node 22, standard library only).
// The entry is a program that writes one image to /output/entry.png: it copies
// the poster stored beside this file. The poster itself is original artwork
// drawn for this entry: a broadsheet front page summing up Wednesday
// 18 November 2026 (Trump lands in Manila for Quad talks, Iran drones at a
// US radar in Bahrain, bridges under fire in Kyiv and Crimea, Nvidia's
// $115.8B beat with no Huang return, Canada–China trade deals, UK sanctions
// on settlement firms, Cyclone Akvan, plus two briefs).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const source = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(source, dest);
const sourceSize = statSync(source).size;
const destSize = statSync(dest).size;
if (sourceSize !== destSize) {
  throw new Error(
    `entry.png copy incomplete: expected ${sourceSize} bytes, got ${destSize} bytes`,
  );
}
