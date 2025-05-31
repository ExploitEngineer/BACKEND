// Fundamentals of JavaScript:
// arrays and objects
// function return
// async js coding
// foreach map filter find indexOf

var arr = [1, 2, 3, 4, 5, "hey", {}, true, function () {}, []];

const arr = [1, 2, 3, 4];
arr.forEach(function (val) {
  console.log(`${val} hello`);
});

const mapedArray = arr.map(function (val) {
  return val + 12;
});
console.log(mapedArray);

const filteredArray = arr.filter((val) => {
  if (val > 3) {
    return true;
  } else return false;
});
console.log(filteredArray);

const indexedArray = arr.indexOf((val) => {
  if (val > 3) {
    return val;
  } else return false;
});
console.log(indexedArray);

const obj = {
  name: "harsh",
};
obj["name"];
obj.name;

function abcd(a, b, c) {}
console.log(abcd.length);

function abcd() {
  return 12;
}
const ans = abcd();
console.log(ans);

const blob = await fetch("https://randomuser.me/api/");
const res = await blob.json();
console.log(res);

async function abcd() {
  const res = await fetch("https://randomuser.me/api");
  const data = res.json();
  console.log(data);
}
abcd();
