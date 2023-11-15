"use strict";
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
    if (username.value == "" || password.value == "" || username.value != allUsersArr1.username || password.value != allUsersArr1.password) {
        alert("Incorrect Data, Please try again!");
    }
    else if (username.value == allUsersArr1.username && password.value == allUsersArr1.password) {
        window.location.href = "./Home.html";
    }
}
//document.getElementById("logbtn1")?.addEventListener("click",login);
