

// let usersArr: any = []
let postsArr: any = []
let commentsArr: any = []

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


let explorerPosts = document.getElementById("explorerPosts") as HTMLDivElement


const showExplorerPosts = (): void => {
    explorerPosts.innerHTML = ""
    for (let x in postsArr) {
        let postDiv = document.createElement("div") as HTMLDivElement
        postDiv.className = "post"
        explorerPosts.appendChild(postDiv)
        postDiv.innerHTML +=
            `<img class="profilePicture" src="${postsArr[x].userProfile}" alt="" srcset="">
            <span class="postCreatorName">${postsArr[x].postCreator}</span>
            <span class="creationPost">${postsArr[x].creationTime}</span>
            <img class=postImage src="${postsArr[x].postImage}"></br>
            <label id="likeLabel${x}" class="likeLabel" for="likeBtn${x}"> <i class='bx bxs-heart' id='heart${x}'></i></label>
            <button id="likeBtn${x}" class="likeBtn" onclick="like_handler(${x})"></button>     
            <span class="likes">${postsArr[x].postLikes} Likes</span></br>
            <span class="itemContent"> <span class="postCreatorNameStatus">${postsArr[x].postCreator}: </span> ${postsArr[x].postContent}</span>
           </br>`
    }
    (document.getElementById('profilePicturePage') as HTMLImageElement).src = postsArr[0].userProfile;
}

let usersArr: any = 0
usersArr = window.localStorage.getItem("Usersarr");
let usersArr2 = JSON.parse(usersArr);


let usernameLogin: any = 0
usernameLogin = window.localStorage.getItem("loginuser")
console.log(usernameLogin);

let myProfile1: any

for (let x in usersArr2) {
    if (usersArr2[x].username == usernameLogin) {
        postsArr = usersArr2[x].posts;
        window.localStorage.setItem("username", JSON.stringify(usernameLogin))
        window.localStorage.setItem("usersArr", JSON.stringify(usersArr))
        myProfile1 = usersArr2[x]
        showExplorerPosts();
    }
}

const like_handler = (index: any) => {
    if (postsArr[index].liked == false) {
        postsArr[index].postLikes += 1;
        postsArr[index].liked = true;
        let idLike = "likeLabel" + index;
        let like = document.getElementById(idLike) as HTMLElement;
        like.style.color = "red";
    }
    else {
        postsArr[index].postLikes -= 1;
        postsArr[index].liked = false;
        let idLike = "heart" + index;
        let like = document.getElementById(idLike) as HTMLElement;
        like.style.color = "black";
    }
    showExplorerPosts();
}

let inputCameraSrc: any

let imageCamera = document.getElementById("cameraPlus") as HTMLImageElement
let inputImage: any = document.getElementById("uploadImage") as HTMLElement
let uploadedImage = false
inputImage.onchange = function () {
    imageCamera.src = URL.createObjectURL(inputImage.files[0]);
    inputCameraSrc = imageCamera.src
    uploadedImage = true
}

const addPost = (PostContent: any) => {
    if (uploadedImage == false || PostContent == "") {

    }
    else {
        let userProfile1 = (document.getElementById('profilePicturePage') as HTMLImageElement).src
        let newPostObj = {
            userProfile: userProfile1,
            postCreator: usernameLogin,
            creationTime: "Now",
            postImage: inputCameraSrc,
            postContent: PostContent,
            postLikes: 0,
            liked: false,
            postComments: []
        }
        postsArr.unshift(newPostObj);
        console.log(postsArr);
        showExplorerPosts();
    }
}


let pepoleExplorer = document.getElementById("ExplorerUsers") as HTMLDivElement

function pepoleExplorer_handler(){
    for (let x in usersArr2) {
        if (usersArr2[x] != usernameLogin) {
            console.log(usersArr2[x]);
            pepoleExplorer.innerHTML += `
            <a onclick="profile_handler(${usersArr2[x]})" href="../Pages/Profile.html">${usersArr2[x].username}</a>
            `
        }
    }
}

pepoleExplorer_handler()

const myProfile = () => {
    window.localStorage.setItem("userProfile", JSON.stringify(myProfile1))
}

function profile_handler(user: object){
    window.localStorage.setItem("userProfile", JSON.stringify(user))
}