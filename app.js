const form = document.querySelector("form");
const heightUser = document.querySelector("#height");
const weightUser = document.querySelector("#weight");
const numberResult = document.querySelector("h2");
const indicationResult = document.querySelector(".indication");

let result = 0;

function calculateIMC() {
  result = (
    Number(weightUser.value) /
    Number((heightUser.value / 100) * (heightUser.value / 100))
  ).toFixed(2);
  numberResult.textContent = result;

  if (result < 18.5) {
    indicationResult.textContent = "Insuffisance pondérale (maigreur)";
    indicationResult.style.color = "red";
  } else if (result > 18.5 && result < 25) {
    indicationResult.textContent = "Corpulence normale";
    indicationResult.style.color = "green";
  } else if (result > 25 && result < 30) {
    indicationResult.textContent = "surpoids";
    indicationResult.style.color = "orange";
  } else if (result > 30 && result < 35) {
    indicationResult.textContent = "Obésité modérée";
    indicationResult.style.color = "blue";
  } else if (result > 35 && result < 40) {
    indicationResult.textContent = "Obésité sévère";
    indicationResult.style.color = "purple";
  } else if (result > 40) {
    indicationResult.textContent = "Obésité morbide ou massive";
    indicationResult.style.color = "red";
  } else {
    indicationResult.textContent = "En attente de résultat";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (weightUser.value === "" || heightUser.value === "") {
    numberResult.textContent = "Oups vous devez saisir des valeurs";
    indicationResult.textContent = "En attente de résultat";
    indicationResult.style.color = "black";
  } else {
    calculateIMC();
  }
});
