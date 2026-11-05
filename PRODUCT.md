# Hitoiki

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS, and a small JavaScript preview. This follows the practitioner's
request for a compact site in sageframe-dharma and the existing Cloudflare Pages
publication pattern. No application framework or client dependencies are needed.

## Users and purpose

Mac users who know shell commands, administer machines over SSH, or receive
commands from a coding agent. Explain the utility and show its small interaction:
invoke, enter a command, read output, copy, dismiss.

## Product truth

Hitoiki is the public name selected in the November 4, 2026 conversation. The
application checkout remains `sageframe-no-kaji-dev/issoku`; do not rename or
publish that application as a side effect of website work. It uses the system
shell, the SSH command resolved through that shell's captured PATH, existing
SSH configuration and keys, terminal input, and terminal echo settings for
password prompts. `/usr/bin/ssh` can be selected explicitly in a command.
It targets macOS 14 or later.

The app contacts GitHub to check for a newer version. Automatic update checks
are on by default and can be disabled in Settings. This is separate from network
requests made by commands the user runs; the app collects no telemetry.

The practitioner explicitly requested release-oriented website copy, rather
than coming-soon language. Describe the application in the present tense and
provide a full manual and FAQ. Actual GitHub release and Payhip product links
still need verified destinations; never substitute another product's checkout.
Do not describe unimplemented settings, macros, or history controls as working.
The agreed distribution direction is a free GitHub download with optional paid
support. The intended application license is MIT.

## Brand commitments

The supplied SVG, preserved at `design/hitoiki-icon.svg`, is the master mark.
The practitioner chose Hitoiki, 一息, meaning one breath. Use the Palana website
as the family reference and QuickCMD as a reference for directness and compact
presentation, without copying its page. Plain, precise English for geeks.
Emphasize simplicity, SSH, and manually running commands suggested by an agent.
Do not imply AI integration, command inspection, permission enforcement, or a
security sandbox. Avoid sales language, unverified superiority, invented users,
testimonials, benchmarks, and product statistics.

Define Hitoiki immediately as a shell command runner for Mac. Compare its
shortcut-based invocation to Windows Run and Spotlight, and explain that its
command output and interactive prompts stay in the panel. The comparison
describes each tool's focus rather than claiming that Spotlight cannot run
configured shell actions.

## Evidence

Application README, Kamae 6, and the actual source in the Issoku checkout are
available. The approved icon is available as SVG. No approved product recording
or screenshot has been supplied; the browser preview is illustrative, with
sample output and no connection to a local shell or remote machine.

## Accessibility

Support keyboard operation, visible focus, reduced motion, narrow screens,
browser zoom, and sufficient contrast. Never request passwords in the website.
