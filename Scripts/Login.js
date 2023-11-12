"use strict";
let username = document.getElementById("username");
let password = document.getElementById("password");
void function login() {
    let usersData = JSON.parse();
    if (username.value == "" || password.value == "" || username.value != usersData.username || password.value != usersData.password) {
        alert("Incorrect Data, Please try again!");
    }
    else if (username.value == usersData.username && password.value == usersData.password) {
        window.location.href = "./homePage.html";
    }
};
