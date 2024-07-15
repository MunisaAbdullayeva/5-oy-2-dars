// Object originted ptogramming - OOP

let account = {
    profilImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVC_PjxSr91JdX9EASzVQDT-fqT9xhLBO7Ow&s",
    username: "No name",
    nickname: "Bunny_luvM",
    followers: 5000,
    following: 1000,
    bio: "Everything is just like a shit",
    posts: [
        {
            id: 1,
            postImage: "https://i.pinimg.com/236x/20/61/80/206180fad094e05acc8e4d8c59d78887.jpg", 
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, harum incidunt. Corrupti iure qui ipsa officia blanditiis, reiciendis, aut, natus incidunt corporis nobis quae vitae voluptas asperiores saepe distinctio enim.",
            likes: 300,
            comments: 100
        },
    ]
}



let nickname = document.querySelector('#nickname')
let profilImage = document.querySelector('#profil-img')
let posts = document.querySelector('#postsLenght')
let followers = document.querySelector('#followersLenght')
let following = document.querySelector('#followingsLength')

nickname.textContent = "@" + account.nickname
profilImage.src = account.profilImage

posts.textContent = account.posts.length
followers.textContent = account.followers
following.textContent = account.following
