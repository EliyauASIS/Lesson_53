
let xhr = new XMLHttpRequest();
xhr.open("GET", "../Data/users.json", true);
xhr.onprogress = function () {
    console.log("Loading...");
};

xhr.onload = function () {
    let response = JSON.parse(this.responseText);
    response = response.users;
    const user1 = response[0];
    const userContentDiv = document.getElementById("userContent") as HTMLDivElement;
    userContentDiv.innerHTML = `
        <p>First Name: ${user1.firstName}</p>
        <p>Last Name: ${user1.lastName}</p>
        <p>Username: ${user1.username}</p>
        <p>Age: ${user1.age}</p>
        <p>City: ${user1.city}</p>
        <p>Email: ${user1.email}</p>
        <p>Password: ${user1.password}</p>
    `;

    const friendContentDiv = document.getElementById("friendContent") as HTMLDivElement;
    friendContentDiv.innerHTML = `
        <li>${user1.friends[1]}</li>
        <li>${user1.friends[2]}</li>
        
    `;
};

xhr.onerror = function () {
    console.log("Error");
};

xhr.send();

