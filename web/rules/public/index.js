const search = new Set();

function clickChip(_event, chip) {
  for (const child of chip.children) {
    child.classList.toggle("chip-head");
    child.classList.toggle("chip-content");
  }

  if (search.has(chip.title)) {
    search.delete(chip.title);
  } else {
    search.add(chip.title);
  }

  for (const rule of document.getElementById("rules").children) {
    rule.classList.remove("hidden");
    for(const v of search.values()) {
      if (rule.innerHTML.includes(v) === false) {
        rule.classList.add("hidden");
      }
    }
  }
}

for (const chip of document.getElementsByClassName("chip")) {
  chip.onclick = (e) => clickChip(e, chip);
}