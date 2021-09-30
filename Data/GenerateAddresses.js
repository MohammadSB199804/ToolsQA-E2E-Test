var streetNumber = ["25489", "87459", "35478", "15975", "95125", "78965"];
var streetName = ["A street", "B street", "C street", "D street", "E street", "F street"];
var cityName = ["Riyadh", "Dammam", "Jedda", "Tabouk", "Makka", "Maddena", "Haiel"];
var stateName = ["Qassem State", "North State", "East State", "South State", "West State"];
var zipCode = ["28889", "96459", "35748", "15005", "99625", "71465"];

var template = [streetNumber, " ", streetName, ", ", cityName, " ", stateName, ", ", zipCode];

export function getRandomAddress() {
  return template.map(getRandomElement).join("");
}

function getRandomElement(array) {
  if (array instanceof Array) return array[Math.floor(Math.random() * array.length)];
  else return array;
}