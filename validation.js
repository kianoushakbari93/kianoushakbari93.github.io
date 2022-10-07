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

const validateContainsNoNumbers = (string) => {
  return !/\d/g.test(string);
};

const validPrint = (fullName, dateOfB, selectOpt, heartRate, dataUrl) => {
  // defining errors as an empty array to be able to print errors inside it
  let errors = [];
  // defining our elements
  let elements = [fullName, dateOfB, selectOpt, heartRate, dataUrl];
  // defining errorMsg as an empty string to pushh errors array inside string
  let errorMsg = "";
  
  if (!validateContainsNoNumbers(fullName.value)) {
    errors.push("Name has Numbers!");
  };
  

  elements.forEach((element) => {
    errorMsg = validNotBlank(element);
    if (errorMsg != "") {
      errors.push(errorMsg);
    };
  });
  

  if (errors.length > 0) {
    document.getElementById("unexpected").innerHTML = errors.join("<br><br>");
    document.getElementById("unexpected").style.color = "red";
    document.getElementById("unexpected").style.borderStyle = "dotted";
    document.getElementById("unexpected").style.borderColor = "red";
    document.getElementById("unexpected").style.borderRadius = "5px";
    document.getElementById("unexpected").style.padding = "10px";
  } else {
    document.getElementById("unexpected").innerHTML = null;
    document.getElementById("unexpected").style.border = "none";
    addPro(
      fullName.value,
      dateOfB.value,
      selectOpt.value,
      heartRate.value,
      dataUrl.value
    );
  };
};
