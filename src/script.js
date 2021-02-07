"use strict";

const daysLeft = document.getElementById("daysLeft");
const finalDay = new Date("04 May 2023");

daysLeft.innerText = Math.ceil(
  (finalDay.getTime() - new Date().getTime()) / 1000 / 60 / 60 / 24
);
