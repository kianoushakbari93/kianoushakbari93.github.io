// declaring the function to validate our form to be filled completely
const validNotBlank = (elementId) => {
  let x = elementId.value;
  let error = "";
  let id = elementId.id;
  if (x == "") {
    error = id + " Blank!";
    elementId.style.backgroundColor = "red";
  } else {
    elementId.style.backgroundColor = "white";
  }
  return error;
};

const validPrint = (fullName, dateOfB, selectOpt, heartRate, dataUrl) => {
  // defining errors as an empty array to be able to print errors inside it
  let errors = [];
  // defining our elements
  let elements = [fullName, dateOfB, selectOpt, heartRate, dataUrl];
  // defining errorMsg as an empty string to pushh errors array inside string
  let errorMsg = "";

  elements.forEach((element) => {
    errorMsg = validNotBlank(element);
    if (errorMsg != "") {
      errors.push(errorMsg);
    }
  });

  if (errors.length > 0) {
    document.getElementById("unexpected").innerHTML = errors.join("<br>");
  } else {
    document.getElementById("unexpected").innerHTML = null;
    addPro(
      fullName.value,
      dateOfB.value,
      selectOpt.value,
      heartRate.value,
      dataUrl.value
    );
  }
};
