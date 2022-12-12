const form = document.querySelector("form");
const heightUser = document.querySelector("#height");
const weightUser = document.querySelector("#weight");
const numberResult = document.querySelector("h2");
const indicationResult = document.querySelector(".indication");
const container = document.querySelector('.container')

let result = 0;

const contentVerification = (text,color) => {
  indicationResult.textContent = text;
  indicationResult.style.color = color;
}

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

const handleVerification = (element) => {
  if (element < 18.5) {
    contentVerification("Insuffisance pondérale (maigreur)", "red")
  } else if (element > 18.5 && element < 25) {
    contentVerification("Corpulence normale", "green")
  } else if (element > 25 && element < 30) {
    contentVerification("surpoids", "orange")
  } else if (element > 30 && element < 35) {
    contentVerification("Obésité modérée", "blue")
  } else if (element > 35 && element < 40) {
    contentVerification("Obésité sévère", "purple")
  } else if (element > 40) {
    contentVerification("Obésité morbide ou massive", "red")
  } else {
    contentVerification("En attente de résultat", "black")
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!weightUser.value.length || !heightUser.value.length) {
    handleError()
  } else {
    calculateIMC();
  }
});


