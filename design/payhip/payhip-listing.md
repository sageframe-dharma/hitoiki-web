# Payhip listing — Hitoiki

Copy for the Payhip product page, modelled on m4Bookmaker's. Paste the fields
below into Payhip; upload the images in this folder in their numbered order.

## Product

- **Name:** Hitoiki
- **Price:** $6.00
- **File:** `hitoiki-<version>.dmg` — the signed, notarized, stapled DMG from
  `scripts/build_macos.sh --dmg` in the application repository (`dist/`).
- **Variants:** none (Mac only).

## Images (1536 × 1024, 3:2)

1. `1-hitoiki-cover.png` — icon, name, tagline, and the panel after `ls -la -G`
2. `2-hitoiki-ssh.png` — the panel after an SSH command
3. `3-hitoiki-history.png` — the history list
4. `4-hitoiki-settings.png` — the settings window
5. `5-hitoiki-menu.png` — the menu bar item

## Description

Hitoiki is a command runner for Mac. Press a shortcut, type a command, see the
output, and dismiss the panel. Commands run locally or over SSH with your own
shell, configuration and keys, and there is no terminal window to manage.

macOS 14 (Sonoma) or later

https://hitoiki.sageframe.net/

**v1.0.0**

This is the signed, notarized app, ready to install. Hitoiki is open source
under the MIT license, and building it yourself is free. What you pay for is
that convenience, and it supports continued development. Both are the same code.

No account, no activation, no telemetry. Hitoiki asks GitHub once a day for the
latest version number and can be told not to.

## What's in 1.0.0

- A floating panel on `Control-Command-Space` that runs one shell command and
  shows its output and exit status.
- SSH with your existing `~/.ssh/config`, keys and agent; password prompts in
  the panel; an offered `-tt` retry when remote sudo needs a terminal.
- Nine macros on `Command-1` to `Command-9`.
- Optional command history, off by default.
- Open in Terminal, with Terminal.app, Ghostty, iTerm2, Kitty, WezTerm or Alacritty.
- An optional menu bar item and Open at Login.
