const storyEl = document.getElementById("story");
const choicesEl = document.getElementById("choices");

// Game states
let state = { pokemon: "", location: "start" };

// Story data
const story = {
  start: {
    text: "Welcome, Trainer! Choose your first Pokémon:",
    choices: [
      { text: "Charmander", next: "charmander_path" },
      { text: "Squirtle", next: "squirtle_path" },
      { text: "Bulbasaur", next: "bulbasaur_path" }
    ]
  },
  charmander_path: {
    text: "You chose Charmander! Do you want to go to the forest or the mountains?",
    choices: [
      { text: "Forest", next: "forest_charmander" },
      { text: "Mountains", next: "mountains_charmander" }
    ]
  },
  squirtle_path: {
    text: "You chose Squirtle! Do you want to go to the lake or the beach?",
    choices: [
      { text: "Lake", next: "lake_squirtle" },
      { text: "Beach", next: "beach_squirtle" }
    ]
  },
  bulbasaur_path: {
    text: "You chose Bulbasaur! Do you want to go to the garden or the meadow?",
    choices: [
      { text: "Garden", next: "garden_bulbasaur" },
      { text: "Meadow", next: "meadow_bulbasaur" }
    ]
  },
  forest_charmander: { text: "You encounter a wild Pidgey! You win your first battle!", choices: [] },
  mountains_charmander: { text: "A wild Geodude blocks your path! Game over.", choices: [] },
  lake_squirtle: { text: "You find a wild Magikarp! You catch it easily.", choices: [] },
  beach_squirtle: { text: "A wild Tentacool attacks! You run away.", choices: [] },
  garden_bulbasaur: { text: "You meet a friendly Bellsprout! You become friends.", choices: [] },
  meadow_bulbasaur: { text: "A wild Oddish pops up and runs away. Peaceful meadow!", choices: [] }
};

// Function to show current story
function showStory(node) {
  storyEl.innerHTML = story[node].text;
  choicesEl.innerHTML = "";
  
  story[node].choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => showStory(choice.next);
    choicesEl.appendChild(btn);
  });
}

// Start the game
showStory("start");
