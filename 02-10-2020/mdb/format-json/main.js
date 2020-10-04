let myObj = {
  contry: "France",
  regime: "Republic",
  cities: {
    paris: 1,
    lyon: 2,
    toulon: 3,
  },
};
console.log(JSON.stringify(myObj, null, "\t"));
