let allUsersArr1: any = [];
let flag =0;
let xhr4 = new XMLHttpRequest();
xhr4.open("GET", "../data/users.json", true);

xhr4.onprogress = function () {
    console.log("Loading...");
}


xhr4.onload = function () {
    let data = JSON.parse(this.responseText);
    let usersArr = data.users;
    allUsersArr1.push(...usersArr);

    console.log(allUsersArr1);
}
xhr4.send();


let username=document.getElementById("username")as HTMLInputElement;
let password=document.getElementById("password")as HTMLInputElement;

function login()
<<<<<<< HEAD
{   
    if (username.value == "" || password.value == "" || username.value!=allUsersArr1.username || password.value!=allUsersArr1.password ) {
=======
{
    
    for(let x in allUsersArr1){
        if(username==allUsersArr1.username && password==allUsersArr1.password)
            flag=1; 
    }
        if(flag==1){
            console.log("shiran");
        }

   
}


 /*if (username.value == "" || password.value == "" || username.value!=usersArr1.username || password.value!=usersArr1.password ) {
>>>>>>> 55fb60bbd4280e28f07685fe81009bf168e940b2
        alert( "Incorrect Data, Please try again!");
        
    } 
    else if (username.value==allUsersArr1.username && password.value==allUsersArr1.password)
    {
                window.location.href = "./Home.html";   
    }*/

//document.getElementById("logbtn1")?.addEventListener("click",login);