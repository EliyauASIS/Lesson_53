"use strict";
let usersArr = [];
let postsArr = [];
let commentsArr = [];
// let usernameLogin: any = JSON.parse(localStorage.getItem("user"));
// usernameLogin = usernameLogin.username
let xhr2 = new XMLHttpRequest();
xhr2.open("GET", "../Data/users.json", true);
xhr2.onprogress = function () {
    console.log("Loading...");
};
xhr2.onload = function () {
    let response = JSON.parse(this.responseText);
    response = response.users;
    usersArr = response;
    for (let x in usersArr) {
        // if(usersArr[x] == usernameLogin){
    }
    postsArr = usersArr[0].posts;
    showExplorerPosts();
};
xhr2.onerror = function () {
    console.log("Error");
};
xhr2.send();
let explorerPosts = document.getElementById("explorerPosts");
const showExplorerPosts = () => {
    explorerPosts.innerHTML = "";
    for (let x in postsArr) {
        let postDiv = document.createElement("div");
        postDiv.className = "post";
        explorerPosts.appendChild(postDiv);
        postDiv.innerHTML +=
            `<img class="profilePicture" src="${postsArr[x].userProfile}" alt="" srcset="">
            <span class="postCreatorName">${postsArr[x].postCreator}</span>
            <span class="creationPost">${postsArr[x].creationTime}</span>
            <img class=postImage src="${postsArr[x].postImage}"></br>
            <label id="likeLabel${x}" class="likeLabel" for="likeBtn${x}"> <i class='bx bxs-heart' id='heart${x}'></i></label>
            <button id="likeBtn${x}" class="likeBtn" onclick="like_handler(${x})"></button>     
            <span class="likes">${postsArr[x].postLikes} Likes</span></br>
            <span class="itemContent"> <span class="postCreatorNameStatus">${postsArr[x].postCreator}: </span> ${postsArr[x].postContent}</span>
           </br>`;
        // commentsArr = postsArr[x].postComments
        // for (let y in commentsArr) {
        //     let commentDiv = document.createElement("div") as HTMLDivElement
        //     commentDiv.className = "comment"
        //     postDiv.appendChild(commentDiv)
        //     commentDiv.innerHTML +=
        //         `<h2 class="postCreator">${commentsArr[x].commentContent}</h2></br></br></br>`
        // }
    }
};
const like_handler = (index) => {
    if (postsArr[index].liked == false) {
        postsArr[index].postLikes += 1;
        postsArr[index].liked = true;
        let idLike = "likeLabel" + index;
        let like = document.getElementById(idLike);
        like.style.color = "red";
    }
    else {
        postsArr[index].postLikes -= 1;
        postsArr[index].liked = false;
        let idLike = "heart" + index;
        let like = document.getElementById(idLike);
        like.style.color = "black";
    }
    showExplorerPosts();
};
let inputCameraSrc;
let imageCamera = document.getElementById("cameraPlus");
let inputImage = document.getElementById("uploadImage");
inputImage.onchange = function () {
    imageCamera.src = URL.createObjectURL(inputImage.files[0]);
    inputCameraSrc = imageCamera.src;
};
const addPost = (PostContent) => {
    let newPostObj = {
        userProfile: usersArr[0].userProfile,
        postCreator: usersArr[0].username,
        creationTime: "Now",
        postImage: inputCameraSrc,
        postContent: PostContent,
        postLikes: 0,
        liked: false,
        postComments: []
    };
    postsArr.unshift(newPostObj);
    console.log(postsArr);
    showExplorerPosts();
};
let pepoleExplorer = document.getElementById("ExplorerUsers");
const pepoleExplorer_handler = () => {
    for (let x in usersArr) {
    }
};
