"use strict";
var _a;
let allUsersArr = [];
let xhr = new XMLHttpRequest();
xhr.open("GET", "../data/users.json", true);
xhr.onload = function () {
    let data = JSON.parse(this.responseText);
    let usersArr = data.users;
    allUsersArr.push(...usersArr);
    console.log(allUsersArr);
};
xhr.send();
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
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let username = document.getElementById("username");
    let age = document.getElementById("age");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if (firstName == undefined || lastName == undefined || username == undefined || age == undefined || email == undefined || password == undefined) {
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
            let newUser = new User(firstName.value, lastName.value, username.value, age.value, email.value, password.value);
            allUsersArr.push(newUser);
            localStorage.setItem("newUser", JSON.stringify(newUser));
            window.location.href = ("../Pages/Login.html");
        }
    }
}
(_a = document.getElementById("addbtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", addUserfunc);
