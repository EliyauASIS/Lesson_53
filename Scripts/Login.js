"use strict";
let allUsersArr1 = [];
let flag = 0;
let xhr4 = new XMLHttpRequest();
xhr4.open("GET", "../data/users.json", true);
xhr4.onprogress = function () {
    console.log("Loading...");
};
xhr4.onload = function () {
    let data = JSON.parse(this.responseText);
    let usersArr = data.users;
    allUsersArr1.push(...usersArr);
    let newUser = window.localStorage.getItem("newUser");
    allUsersArr1.push(JSON.parse(newUser));
    console.log(allUsersArr1);
};
xhr4.send();
let username = document.getElementById("username");
let password = document.getElementById("password");
function login() {
    for (let x in allUsersArr1) {
        if (username.value == allUsersArr1[x].username && password.value == allUsersArr1[x].password) {
            localStorage.setItem("loginuser", (allUsersArr1[x].username));
            localStorage.setItem("Usersarr", JSON.stringify(allUsersArr1));
            window.location.href = "../Pages/Home.html";
            flag = 1;
        }
    }
    if (flag == 0) {
        alert("Incorrect Data, Please try again!");
    }
}
