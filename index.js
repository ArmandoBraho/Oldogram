const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsSection = document.getElementById("posts-section");

renderPosts();

// checkEvents();


function renderPosts(){
    for(let i=0; i<posts.length; i++){
        postsSection.innerHTML += 
        `<div class="post" id="${posts[i].username}">
            <div id="post-header" >
                <div class="post-header-element">
                    <img class="avatar" alt="avatar image of ${posts[i].name}" src="${posts[i].avatar}"></img>
                </div>
                <div class="post-header-element">
                    <h2 class="name">${posts[i].name}</h2>
                    <p class="location">${posts[i].location}</p>
                </div>
            </div>
                <img class="post-img" id="post-img-${posts[i].username}" alt="portrait of  of ${posts[i].name}" src="${posts[i].post}"></img>
                <div id="post-footer">
                    <div class="post-btns">
                    <img class="btn" id="like-btn" alt="heart for liking" src="images/icon-heart.png"></img>
                    <img class="btn" id="comment-btn" alt="cloud for commenting" src="images/icon-comment.png"></img>
                    <img class="btn" id="dm-btn" alt="arrow for dm" src="images/icon-dm.png"></img>
                    <p class="likes-amount" id="likes-${posts[i].username}">${posts[i].likes} likes</p>
                    <p class="comment"><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
                </div>
                
            </div>
        </div>      
        `;
    if( i !== posts.length-1 ){
        postsSection.innerHTML += `<div class="posts-separator"></div>`
    }

    }
}

//  to adjust
//  function checkEvents(){
//     const postImage = document.getElementById("post-img");
//     const likesAmount = document.getElementById("likes-amount");
    
//     postImage.addEventListener("dblclick", function(){
//         console.log(  );
//     })
// }