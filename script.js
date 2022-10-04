let people = [];

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
            errors.push(errorMsg)
        }
    });
    console.log(errorMsg);
    if (errors.length > 0) {
        document.getElementById("unexpected").innerHTML = errors.join("<br>")
    } else {
        addPro(fullName.value, dateOfB.value, selectOpt.value, heartRate.value);
    }
};

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
};

// declaring a function to add the properties inside our people array
function addPro(fullName, dateOfB, selectOpt, heartRate) {
    const properties = {
        fName: fullName,
        dOb: dateOfB,
        choice: selectOpt,
        heartRate: heartRate,
    };
    people.push(properties);
    listPeople();
};

function listPeople () {
    const peopleListElement = document.getElementById("peopleList");
    peopleListElement.innerHTML = "";

    let htmlString = "";
    people.forEach((x) => {
        htmlString += `<li>Full Name: ${x.fName}<br>Date of Birth: ${x.dOb}<br>Hobby: ${x.choice}<br>Rating: ${x.heartRate} &hearts;</li>`;
    });
    peopleListElement.innerHTML = htmlString;
};
