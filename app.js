const form = document.querySelector("form");
const heightUser = document.querySelector("#height");
const weightUser = document.querySelector("#weight");
const numberResult = document.querySelector("h2");
const indicationResult = document.querySelector(".indication");
const container = document.querySelector('.container')

let result = 0;

const contentVerification = (text, color) => {
  indicationResult.textContent = text;
  indicationResult.style.color = color;
}

const calculateIMC = () => {
  result = (
    Number(weightUser.value) /
    Number((heightUser.value / 100) * (heightUser.value / 100))
  ).toFixed(2);
  numberResult.textContent = result;

  handleVerification(result, indicationResult);

}

const handleError = () => {
  numberResult.textContent = "Oups vous devez saisir des valeurs";
  numberResult.style.color = "red";
  indicationResult.textContent = "En attente de résultat";
  indicationResult.style.color = "black";
  container.classList.add('error');
  setTimeout(() => {
    container.classList.remove('error');
  }, 1000)
}

const handleVerification = (resultIMC) => {
  if (resultIMC < 18.5) {
    contentVerification("Insuffisance pondérale (maigreur)", "red");
  } else if (resultIMC > 18.5 && resultIMC < 25) {
    contentVerification("Corpulence normale", "green");
  } else if (resultIMC > 25 && resultIMC < 30) {
    contentVerification("surpoids", "orange");
  } else if (resultIMC > 30 && resultIMC < 35) {
    contentVerification("Obésité modérée", "blue");
  } else if (resultIMC > 35 && resultIMC < 40) {
    contentVerification("Obésité sévère", "purple");
  } else if (resultIMC > 40) {
    contentVerification("Obésité morbide ou massive", "red");
  } else {
    contentVerification("En attente de résultat", "black");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!weightUser.value.length || !heightUser.value.length) {
    handleError();
  } else {
    calculateIMC();
  }
});


