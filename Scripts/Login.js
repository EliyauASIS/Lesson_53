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
    let newUser = localStorage.getItem("newUser");
    console.log(newUser);
    allUsersArr1.push(JSON.parse(newUser));
    console.log(allUsersArr1);
};
xhr4.send();
let username = document.getElementById("username");
let password = document.getElementById("password");
function login() {
<<<<<<< Updated upstream
    for (let x in allUsersArr1) {
        if (username.value == allUsersArr1[x].username && password.value == allUsersArr1[x].password) {
            localStorage.setItem("loginuser", JSON.stringify(allUsersArr1[x].username));
            localStorage.setItem("Usersarr", JSON.stringify(allUsersArr1));
            window.location.href = "../Pages/Home.html";
            flag = 1;
        }
    }
    if (flag == 0) {
        alert("Incorrect Data, Please try again!");
    }
}
=======

if (username.value == "" || password.value == "" || username.value!=allUsersArr1.username || password.value!=allUsersArr1.password ) {
       alert( "Incorrect Data, Please try again!");
       
   }
   else if (username.value==usersArr.username && password.value==usersArr.password)
   {
               window.location.href = "../Pages/Home.html";
   }

}
//document.getElementById("logbtn1")?.addEventListener("click",login);
>>>>>>> Stashed changes
