
// let xhr = new XMLHttpRequest();
// xhr.open("GET", "../Data/users.json", true);
// xhr.onprogress = function () {
//     console.log("Loading...");
// };

// xhr.onload = function () {
//     let response = JSON.parse(this.responseText);
//     response = response.users;
//     const user1 = response[0];
//     const userContentDiv = document.getElementById("userContent") as HTMLDivElement;
//     userContentDiv.innerHTML = `
//         <p>First Name: ${user1.firstName}</p>
//         <p>Last Name: ${user1.lastName}</p>
//         <p>Username: ${user1.username}</p>
//         <p>Age: ${user1.age}</p>
//         <p>City: ${user1.city}</p>
//         <p>Email: ${user1.email}</p>
//         <p>Password: ${user1.password}</p>
//     `;

//     const friendContentDiv = document.getElementById("friendContent") as HTMLDivElement;
//     friendContentDiv.innerHTML = `
//         <li>${user1.friends[1]}</li>
//         <li>${user1.friends[2]}</li>

//     `;
// };

// xhr.onerror = function () {
//     console.log("Error");
// };

// xhr.send();

let usernameLogin1: any = 0
usernameLogin1 = window.localStorage.getItem("loginuser")
console.log(usernameLogin1);


let usersArrs: any = 0
usersArrs = window.localStorage.getItem("Usersarr")
let usersArrs2 = JSON.parse(usersArrs)




let usernameProfile: any = 0
usernameProfile = window.localStorage.getItem("username")
console.log(usernameProfile);
let usernameProfile2 = JSON.parse(usernameProfile)

let log1 = document.getElementById("content") as HTMLDivElement

for (let x in usersArrs2) {
    log1.innerHTML = ""
    if (usersArrs2[x].username == usernameLogin1) {
        let profileDiv = document.createElement("div") as HTMLDivElement
        profileDiv.className = "profileUser"
        log1.appendChild(profileDiv)
        profileDiv.innerHTML +=
            `<img class="profilePicture" src="${usersArrs2[x].userProfile}" alt="" srcset="">
            <span class="postCreatorName">${usernameProfile}</span>
           </br>`
        if (usersArrs2[x].username != usernameLogin1) {
            profileDiv.innerHTML +=
                `<button class="friendRequestBtn">Friend Request</button>
           </br>`
        }
        break;
    }
}
