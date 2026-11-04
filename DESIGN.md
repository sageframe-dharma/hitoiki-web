---
name: Hitoiki
description: Warm, compact presentation for a small Mac command panel.
colors:
  ground: "#faf7f3"
  ground-deep: "#f0ece3"
  ink: "#283026"
  muted: "#555d50"
  accent: "#4f6947"
  accent-deep: "#3f5539"
  rule: "#d7d5ca"
  panel: "#fdfbf7"
  selection: "#d7e0d1"
  example-selected: "#e5e9df"
  example-selected-ink: "#354a2e"
  command-entry: "#f1f1ec"
  control-border: "#bdc5b7"
  control-hover: "#e6eadf"
  panel-rule: "#e5e5db"
  icon-ground: "#d9cfba"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "1.65rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  lede:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.65
  action:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 500
    lineHeight: 1.65
  control:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.65
  command:
    fontFamily: "ui-monospace, \"SF Mono\", SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.86rem"
    fontWeight: 400
    lineHeight: 1.5
  transcript:
    fontFamily: "ui-monospace, \"SF Mono\", SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  compact: "3px"
  control: "4px"
  panel: "11px"
spacing:
  small: "0.65rem"
  base: "1rem"
  medium: "1.5rem"
  large: "2rem"
  section: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ground}"
    typography: "{typography.action}"
    rounded: "{rounded.compact}"
    padding: "0.65rem 1.05rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.ground}"
  example-selector:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.compact}"
    padding: "0.45rem 0.8rem"
  example-selector-selected:
    backgroundColor: "{colors.example-selected}"
    textColor: "{colors.example-selected-ink}"
  button-run:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0.35rem 0.65rem"
  button-run-hover:
    backgroundColor: "{colors.control-hover}"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.control}"
    padding: "0.15rem 0.2rem"
  command-panel:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
  command-entry:
    backgroundColor: "{colors.command-entry}"
    padding: "1rem"
  command-examples:
    backgroundColor: "{colors.ground-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.compact}"
    padding: "1rem 1.1rem"
  release-container:
    backgroundColor: "{colors.ground-deep}"
    rounded: "{rounded.compact}"
    padding: "2.5rem"
  navigation-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "0.4rem 0"
---

# Design System: Hitoiki

## Overview

**Creative North Star: "A small native command panel"**

Hitoiki belongs to the warm, simple Palana visual family. Native system typography, green ink, warm grounds, and the supplied Hitoiki mark make the website feel related to the Mac utility. QuickCMD informs the compactness and direct presentation; the page uses its own code and approved asset.

The system is flat, quiet, and precise. Fine rules separate information, small controls keep the interaction compact, and one softly raised command panel represents the application. Plain technical copy and literal command text carry the explanation without decorative illustration.

**Key Characteristics:**

- Warm light surfaces with one sage interaction accent.
- Native system sans for prose and headings; system monospace for commands and output.
- Compact controls, fine rules, and restrained corner radii.
- The supplied icon remains the identity asset.

## Colors

Warm off-white surfaces and green-tinted neutrals support a single sage accent. The frontmatter records the exact source values from `public/site.css` and the approved SVG; token names below describe their use.

### Primary

- Sage (`accent`) identifies links, the primary action, the prompt, and completed status; Deep Sage (`accent-deep`) is the primary action's hover state.
- Selected Example Ground and Selected Example Ink distinguish the pressed example selector. Control Hover Ground is the run control's hover fill, and Text Selection is the browser text-selection fill.

### Neutral

- Warm Ground is the page canvas. Warm Inset groups command examples and release information without elevation.
- Green Ink is the main text and the icon's mark. Muted Ink carries secondary prose, navigation, captions, and metadata.
- Panel Ground is the transcript and control surface. Command Entry Ground separates the command row from the transcript.
- Warm Rule divides page sections; Panel Rule divides the preview footer; Control Border gives the small run control a visible edge.
- Icon Ground belongs to the supplied mark. Preserve the asset instead of recoloring it to match a nearby surface.

**The Sage Interaction Rule.** Use sage for links, actions, selected examples, and command status; keep prose in ink or muted ink.

## Typography

The system sans stack serves both headings and prose; the system monospace stack serves commands, output, and the prompt. These are the user-pinned Palana-family choices. The exact stacks and hierarchy are normative in the frontmatter.

- Display is the main heading, with a tight line height and slightly negative tracking. Below the wide layout, its responsive size becomes `clamp(2.5rem, 7vw, 3.5rem)`.
- Headline is the section heading; Title is the smaller technical-note heading. Both use semibold system text rather than a separate display family.
- Body is the reading text, normally limited to a measure of `62ch`. The introduction uses Lede; navigation uses Label; primary links styled as buttons use Action; preview controls use Control.
- Command is the command-entry text; Transcript is output, with tabular numerals, preserved line breaks, and wrapping. Small command examples use a further compact size (`0.76rem`), while inline prose code is relative to its surrounding text (`0.86em`).

**The Native Type Rule.** Preserve the pinned system font stacks; do not substitute a display face or load a web font.

## Layout

The page container has a maximum width of `74rem`, centered with fluid gutters of `clamp(1.25rem, 4vw, 3rem)`. The wide layout pairs two columns in a `0.86fr / 1.14fr` ratio, separated by a `3rem` gap. The type measure and container width are independent, so long prose remains bounded inside the wider layout.

At widths from `900px` through `1080px`, the column ratio becomes `0.9fr / 1.1fr`, the gap becomes `2rem`, and the command entry can wrap. At `899px` and below, paired sections stack and the preview is bounded to `620px`. At `540px` and below, navigation moves onto its own row, the technical notes stack, the command row wraps, and the release container uses less padding.

Section boundaries use fine rules and measured vertical padding rather than a repeated card grid. Reused spacing steps are extracted in the frontmatter; the stylesheet also contains local adjustments for captions, controls, and small screens. In print, the layout stacks, interactive controls disappear, the preview shadow becomes a fine border, and disclosure content remains visible.

## Elevation & Depth

The page uses flat tonal layering with one shadow under the command preview. Its exact value is `0 12px 32px -12px #28302638`, which places the small native-style panel above the warm canvas. Command examples and release information use a deeper ground without a shadow.

**The Single Raised Panel Rule.** Reserve the downward shadow for the command preview; ordinary sections and tonal containers remain flat.

## Shapes

The compact radius is shared by the primary action, example selectors, command examples, and release container. The small bordered run control uses the control radius; the command panel alone uses the larger panel radius and clips its contents. The supplied icon's squircle is part of its approved artwork, rather than a container shape to repeat across the page.

## Components

### Primary action

A small filled link uses sage, warm text, and the compact radius. Hover deepens the sage, while keyboard focus uses a visible accent outline (`2px`) with an offset (`5px`). Color changes use `120ms ease`; there is no movement or entrance animation.

### Example selectors

The three compact buttons form a plain example picker, with a transparent resting background. Hover adds a warm inset fill; `aria-pressed="true"` adds the selected-example colors and medium text weight. Preserve the button group semantics and the visible keyboard focus treatment.

### Preview controls

The run control uses a thin border, panel ground, and the control radius, with its existing tinted hover fill. The text control is unfilled and changes from muted ink to ink on hover. Both use the compact control text size; the visible focus outline sits closer to buttons (`3px` offset).

### Command panel

The panel combines a tinted command row, a light transcript, and a fine-ruled footer. The command row has a minimum height (`68px`); the transcript has a minimum height (`144px`) and wraps output rather than clipping it. The footer pairs status with the copy action, and the status uses muted ink while running. The interactive example remains explicitly labelled as sample output and has a complete static transcript without JavaScript; it is not a command input.

### Navigation and text links

Navigation is a simple horizontal row of small system text with no containing surface or border. The final navigation link uses the accent; ordinary text links use the accent with a thin underline and an offset (`4px`). Ordinary links change to ink on hover; the final navigation link retains its accent. Keyboard focus remains visible.

### Tonal containers and disclosure

Command examples and release information sit on the warm inset ground with the compact radius. The release container is flat, with a larger internal inset that reduces on narrow screens; the approved icon supplies its only image. Technical detail uses the browser's native disclosure marker and an accent summary, followed by indented secondary text when open.

## Do's and Don'ts

### Do

- Do use the supplied Hitoiki SVG, preserving its ink, warm ground, and squircle geometry.
- Do use the native system sans and monospace stacks already implemented.
- Do distinguish commands and output with monospace text, wrap long command text, and retain readable output.
- Do retain visible keyboard focus and disable transitions when reduced motion is requested.
- Do keep component states and responsive changes consistent with the existing compact controls.

### Don't

- Don't add a dark terminal theme from the provisional seed; the implemented preview is light.
- Don't repeat the preview's shadow or rounded panel silhouette across ordinary content sections.
- Don't add generated illustration, decorative statistics, testimonials, slogans, or chat-style presentation.
- Don't replace the pinned native type or Palana family palette with the general personal-brand font and accent defaults.
- Don't make the illustrative preview look like an editable terminal or password field.
