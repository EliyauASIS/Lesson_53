
let allUsersArr: any = [];
let xhr3= new XMLHttpRequest();
xhr3.open("GET", "../data/users.json", true);
xhr3.onload = function () {
    let data = JSON.parse(this.responseText);
    let usersArr = data.users;
    allUsersArr.push(...usersArr);
    console.log(allUsersArr);
}
xhr3.send()

class User {
    firstName:string;
    lastName:string;
    username:string;
    age:string;
    email:string;
    password:string;
    constructor(firstName:string, lastName:string, username:string,age:string,email:string,password:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.age = age;
        this.email = email;
        this.password = password;
        
        
    }
}

 function addUserfunc() {
    let firstNameInput = document.getElementById("firstName") as HTMLInputElement;
    let lastNameInput  = document.getElementById("lastName") as HTMLInputElement;
    let usernameInput  = document.getElementById("username") as HTMLInputElement;
    let ageInput  = document.getElementById("age") as HTMLInputElement;
    let emailInput  = document.getElementById("email") as HTMLInputElement;
    let passwordInput  = document.getElementById("password") as HTMLInputElement;



    if ( firstNameInput.value === "" ||
    lastNameInput.value === "" ||
    usernameInput.value === "" ||
    ageInput.value === "" ||
    emailInput.value === "" ||
    passwordInput.value === "")
    {
        alert("Missing Data...");
        localStorage.clear();
    } else {
        let flag = false;
        for (var  i=0;i<allUsersArr.length;i++) 
        {
            if (username == allUsersArr[i].username) {
                flag = true;
                break;
            }
        }
        if (flag == true) {
            alert("User ALLREADY EXIST!");
            localStorage.clear();
        } else {
            let newUser = new User(firstNameInput.value,lastNameInput.value,usernameInput.value,ageInput.value,emailInput.value,passwordInput.value);
            allUsersArr.push(newUser);
            localStorage.setItem("newUser", JSON.stringify(newUser));
            window.location.href = ("../Pages/Login.html");
        }
    }
}

document.getElementById("addbtn")?.addEventListener("click",addUserfunc);