const acceptedDates = [
  "06-06-2002",
  "06062002",
  "06/06/2002",
  "6-6-2002",
  "6/6/2002"
];

function goToPage(pageNumber) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const nextPage = document.getElementById("page" + pageNumber);
  nextPage.classList.add("active");

  const music = document.getElementById("bgMusic");
  if (music) {
    music.play().catch(() => {});
  }
}

function checkSpecialDate() {
  const input = document.getElementById("specialDate");
  const error = document.getElementById("dateError");
  const value = input.value.trim();

  if (acceptedDates.includes(value)) {
    error.textContent = "";
    goToPage(2);
  } else {
    error.textContent = "Hmm... try the date that makes today special.";
    input.classList.add("shake");
    setTimeout(() => input.classList.remove("shake"), 450);
  }
}

function celebrate() {
  const confetti = document.getElementById("confetti");
  const colors = ["#ff7fa8", "#ffb56b", "#fff0b8", "#ffc2d4", "#ffffff"];

  for (let i = 0; i < 95; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 0.75 + "s";
    piece.style.transform = "rotate(" + Math.random() * 180 + "deg)";
    confetti.appendChild(piece);
    setTimeout(() => piece.remove(), 3200);
  }
}
