"use strict";
// localStorage.removeItem("Usersarr");
// localStorage.removeItem("userPosts");
// let usersArr: any = []
// let usernameLogin: any = JSON.parse(localStorage.getItem("user"));
// usernameLogin = usernameLogin.username
// let xhr2 = new XMLHttpRequest();
// xhr2.open("GET", "../Data/users.json", true)
// xhr2.onprogress = function () {
//     console.log("Loading...");
// }
// xhr2.onload = function () {
//     let response: any = JSON.parse(this.responseText)
//     response = response.users
//     usersArr = response
//     for (let x in usersArr) {
//         // if(usersArr[x] == usernameLogin){
//     }
//     postsArr = usersArr[0].posts
//     showExplorerPosts()
// }
// xhr2.onerror = function () {
//     console.log("Error");
// }
// xhr2.send()
let postsArr = [];
let commentsArr = [];
let explorerPosts = document.getElementById("explorerPosts");
const showExplorerPosts = () => {
    explorerPosts.innerHTML = "";
    for (let x in allPosts3) {
        let postDiv = document.createElement("div");
        postDiv.className = "post";
        explorerPosts.appendChild(postDiv);
        postDiv.innerHTML +=
            `<img class="profilePicture" src="${allPosts3[x].userProfile}" alt="" srcset="">
            <span class="postCreatorName">${allPosts3[x].postCreator}</span>
            <span class="creationPost">${allPosts3[x].creationTime}</span>
            <img class=postImage src="${allPosts3[x].postImage}"></br>
            <label id="likeLabel${x}" class="likeLabel" for="likeBtn${x}"> <i class='bx bxs-heart' id='heart${x}'></i></label>
            <button id="likeBtn${x}" class="likeBtn" onclick="like_handler(${x})"></button>     
            <span class="likes">${allPosts3[x].postLikes} Likes</span></br>
            <span class="itemContent"> <span class="postCreatorNameStatus">${allPosts3[x].postCreator}: </span> ${allPosts3[x].postContent}</span>
           </br>`;
    }
    document.getElementById('profilePicturePage').src = allPosts3[0].userProfile;
};
let usersArr = 0;
usersArr = window.localStorage.getItem("Usersarr");
let usersArr2 = JSON.parse(usersArr);
let usernameLogin = 0;
usernameLogin = window.localStorage.getItem("loginuser");
let allPosts2 = 0;
allPosts2 = window.localStorage.getItem("allPosts");
let allPosts3 = JSON.parse(allPosts2);
console.log(allPosts3);
let myProfile1;
const profile2 = () => {
    for (let x in usersArr2) {
        if (usersArr2[x].username === usernameLogin) {
            // allPosts3 = usersArr2[x].posts;
            window.localStorage.setItem("username", JSON.stringify(usernameLogin));
            window.localStorage.setItem("usersArr", JSON.stringify(usersArr2));
            myProfile1 = usersArr2[x];
            showExplorerPosts();
            break;
        }
    }
};
profile2();
const like_handler = (index) => {
    if (allPosts3[index].liked == false) {
        allPosts3[index].postLikes += 1;
        allPosts3[index].liked = true;
        let idLike = "likeLabel" + index;
        let like = document.getElementById(idLike);
        like.style.color = "red";
    }
    else {
        allPosts3[index].postLikes -= 1;
        allPosts3[index].liked = false;
        let idLike = "heart" + index;
        let like = document.getElementById(idLike);
        like.style.color = "black";
    }
    showExplorerPosts();
};
let inputCameraSrc;
let imageCamera = document.getElementById("cameraPlus");
let inputImage = document.getElementById("uploadImage");
let uploadedImage = false;
inputImage.onchange = function () {
    imageCamera.src = URL.createObjectURL(inputImage.files[0]);
    inputCameraSrc = imageCamera.src;
    uploadedImage = true;
};
const addPost = (PostContent) => {
    if (uploadedImage == false || PostContent == "") {
    }
    else {
        let userProfile1 = document.getElementById('profilePicturePage').src;
        let newPostObj = {
            userProfile: userProfile1,
            postCreator: usernameLogin,
            creationTime: "Now",
            postImage: inputCameraSrc,
            postContent: PostContent,
            postLikes: 0,
            liked: false,
            postComments: []
        };
        allPosts3.unshift(newPostObj);
        for (let x in usersArr2) {
            if (usernameLogin == usersArr2[x].username) {
                usersArr2[x].posts = allPosts3;
            }
        }
        showExplorerPosts();
    }
};
let pepoleExplorer = document.getElementById("ExplorerUsers");
function pepoleExplorer_handler() {
    for (let x in usersArr2) {
        if (usersArr2[x] != usernameLogin) {
            pepoleExplorer.innerHTML += `
            <a onclick="profile_handler(${x})" href="../Pages/Profile.html">${usersArr2[x].username}</a></br>
            `;
        }
    }
}
pepoleExplorer_handler();
const myProfile = () => {
    window.localStorage.setItem("userProfile", JSON.stringify(myProfile1));
    window.localStorage.setItem("userPosts", JSON.stringify(postsArr));
};
function profile_handler(index) {
    window.localStorage.setItem("userProfile", JSON.stringify(usersArr2[index].username));
    window.localStorage.setItem("userPosts", JSON.stringify(usersArr2[index].posts));
}
