
let floridaLogo = document.getElementById("florida-logo");

floridaLogo.addEventListener("click", () => {
    document.getElementById("action-page").style.zIndex = "1";
})

// fetch("http://localhost:3000/florida_man")
// .then(response => response.json())
// .then(fmData => {
//   ////Function Wishlist////
//   // Function render Florida Man into the cards 
//   //renderFM(fmData)
//   // Function to render Florida Man titles into top ten field, including capability to click on title to show its card. This funciton must take the likes and dislike values, and return the 10 entries who have the highest score
//   //topTenFM(fmData)
//   //function to enter a date to populate the FM Card of that date
//   // function to increase likes on an FM Article, and patch to the DB
//   //addLikes()
//   // function to increase dislikes on an FM Article, and patch to the DB
//   //addDislikes()
// })
