const mainMenuEl = document.getElementById("main-menu");
const gameScreenEl = document.getElementById("game-screen");
const choicesEl = document.getElementById("choices");

// Game state
let gameState = {
  playerPokemon: [
    { name: "Charmander", hp: 100, maxHp: 100, moves: [
        { name: "Scratch", damage: 10 },
        { name: "Ember", damage: 20 }
      ] }
  ],
  bag: [],
  location: "town"
};

// Wild Pokémon examples
const wildPokemon = [
  { name: "Pidgey", hp: 50, moves: [{ name: "Tackle", damage: 5 }] },
  { name: "Rattata", hp: 40, moves: [{ name: "Quick Attack", damage: 7 }] }
];

// Show main menu
function showMainMenu() {
  gameScreenEl.innerHTML = "";
  choicesEl.innerHTML = "";
  mainMenuEl.innerHTML = `
    <button onclick="goTo('tallGrass')">Tall Grass</button>
    <button onclick="goTo('pokemonCenter')">Pokémon Center</button>
    <button onclick="goTo('shop')">Shop</button>
    <button onclick="goTo('map')">Map</button>
    <button onclick="goTo('bag')">Bag</button>
    <button onclick="goTo('pokemon')">Pokémon</button>
    <button onclick="goTo('pokedex')">Pokédex</button>
  `;
}

// Change location / menu
function goTo(location) {
  mainMenuEl.innerHTML = "";
  choicesEl.innerHTML = "";
  gameState.location = location;

  if(location === "tallGrass") {
    encounterWildPokemon();
  } else if(location === "pokemonCenter") {
    healPokemon();
  } else {
    gameScreenEl.innerHTML = `You are at the ${location}. (Functionality coming soon)`;
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back to Main Menu";
    backBtn.onclick = showMainMenu;
    choicesEl.appendChild(backBtn);
  }
}

// Heal all Pokémon
function healPokemon() {
  gameState.playerPokemon.forEach(p => p.hp = p.maxHp);
  gameScreenEl.innerHTML = "All your Pokémon have been healed!";
  const backBtn = document.createElement("button");
  backBtn.textContent = "Back to Main Menu";
  backBtn.onclick = showMainMenu;
  choicesEl.appendChild(backBtn);
}

// Encounter wild Pokémon
function encounterWildPokemon() {
  const wild = wildPokemon[Math.floor(Math.random() * wildPokemon.length)];
  gameScreenEl.innerHTML = `A wild ${wild.name} appeared! (Battle coming soon)`;
  const backBtn = document.createElement("button");
  backBtn.textContent = "Run Back";
  backBtn.onclick = showMainMenu;
  choicesEl.appendChild(backBtn);
}

// Start the game
showMainMenu();// Example: battle system
function startBattle(wild) {
  gameScreenEl.innerHTML = `A wild ${wild.name} appeared!<br>`;
  
  let player = gameState.playerPokemon[0];
  
  function showBattleOptions() {
    choicesEl.innerHTML = "";
    player.moves.forEach((move, index) => {
      const btn = document.createElement("button");
      btn.textContent = `${move.name} (${move.damage} dmg)`;
      btn.onclick = () => useMove(index);
      choicesEl.appendChild(btn);
    });
    const runBtn = document.createElement("button");
    runBtn.textContent = "Run";
    runBtn.onclick = showMainMenu;
    choicesEl.appendChild(runBtn);
    
    // Show current HP
    gameScreenEl.innerHTML = `
      ${player.name}: ${player.hp}/${player.maxHp} HP<br>
      Wild ${wild.name}: ${wild.hp} HP
    `;
  }
  
  function useMove(moveIndex) {
    let move = player.moves[moveIndex];
    wild.hp -= move.damage;
    if (wild.hp <= 0) {
      gameScreenEl.innerHTML = `You defeated the wild ${wild.name}!`;
      choicesEl.innerHTML = "";
      const backBtn = document.createElement("button");
      backBtn.textContent = "Back to Main Menu";
      backBtn.onclick = showMainMenu;
      choicesEl.appendChild(backBtn);
      return;
    }
    
    // Wild attacks back
    let wildMove = wild.moves[Math.floor(Math.random() * wild.moves.length)];
    player.hp -= wildMove.damage;
    if (player.hp <= 0) {
      gameScreenEl.innerHTML = `Oh no! ${player.name} fainted!`;
      choicesEl.innerHTML = "";
      const backBtn = document.createElement("button");
      backBtn.textContent = "Back to Main Menu";
      backBtn.onclick = showMainMenu;
      choicesEl.appendChild(backBtn);
      return;
    }
    // Example: battle system
function startBattle(wild) {
  gameScreenEl.innerHTML = `A wild ${wild.name} appeared!<br>`;
  
  let player = gameState.playerPokemon[0];
  
  function showBattleOptions() {
    choicesEl.innerHTML = "";
    player.moves.forEach((move, index) => {
      const btn = document.createElement("button");
      btn.textContent = `${move.name} (${move.damage} dmg)`;
      btn.onclick = () => useMove(index);
      choicesEl.appendChild(btn);
    });
    const runBtn = document.createElement("button");
    runBtn.textContent = "Run";
    runBtn.onclick = showMainMenu;
    choicesEl.appendChild(runBtn);
    
    // Show current HP
    gameScreenEl.innerHTML = `
      ${player.name}: ${player.hp}/${player.maxHp} HP<br>
      Wild ${wild.name}: ${wild.hp} HP
    `;
  }
  
  function useMove(moveIndex) {
    let move = player.moves[moveIndex];
    wild.hp -= move.damage;
    if (wild.hp <= 0) {
      gameScreenEl.innerHTML = `You defeated the wild ${wild.name}!`;
      choicesEl.innerHTML = "";
      const backBtn = document.createElement("button");
      backBtn.textContent = "Back to Main Menu";
      backBtn.onclick = showMainMenu;
      choicesEl.appendChild(backBtn);
      return;
    }
    
    // Wild attacks back
    let wildMove = wild.moves[Math.floor(Math.random() * wild.moves.length)];
    player.hp -= wildMove.damage;
    if (player.hp <= 0) {
      gameScreenEl.innerHTML = `Oh no! ${player.name} fainted!`;
      choicesEl.innerHTML = "";
      const backBtn = document.createElement("button");
      backBtn.textContent = "Back to Main Menu";
      backBtn.onclick = showMainMenu;
      choicesEl.appendChild(backBtn);
      return;
    }
    function showBattleOptions() {
  choicesEl.innerHTML = "";
  player.moves.forEach((move, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${move.name} (${move.damage} dmg)`;
    btn.onclick = () => useMove(index);
    choicesEl.appendChild(btn);
  });
  const runBtn = document.createElement("button");
  runBtn.textContent = "Run";
  runBtn.onclick = showMainMenu;
  choicesEl.appendChild(runBtn);

  // Show current HP
  gameScreenEl.innerHTML = `
    ${player.name}: ${player.hp}/${player.maxHp} HP<br>
    Wild ${wild.name}: ${wild.hp} HP
  `;
}

  
  showBattleOptions();
}
