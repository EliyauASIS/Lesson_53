

let usersArr: any = []
let postsArr: any = []
let commentsArr: any = []

// let usernameLogin: any = JSON.parse(localStorage.getItem("user"));
// usernameLogin = usernameLogin.username

let xhr = new XMLHttpRequest();

xhr.open("GET", "../Data/users.json", true)

xhr.onprogress = function () {
    console.log("Loading...");
}

xhr.onload = function () {
    let response: any = JSON.parse(this.responseText)
    response = response.users
    usersArr = response
    for (let x in usersArr) {
        // if(usersArr[x] == usernameLogin){
    }
    postsArr = usersArr[0].posts
    showExplorerPosts()
}

xhr.onerror = function () {
    console.log("Error");
}

xhr.send()

let explorerPosts = document.getElementById("explorerPosts") as HTMLDivElement

const showExplorerPosts = (): void => {
    explorerPosts.innerHTML = ""
    for (let x in postsArr) {
        let postDiv = document.createElement("div") as HTMLDivElement
        postDiv.className = "post"
        explorerPosts.appendChild(postDiv)
        postDiv.innerHTML +=
            `<span class="postCreatorName">${postsArr[x].postCreator}</span>
            <img class=postImage src="${postsArr[x].postImage}"></br>
            <span class="itemContent">${postsArr[x].postContent}</span>
            <label id="likeLabel${x}" class="likeLabel" for="likeBtn${x}"> <i class='bx bxs-heart' id='bx-bxs-heart${x}'></i></label>
            <button id="likeBtn${x}" class="likeBtn" onclick="like_handler(${x})"></button>     
            <span class="likes">${postsArr[x].postLikes} Likes</span></br>
           </br>`
        commentsArr = postsArr[x].postComments
        for (let y in commentsArr) {
            let commentDiv = document.createElement("div") as HTMLDivElement
            commentDiv.className = "comment"
            postDiv.appendChild(commentDiv)
            commentDiv.innerHTML +=
                `<h2 class="postCreator">${commentsArr[x].commentContent}</h2></br></br></br>`
        }

    }
}

const like_handler = (index: any) => {
    if (postsArr[index].liked == false) {
        postsArr[index].postLikes += 1;
        postsArr[index].liked = true;
        let idLike = "likeLabel" + index
        console.log(idLike);
        
        let like = document.getElementById(idLike) as HTMLLabelElement;
        like.style.color = "red";
    }
    else {
        postsArr[index].postLikes -= 1;
        postsArr[index].liked = false;
        let like = document.getElementById("likeLabel" + index) as HTMLLabelElement;
        like.style.color = "red";

    }
    showExplorerPosts()
}

