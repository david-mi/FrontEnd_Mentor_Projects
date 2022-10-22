export function hideFruitsIcons(...cards) {
  cards.forEach(card => {
    card.classList.remove("show");
    card.classList.add("hide");
  });
}

export function showFruitsIcons(...cards) {
  cards.forEach(card => {
    card.classList.add("show");
    card.classList.remove("hide");
  });
}

export function setDataValidCards(...cards) {
  cards.forEach(card => {
    card.dataset.valid = true;
  });
}

export function resetAttributes(cards) {
  cards.forEach(card => {
    card.classList.add("hide");
    card.classList.remove("show");
    card.removeAttribute("data-valid");
  });
}