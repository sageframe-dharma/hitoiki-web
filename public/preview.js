"use strict";

// Browser-only illustrative data. Nothing is sent to a shell or a remote host.
const examples = {
  local: {
    command: "df -h /",
    lines: [
      "Filesystem     Size   Used  Avail Capacity  Mounted on",
      "/dev/disk3s1  460Gi   15Gi  228Gi       7%  /",
    ],
  },
  ssh: {
    command: "ssh server 'uptime'",
    lines: [
      " 12:24:08 up 42 days, 3:17, 1 user,",
      " load average: 0.08, 0.12, 0.09",
    ],
  },
  sudo: {
    command: "ssh -tt server 'sudo systemctl status nginx --no-pager'",
    lines: [
      "[sudo] password for admin:",
      "nginx.service - A high performance web server",
      "   Loaded: loaded; enabled",
      "   Active: active (running)",
    ],
  },
};

const selectors = document.querySelectorAll("[data-example]");
const command = document.getElementById("example-command");
const output = document.getElementById("example-output");
const status = document.getElementById("run-status");
const runButton = document.getElementById("run-example");
const copyButton = document.getElementById("copy-output");
let selected = "ssh";
let running = false;
let timer;

function stopPlayback() {
  window.clearTimeout(timer);
  running = false;
  runButton.textContent = "Run example";
  status.dataset.state = "done";
}

function showExample(name) {
  stopPlayback();
  selected = name;
  const example = examples[name];
  command.textContent = example.command;
  output.textContent = example.lines.join("\n");
  status.textContent = "Exited 0";
  for (const button of selectors) {
    button.setAttribute("aria-pressed", String(button.dataset.example === name));
  }
}

for (const button of selectors) {
  button.addEventListener("click", () => showExample(button.dataset.example));
}

runButton.addEventListener("click", () => {
  if (running) {
    stopPlayback();
    status.textContent = "Preview stopped";
    return;
  }

  const example = examples[selected];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    output.textContent = example.lines.join("\n");
    status.textContent = "Exited 0";
    return;
  }

  running = true;
  output.textContent = "";
  runButton.textContent = "Stop";
  status.textContent = "Running example…";
  status.dataset.state = "running";
  let line = 0;

  function appendLine() {
    output.textContent += (line > 0 ? "\n" : "") + example.lines[line];
    line += 1;
    if (line < example.lines.length) {
      timer = window.setTimeout(appendLine, selected === "sudo" && line === 1 ? 900 : 200);
    } else {
      stopPlayback();
      status.textContent = "Exited 0";
    }
  }

  timer = window.setTimeout(appendLine, 160);
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(output.textContent);
    status.textContent = "Output copied";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(output);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    output.focus();
    status.textContent = "Output selected. Press Command-C or Control-C to copy.";
  }
});
