const inputs = document.querySelectorAll("input");
const mphValue = document.querySelector(".inputMph");
const kmhValue = document.querySelector(".inputKmh");
const knotsValue = document.querySelector(".inputKnots");
const machValue = document.querySelector(".inputMach");
const error = document.querySelector(".error");

function showError(){
  error.classList.add("active");
}

function clearError(){
  error.classList.remove("active")
}

inputs.forEach(input => {
  input.addEventListener("input", function(e){
    const inputValue = e.target;

    if(isNaN(inputValue.value)){
      showError();
      setTimeout(clearError, 3000);
      return;
    };

    switch(inputValue){
      case mphValue:
        kmhValue.value = Math.round(inputValue.value * 1.609344) + " Kmh";
        knotsValue.value = Math.round(inputValue.value / 1.151) + " Knots";
        machValue.value = Math.round(inputValue.value / 767) + " Mach";
      break;
      case kmhValue:
        mphValue.value = Math.round(inputValue.value / 1.609344) + " Mph";
        knotsValue.value = Math.round(inputValue.value / 1.852) + " Knots";
        machValue.value = Math.round(inputValue.value / 1235) + " Mach";
      break;
      case knotsValue:
        kmhValue.value = Math.round(inputValue.value * 1.852) + " Kmh";
        mphValue.value = Math.round(inputValue.value * 1.151) + " Mph";
        machValue.value = Math.round(inputValue.value / 667) + " Mach";
      break;
      case machValue:
        kmhValue.value = Math.round(inputValue.value * 1235) + " Kmh";
        knotsValue.value = Math.round(inputValue.value * 667) + " Knots";
        mphValue.value = Math.round(inputValue.value * 767) + " Mph";
      break;
    }
  })
})
