var person = {
    firstName: "John",
    lastName: "James",
    email: "jj@example.com",
    phone: "555 - 555 - 5555",
  }
  // console.log(person.firstName);

function Person(firstName, lastName, email, phone) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.phone = phone;
}

var people = [];
people.push(person);
people.push(new Person("Linda", "Morgan",
  "lm@example.com", "555 - 444 - 3333"));
people.push(new Person("Martin", "Castle", "mc@example.com", "555 - 333 - 5555"));
people.push(new Person("Charle", "Johnson", "cj@example.com", "555 - 444 - 5555"));
people.push(new Person("Jose", "Gonzales", "jg@example.com", "555 - 444 - 4444"));

function dataTable(){
var table = document.getElementById("table");
var holder = "";

for (var count = 0; count < people.length; ++count) {

  holder += "<tr>";
  holder += "<td>" + people[count].firstName + "</td>";
  holder += "<td>" + people[count].lastName + "</td>";
  holder += "<td>" + people[count].email + "</td>";
  holder += "<td>" + people[count].phone + "</td>";
  holder += "</tr>";

  // var tr = document.createElement("tr");
  // var td = document.createElement("td");
  // var content = document.createTextNode(people[count].firstName);
  // td.appendChild(content);
  // tr.appendChild(td);
  //
  // document.getElementById("table").appendChild(tr);
}
table.innerHTML = holder;
}
function newContent() {
  var newFirstName = document.getElementById("first").value;
  var newLastName = document.getElementById("last").value;
  var newEmail = document.getElementById("email").value;
  var newPhone = document.getElementById("phone").value;
  var addedPerson = people.push(new Person(newFirstName, newLastName, newEmail, newPhone));
  dataTable();
  var form = document.getElementById("form");
  form.reset();
}
newContent();
