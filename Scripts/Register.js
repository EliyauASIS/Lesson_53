"use strict";
var _a;
let allUsersArr = [];
let xhr3 = new XMLHttpRequest();
xhr3.open("GET", "../data/users.json", true);
xhr3.onload = function () {
    let data = JSON.parse(this.responseText);
    let usersArr = data.users;
    allUsersArr.push(...usersArr);
    console.log(allUsersArr);
};
xhr3.send();
class User {
    constructor(firstName, lastName, username, age, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.age = age;
        this.email = email;
        this.password = password;
    }
}
function addUserfunc() {
    let firstNameInput = document.getElementById("firstName");
    let lastNameInput = document.getElementById("lastName");
    let usernameInput = document.getElementById("username");
    let ageInput = document.getElementById("age");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    if (firstNameInput.value === "" ||
        lastNameInput.value === "" ||
        usernameInput.value === "" ||
        ageInput.value === "" ||
        emailInput.value === "" ||
        passwordInput.value === "") {
        alert("Missing Data...");
        localStorage.clear();
    }
    else {
        let flag = false;
        for (var i = 0; i < allUsersArr.length; i++) {
            if (username == allUsersArr[i].username) {
                flag = true;
                break;
            }
        }
        if (flag == true) {
            alert("User ALLREADY EXIST!");
            localStorage.clear();
        }
        else {
            let newUser = new User(firstNameInput.value, lastNameInput.value, usernameInput.value, ageInput.value, emailInput.value, passwordInput.value);
            allUsersArr.push(newUser);
            localStorage.setItem("newUser", JSON.stringify(newUser));
            window.location.href = ("../Pages/Login.html");
        }
    }
}
(_a = document.getElementById("addbtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", addUserfunc);
