// A key to access items in local storage
let peoplekey = "key";

// initialise the people array from either local storage if we have previously saved to there
// or make a new empty array if no previously saved data exists
let people = JSON.parse(localStorage.getItem("key")) || [];

// Update the local storage with the current people array
const updateLocalStorage = () => {
  localStorage.setItem(peoplekey, JSON.stringify(people))
}

// Use the people array to relist people on the page
const listPeople = () => {
  const peopleListElement = document.getElementById("peopleList");
  peopleListElement.innerHTML = "";

  let htmlString = "";
  people.forEach((x, i) => {
    htmlString += `<div class="colorlist">
        <div class="proDynamic">
          <img class="dynamicImg" src="${x.image}" />
          <p id="personPara-${i}">
            Full Name: ${x.fName}<br>Date of Birth: ${x.dOb}<br>Hobby: ${x.choice}<br>Rating: ${x.heartRate} &hearts;
          </p>
        </div>
        <div class="buttonDiv">
          <button class="dynamicButton" onclick=deletePerson(${i})>Delete</button>
          <button id="edit-button-${i}" class="dynamicButton" onclick=editPerson(${i})>Edit</button>
          <button id="edit-end-${i}" class="dynamicButton" onclick=donePerson(${i})>Done</button>
        </div>
      </div>`;
  });
  peopleListElement.innerHTML = htmlString;
}

// Add a new person the the people array
const addPro = (fullName, dateOfB, selectOpt, heartRate, dataUrl) => {
  let hobby;

  if (selectOpt === "others") {
    hobby = document.getElementById("oThers").value;
  } else {
    hobby = selectOpt;
  }
  const properties = {
    image: dataUrl,
    fName: fullName,
    dOb: dateOfB,
    choice: hobby,
    heartRate: heartRate,
  };
  people.push(properties);

  updateLocalStorage();
  listPeople();
}

// Create an edit form for a person in the list
const editPerson = (indexOfPersonToEdit) => {
  listPeople();
  let paragraph = document.getElementById("personPara-" + indexOfPersonToEdit);
  paragraph.innerHTML = `
    <input class="editUpload" id="editImage" type="file" accept="image/jpg/png" multiple="false" /><br>
    <input type="hidden" id="editPersonDataUrl" name="editPersonDataUrl"/>
    <label class="labelsName" for="fName">Name: </label>
    <input class="dynamicBox" type="text" id="editName" name="editName"/><br>
    <label class="labelsAge" for="dOb">Age: </label>
    <input class="dynamicBox" type="date" id="editAge" name="editAge"/><br>
    <label class="labels" for="others">Hobby: </label>
    <input class="dynamicBox" type="text" name="oThers" id="editOthers"><br>
    <label class="labelsRate" for="others">Rating: </label>
    <input class="dynamicBox" type="text" name="rating" id="editRate">`;
  const personToEdit = people[indexOfPersonToEdit];
  document.getElementById('editPersonDataUrl').value = personToEdit.image;
  document.getElementById('editName').value = personToEdit.fName;
  document.getElementById('editAge').value = personToEdit.dOb;
  document.getElementById('editOthers').value = personToEdit.choice;
  document.getElementById('editRate').value = personToEdit.heartRate;
  setupEditImageLoader();
}

// Complete an edit by updating the people array with the changed values
const donePerson = (indexOfPersonToSave) => {
  const editProperties = {
    image: document.getElementById("editPersonDataUrl").value,
    fName: document.getElementById("editName").value,
    dOb: document.getElementById("editAge").value,
    choice: document.getElementById("editOthers").value,
    heartRate: document.getElementById("editRate").value,
  };
  people[indexOfPersonToSave] = editProperties;
  updateLocalStorage();
  listPeople();
}

// Delete a person from the people array with the given index
const deletePerson = (indexOfPersonToDelete) => {
  people = people.filter((x, i) => i !== indexOfPersonToDelete);
  updateLocalStorage();
  listPeople();
};

// listPeople when the page loads
document.getElementById("body").onload = () => {
  listPeople();
};

const clearLocal = () => {
  localStorage.clear();
  people = [];
  listPeople();
}

const resetValue = () => {
  document.getElementById("fileInput").value = ""
}
