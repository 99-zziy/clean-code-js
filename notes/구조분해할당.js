// 💩 Bad Code
function clickGroupButton() {
  const confirmButton = document.getElementsByTagName("button")[0];
  const cancelButton = document.getElementsByTagName("button")[1];
  const resetButton = document.getElementsByTagName("button")[2];
}

// ✨ Good Code
function clickGroupButton2() {
  const [confirmButton, cancelButton, resetButton] =
    document.getElementsByTagName("button");
}

// 💩 Bad Code
function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}
const marco = new Person("Marco", 30, "Korea");

// ✨ Good Code
function Person({ name, age, location }) {
  this.age = age;
  this.name = name;
  this.location = location;
}
const marco = new Person({ name: "Marco", age: 30, location: "Korea" });

// 💩 Bad Code
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// ✨ Good Code
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
