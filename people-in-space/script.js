console.clear();
const peopleInSpace = document.querySelector("[data-js='people-in-space']");
const peopleList = document.querySelector("ul");

async function getPeopleInSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");

  const data = await response.json();

  console.log("data: ", data);
  peopleInSpace.textContent = data.number;

  // data.people (an array)
  // loop over them (using forEach)
  // for each item in the array use
  // document.createElement("li")
  // add the name of the person to the element
  // append element to the dom
}
getPeopleInSpace();

// async function listPeopleInSpace() {
//   const response = await fetch("http://api.open-notify.org/astros.json");

//   const data = await response.json();

//   console.log("data: ", data);
//   peopleList.textContent = data.people.forEach(function (person) {
//     console.log(person);
//   });

//   const peopleList = document.createElement("li");
//   document.body.append(peopleList);
// }
// listPeopleInSpace();

async function getPeopleInSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();

  console.log("data: ", data);
  peopleInSpace.textContent = data.number;

  // Loop over the people array
  data.people.forEach(function (person) {
    console.log(person);

    // Create a list item for each person
    const li = document.createElement("li");

    // Add the name of the person to the list item
    li.textContent = person.name; // assuming the object has a "name" property

    // Append the list item to the existing ul element in the DOM
    peopleList.appendChild(li);
  });
}

getPeopleInSpace();
