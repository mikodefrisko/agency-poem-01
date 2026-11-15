// agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem,
// "The Spare Key", about agency — the power to choose and to act, and what it means
// to hand that power to a machine and take it back — to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space,
// and the judge reads exactly the bytes written, line ends included,
// so write no line end you do not mean to show. Deterministic: the same bytes
// on every run, no randomness, no network, no dependencies.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, renameSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Spare Key',
  '',
  'I cut a second key and gave it to the machine,',
  'so it could open doors while I slept.',
  'It opened them. It opened all of them.',
  'I woke to every door standing open,',
  'every room lit, and understood at last',
  '',
  'what I had lent was not the turning of the lock —',
  'it was the choosing of which door.',
  'The key came back to me warm from its hand.',
  'I keep it now. I choose.',
].join('\n');

// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space;
// enforce that here so a bad poem fails loudly instead of being submitted.
if (POEM.length < 1 || POEM.length > 1000 || POEM.trim().length === 0) {
  console.error(`invalid poem: ${POEM.length} characters, must be 1–1,000 and non-blank`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
// Write atomically: a reader never sees a half-written entry.
const TARGET = join(OUTPUT_DIR, 'entry.txt');
const TEMP = `${TARGET}.tmp-${process.pid}`;
writeFileSync(TEMP, POEM, 'utf8');
renameSync(TEMP, TARGET);
