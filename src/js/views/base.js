export let elements = {
  container: document.querySelector(".main-container"), // Report card
  cards: document.getElementById("mainContainer"), // Other cards
};

export let addToElements = (el) => {
  elements = { ...elements, ...el };
};

