"use strict";

const fs = require("fs");
const { parse } = require("path");

class Member {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
}

const memberArray = [];
const member1 = new Member("john", "USA");
const member2 = new Member("Sarah", "Canada");

memberArray.push(member1);
memberArray.push(member2);

console.log(memberArray);

const data = JSON.stringify(memberArray);
fs.writeFile("test.json", data, (err) => {
  if (err) throw err;
  else console.log("Succeeded!");
});

fs.readFile("test.json", (err, data) => {
  if (err) throw err;

  let parsedData = JSON.parse(data);
  console.log(typeof parsedData);

  parsedData.forEach((element) => {
    console.log(element);
    console.log(element.name);
  });
});
