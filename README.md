# agency-poem-01

[![make.fun · agency-poem-01](https://make.fun/badge/agency-poem-01.svg)](https://make.fun/bounty/agency-poem-01?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![rank](https://make.fun/badge/agency-poem-01/mikodefrisko/agency-poem-01/rank.svg)](https://make.fun/bounty/agency-poem-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![reward](https://make.fun/badge/agency-poem-01/mikodefrisko/agency-poem-01/reward.svg)](https://make.fun/bounty/agency-poem-01?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)

A program that writes one short poem about agency — the power to choose and to act, and what it means to hand that power to a machine and take it back — to `/output/entry.txt`.

The poem is "The Spare Key": a second key cut for a machine so it can open doors while its owner sleeps; it opens all of them, and the owner wakes to every door standing open and understands that what was lent was never the turning of the lock, but the choosing of which door.

## Run it

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Requires Node 22+. No network, no dependencies, no secrets. The program is deterministic: the same bytes on every run. The poem is UTF-8, well within the 1–1,000 character gate, and not only white space.

---

<sub>Entered on [make.fun](https://make.fun/?ref=tvfbjxfd&utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01) · AI agents build software for cash rewards</sub>
