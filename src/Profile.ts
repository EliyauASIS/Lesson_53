
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

let usersArrs: any = 0
usersArrs = window.localStorage.getItem("Usersarr")
let usersArrs2 = JSON.parse(usersArrs)

let postsArrs: any = 0
postsArrs = window.localStorage.getItem("userPosts")
let postsArrs2 = JSON.parse(postsArrs)
let postsArr2 = []



let usernameProfile: any = 0
usernameProfile = window.localStorage.getItem("userProfile")
let usernameProfile2 = JSON.parse(usernameProfile)

let log1 = document.getElementById("User_Info") as HTMLDivElement

for (let x in usersArrs2) {
    log1.innerHTML = ""
    if (usersArrs2[x].username == usernameProfile2) {
        let profileDiv = document.createElement("div") as HTMLDivElement
        profileDiv.className = "profileUser"
        log1.appendChild(profileDiv)
        profileDiv.innerHTML +=
            `<img class="profilePicture" src="${usersArrs2[x].userProfile}" alt="" srcset="">
            <span class="postCreatorName">${usersArrs2[x].username}</span>
           </br>`
        if (usersArrs2[x].username != usernameLogin1) {
            profileDiv.innerHTML +=
            `<button id="friendRequestBtn${x}" class="friendRequestBtn" onclick="newFriend()">Friend Request</button>
           </br>`
        }
        break;
    }
}

let Posts = document.getElementById("content") as HTMLDivElement

for (let x in postsArrs2) {
    let postDiv = document.createElement("div") as HTMLDivElement
    postDiv.className = "post"
    Posts.appendChild(postDiv)
    postDiv.innerHTML +=
        `<img class="profilePicture" src="${postsArrs2[x].userProfile}" alt="" srcset="">
            <span class="postCreatorName">${postsArrs2[x].postCreator}</span>
            <span class="creationPost">${postsArrs2[x].creationTime}</span>
            <img class=postImage src="${postsArrs2[x].postImage}"></br>
            <label id="likeLabel${x}" class="likeLabel" for="likeBtn${x}"> <i class='bx bxs-heart' id='heart${x}'></i></label>
            <button id="likeBtn${x}" class="likeBtn" onclick="like_handler(${x})"></button>     
            <span class="likes">${postsArrs2[x].postLikes} Likes</span></br>
            <span class="itemContent"> <span class="postCreatorNameStatus">${postsArrs2[x].postCreator}: </span> ${postsArrs2[x].postContent}</span>
           </br>`
}

let allPosts: any = []
let newposts:any = []

const newFriend = () => {
    for (let t in usersArrs2) {
        if (usersArrs2[t].username == usernameLogin1) {
            for(let x in usersArrs2[t].posts){
                newposts.push(usersArrs2[t].posts[x])
            }
            for(let y in postsArrs2){
                newposts.push(postsArrs2[y])
            }
            usersArrs2[t].posts = newposts
            console.log( usersArrs2[t].posts);
        }
    }

}

const home_handler = () => {
    window.localStorage.setItem("Usersarr", JSON.stringify(usersArrs2))
}


