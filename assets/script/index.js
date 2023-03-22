'use strict';

const postForm = document.getElementById("post-form");
const file = document.getElementById("file");
const fileName = document.getElementById("file-name");
const postContainer = document.getElementById("posts-container");
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
postForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const postBody = postForm.elements['post-body'].value;
    const image = postForm.elements.image;
    const date = new Date()
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth();
    const url =  image.files && image.files[0] ? URL.createObjectURL(image.files[0]) : null;


    const innerHtmlStructure = `
        <div class="post-container">
            <header class="post-header">
                <div class="left-container>
                    <img src="./assets/img/propix.png" alt="profile" />
                    <h3>Jason Adindu</h3>
                </div>
                <span>${months[month]} ${dayOfMonth}, ${year}</span>
            </header>
            <div class="post-body">
                <p>${postBody}</p>
                ${ url != null ? `<img src=${url} alt="post" />` : ''}
            </div>
        </div> 
    `;

    // const url = URL.createObjectURL(image.files[0]);
    // console.log(url);

    postContainer.innerHTML += innerHtmlStructure;
    

})



file.addEventListener("change", (event) => {
    const name = event.target.files[0].name;
    fileName.innerText = name;
})



class User {
    #id;
    #name;
    #username;
    #email
    constructor(id, name, username, email) {
        this.#id = id;
        this.#name = name;
        this.#username = username;
        this.#email = email;
    }

    get id() { return this.#id; }
    get name() { return this.#name; }
    get username() { return this.#username; }
    get email() { return this.#email; }
    get getInfo() {

    }
}


class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, username, email, pages, groups) {
        super(id, name, username, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = false;
    }

    get pages() { return this.#pages; }
    get groups() { return this.#groups; }
    get canMonetize() { return this.#canMonetize; }

    get getInfo() {

    }
}