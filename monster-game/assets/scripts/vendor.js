let monsterHealthBar;
let playerHealthBar;
let bonusLifeEl;

let attackBtn;
let strongAttackBtn;
let healBtn;
let logBtn;

let chosenMaxLife;
let currentMonsterHealth;
let currentPlayerHealth;
let hasBonusLife;

// Akkor fut meg, amikor éppen a böngésző betöltötte a scriptet
document.addEventListener("DOMContentLoaded", () => {
  // Akkor fut meg amikor a HTML DOM "kész"
  monsterHealthBar = document.getElementById("monster-health");
  playerHealthBar = document.getElementById("player-health");
  bonusLifeEl = document.getElementById("bonus-life");

  attackBtn = document.getElementById("attack-btn");
  strongAttackBtn = document.getElementById("strong-attack-btn");
  healBtn = document.getElementById("heal-btn");
  logBtn = document.getElementById("log-btn");

  attackBtn.addEventListener("click", attackHandler);
  strongAttackBtn.addEventListener("click", strongAttackHandler);
  healBtn.addEventListener("click", healPlayerHandler);
  logBtn.addEventListener("click", printLogHandler);

  try {
    chosenMaxLife = getMaxLifeValues();
  } catch (error) {
    console.log(error);
    chosenMaxLife = 100;
    alert("You have entered something wrong, default value of 100 was used.");
  }

  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  hasBonusLife = true;

  adjustHealthBars(chosenMaxLife);
});

function getMaxLifeValues() {
  const enteredValue = prompt(`Maximum life for you and the monster.`, `100`);
  const parsedValue = parseInt(enteredValue);

  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw { message: `Invalid user input, not a number!` };
  }
  return parsedValue;
}

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}
