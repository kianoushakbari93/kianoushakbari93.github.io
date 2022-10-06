const optDiv = document.getElementById("chooseHobtextbox");
const otherOpt = document.getElementById("Hobby");
otherOpt.onchange = () => {
  if (otherOpt.value === "others") {
    optDiv.innerHTML = `
        <label class="labels" for="others">Please type yours: </label><br>
        <input type="text" class="textbox" name="oThers" id="oThers">
    `;
  } else {
    optDiv.innerHTML = null;
  }
};
