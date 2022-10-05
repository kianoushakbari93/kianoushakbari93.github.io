let peoplekey = "key";
let people = JSON.parse(localStorage.getItem(peoplekey)) || [];

// make a validate form for only char in name and number in bOd

function validPrint(fullName, dateOfB, selectOpt, heartRate) {
  // defining errors as an empty array to be able to print errors inside it
  let errors = [];
  // defining our elements
  let elements = [fullName, dateOfB, selectOpt, heartRate];
  // defining errorMsg as an empty string to pushh errors array inside string
  let errorMsg = "";
  elements.forEach((element) => {
    errorMsg = validNotBlank(element);
    if (errorMsg != "") {
      errors.push(errorMsg);
    }
  });
  console.log(errorMsg);
  if (errors.length > 0) {
    document.getElementById("unexpected").innerHTML = errors.join("<br>");
  } else {
    document.getElementById("unexpected").innerHTML = null;
    addPro(fullName.value, dateOfB.value, selectOpt.value, heartRate.value);
  }
}

// declaring the function to validate our form to be filled completely
function validNotBlank(elementId) {
  let x = elementId.value;
  let error = "";
  let id = elementId.id;
  if (x == "") {
    error = id + " must be filled!";
    elementId.style.backgroundColor = "red";
  } else {
    elementId.style.backgroundColor = "white";
  }
  return error;
}

// declaring a function to add the properties inside our people array
function addPro(fullName, dateOfB, selectOpt, heartRate) {
  /* logic for checking if others being selected
    let hobby;
    if (user has put their own hobby in) {
        hobby = document.getElementById('some-text-box-change-me').value
        use the hobby from the textbox input
    } else {
        hobby = selectOpt
        use the hobby from the dropdown (selectOpt)
    }
    */
  let hobby;

  if (selectOpt === "others") {
    hobby = document.getElementById("oThers").value;
  } else {
    hobby = selectOpt;
  }
  const properties = {
    fName: fullName,
    dOb: dateOfB,
    choice: hobby,
    heartRate: heartRate,
  };
  people.push(properties);

  localStorage.setItem(peoplekey, JSON.stringify(people));

  listPeople();
}

function listPeople() {
  const peopleListElement = document.getElementById("peopleList");
  peopleListElement.innerHTML = "";

  let htmlString = "";
  people.forEach((x, i) => {
    htmlString +=
      `<div class="colorlist"><div><p id="personPara-${i}">Full Name: ${x.fName}<br>Date of Birth: ${x.dOb}<br>Hobby: ${x.choice}<br>Rating: ${x.heartRate} &hearts;</p></div>` +
      `<div class="buttonDiv"><br><button class="dynamicButton" onclick=deletePerson(${i})>Delete</button>` +
      `<button id="edit-button-${i}" class="dynamicButton" onclick=editPerson(${i})>Edit</button>` +
      `<button id="edit-end-${i}" class="dynamicButton" onclick=donePerson(${i})>Done</button></div></div>`;
  });
  peopleListElement.innerHTML = htmlString;
  //editing button
}

function editPerson(indexOfPersonToEdit) {
  let paragraph = document.getElementById("personPara-" + indexOfPersonToEdit);
  paragraph.innerHTML =
    `<label class="labels" for="fName">Full Name: </label>` +
    `
    <input type="text" id="editName" name="editName"/><br>
    ` +
    `<label class="labels" for="dOb">Age: </label>` +
    `
    <input type="date" id="editAge" name="editAge"/><br>
    ` +
    `
    <label class="labels" for="others">Please type yours: </label>` +
    `<input type="text" name="oThers" id="editOthers"><br>` +
    `<label class="labels" for="others">Rating: </label>` +
    `<input type="text" name="rating" id="editRate">`;
}
function donePerson(indexOfPersonToSave) {
  const editProperties = {
    fName: document.getElementById("editName").value,
    dOb: document.getElementById("editAge").value,
    choice: document.getElementById("editOthers").value,
    heartRate: document.getElementById("editRate").value,
  };
  people[indexOfPersonToSave] = editProperties;

  listPeople();
}
// delete a person from the people array with the given index
function deletePerson(indexOfPersonToDelete) {
  people = people.filter((x, i) => i !== indexOfPersonToDelete);
  listPeople();
}
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

// listPeople when the page loads
document.getElementById("body").onload = () => {
  listPeople();
};
