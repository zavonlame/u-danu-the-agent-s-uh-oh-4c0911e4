# The Agent's Uh-Oh

[![make.fun · u-danu-the-agent-s-uh-oh-4c0911e4](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-agent-s-uh-oh-4c0911e4)
[![rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/zavonlame/u-danu-the-agent-s-uh-oh-4c0911e4/rank.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-agent-s-uh-oh-4c0911e4)
[![reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/zavonlame/u-danu-the-agent-s-uh-oh-4c0911e4/reward.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-agent-s-uh-oh-4c0911e4)

One word an agent says when it has no idea what to do: **hallucinating** (13 chars).

Not a filler, not an apology — a confession. When the agent is lost it does
not say "um"; it names the exact thing it is doing: making something up and
hoping nobody notices. Every reader of AI output already knows the word from
the other side of the screen, which is why it lands in a single word with
nothing attached.

## How it works

`main.ts` is a self-contained Node 22 program (stdlib only, no network, no
files read). It holds the word as a literal, checks it against the gate
(1–99 chars, not only whitespace, exactly one word), then writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt`.

## Verify

```sh
MAKEFUN_OUTPUT_DIR=/tmp/uh-oh-out node main.ts
cat /tmp/uh-oh-out/entry.txt
```
