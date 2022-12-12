const form = document.querySelector("form");
const heightUser = document.querySelector("#height");
const weightUser = document.querySelector("#weight");
const numberResult = document.querySelector("h2");
const indicationResult = document.querySelector(".indication");
const container = document.querySelector('.container')

let result = 0;

const calculateIMC = () => {
  result = (
    Number(weightUser.value) /
    Number((heightUser.value / 100) * (heightUser.value / 100))
  ).toFixed(2);
  numberResult.textContent = result;

  handleVerification(result, indicationResult)
  
}

const handleError = () => {
  numberResult.textContent = "Oups vous devez saisir des valeurs";
  numberResult.style.color = "red";
  indicationResult.textContent = "En attente de résultat";
  indicationResult.style.color = "black";
  container.classList.add('error')
    setTimeout(()=>{
      container.classList.remove('error')
  },1000)
}

const handleVerification = (element, tag) => {
  if (element < 18.5) {
    tag.textContent = "Insuffisance pondérale (maigreur)";
    tag.style.color = "red";
  } else if (element > 18.5 && element < 25) {
    tag.textContent = "Corpulence normale";
    tag.style.color = "green";
  } else if (element > 25 && element < 30) {
    tag.textContent = "surpoids";
    tag.style.color = "orange";
  } else if (element > 30 && element < 35) {
    tag.textContent = "Obésité modérée";
    tag.style.color = "blue";
  } else if (element > 35 && element < 40) {
    tag.textContent = "Obésité sévère";
    tag.style.color = "purple";
  } else if (element > 40) {
    tag.textContent = "Obésité morbide ou massive";
    tag.style.color = "red";
  } else {
    tag.textContent = "En attente de résultat";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (weightUser.value === "" || heightUser.value === "") {
    handleError()
  } else {
    calculateIMC();
  }
});


