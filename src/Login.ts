let allUsersArr1: any = [];
let flag = 0;
let xhr4 = new XMLHttpRequest();
xhr4.open("GET", "../data/users.json", true);

xhr4.onprogress = function () {
    console.log("Loading...");
}


xhr4.onload = function () {
    let data = JSON.parse(this.responseText);
    let usersArr = data.users;
    allUsersArr1.push(...usersArr);
    // let newUser: any = window.localStorage.getItem("newUser");
    // allUsersArr1.push(JSON.parse(newUser));
    console.log(allUsersArr1);
}
xhr4.send();




// function login() {
//     for (let x in allUsersArr1) {
//         if (username.value == allUsersArr1[x].username && password.value == allUsersArr1[x].password) {
//             localStorage.setItem("loginuser", (allUsersArr1[x].username));
//             localStorage.setItem("Usersarr", JSON.stringify(allUsersArr1));
//             window.location.href = "../Pages/Home.html";
//             flag = 1;
//         }

//     }
//     if (flag == 0) {
//         alert("Incorrect Data, Please try again!");
//     }

// }

function login() {
    let username = document.getElementById("username") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;
    showLoader();


    setTimeout(() => {
        let flag = false;

        if (username.value.trim() === "" || password.value.trim() === "") {
            alert("Please enter both Username and Password.");
        } else {
            for (let user of allUsersArr1) {
                if (username.value === user.username && password.value === user.password) {
                    localStorage.setItem("loginuser", user.username);
                    localStorage.setItem("Usersarr", JSON.stringify(allUsersArr1));
                    let allPosts = user.posts 
                    window.localStorage.setItem("allPosts",JSON.stringify(allPosts))
                    window.location.href = "../Pages/Home.html";
                    flag = true;
                    break;
                }
            }

            if (!flag) {
                alert("Incorrect username or password. Please try again!");
            }
        }

        
    }, 3000);
   
}

function showLoader() {
    const spinner = document.getElementById('spinner');

    if (spinner) {
        spinner.style.display = 'inline-block';
        spinner.style.marginRight = '3px';
        setTimeout(() => {
            spinner.style.display = 'none';
        }, 3000);
    }
}


