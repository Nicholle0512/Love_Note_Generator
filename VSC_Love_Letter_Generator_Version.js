// Love Notes 
const messages = [
  "I love the way your arms wrap around me at night.",
  "You make me feel so safe.",
  "I think about you every minute you aren't around.",
  "You don't even need to try, you look good doing anything.",
  "You are my honey bear and favorite man on this planet.",
  "I’m proud of the person you are growing into.",
  "You have inspired me beyond a level words can describe.",
  "My home is in your embrace.",
  "I love you, my portable heater."
];

const messageEl = document.getElementById("message");
const button = document.getElementById("generateBtn");
const saveBtn = document.getElementById("saveBtn");
const favoritesList = document.getElementById("favoritesList");

// Load Favorites from Storage
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
renderFavorites();

let currentMessage = "";

// Floating Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

  document.getElementById("hearts-container").appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// Generate Love Note
button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  currentMessage = messages[randomIndex];

  messageEl.style.opacity = 0;

  setTimeout(() => {
    messageEl.textContent = currentMessage;
    messageEl.style.opacity = 1;
  }, 200);

  // Create Floating Hearts Every New Note
  for (let i = 0; i < 5; i++) {
    setTimeout(createHeart, i * 200);
  }
});

// Save to Favorites
saveBtn.addEventListener("click", () => {
  if (!currentMessage) return;

  if (!favorites.includes(currentMessage)) {
    favorites.push(currentMessage);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderFavorites();
  }
});

// Show Favorites List
function renderFavorites() {
  favoritesList.innerHTML = "";
  favorites.forEach(msg => {
    const li = document.createElement("li");
    li.textContent = msg;
    favoritesList.appendChild(li);
  });
}