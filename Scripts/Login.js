"use strict";
var _a;
let allUsersArr1 = [];
let xhr4 = new XMLHttpRequest();
xhr4.open("GET", "../data/users.json", true);
xhr4.onprogress = function () {
    console.log("Loading...");
};
xhr4.onload = function () {
    let data = JSON.parse(this.responseText);
    let usersArr = data.users;
    allUsersArr1.push(...usersArr);
    console.log(allUsersArr1);
};
xhr4.send();
let username = document.getElementById("username");
let password = document.getElementById("password");
function login() {
    if (username.value == "" || password.value == "" || username.value != usersArr.username || password.value != usersArr.password) {
        alert("Incorrect Data, Please try again!");
    }
    else if (username.value == usersArr.username && password.value == usersArr.password) {
        window.location.href = "./Home.html";
    }
}
(_a = document.getElementById("logbtn1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", login);
