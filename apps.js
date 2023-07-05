const formSubmit = document.getElementById("formSubmit");
const formInput = document.getElementById("formInput");
const container = document.querySelector(".container");
formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  validation(formInput.value.trim().split("-"));
});
function displayAlert(alertMessage, color) {
  const divAlert = document.createElement("div");
  divAlert.setAttribute("class", `alert alert-${color}`);
  divAlert.setAttribute("role", "alert");
  divAlert.innerText = alertMessage;
  container.append(divAlert);
}
function validation(ssnArr) {
  // console.log(formInput.value.match(/[0-]/gi));
  console.log(typeof ssnArr[0]);
  if (
    ssnArr.length == 3 &&
    ssnArr[0].length == 3 &&
    ssnArr[1].length == 2 &&
    ssnArr[2].length == 4 &&
    formInput.value.match(/[0-9]/gi).length == formInput.value.length - 2 &&
    ssnArr[0] != "000" &&
    ssnArr[0] != "666" &&
    Number(ssnArr[0]) < 900 &&
    ssnArr[1] != "00" &&
    ssnArr[2] != "0000"
  ) {
    displayAlert(`Entered SSN (${formInput.value}) is valid`, "success");
  } else {
    displayAlert(
      `SSN must be 11 characters (9 numbers and 2 hypens)`,
      "danger"
    );
  }
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
}
