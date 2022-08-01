// 💩 Bad Code
const escKeyEvent = (e) => {
  if (e.keyCode === 27) {
  }
};

// ✨ Good Code
const escKeyEvent = (e) => {
  if (e.keyCode === "Escape") {
  }
};
