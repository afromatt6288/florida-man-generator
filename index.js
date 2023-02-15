
//// The Landing Page ////

let floridaLogo = document.getElementById("florida-logo");
let listItems = document.querySelectorAll(".list-item");

let landingPage = document.querySelector('#landing-page')
floridaLogo.addEventListener('mouseover', () => {
    let clickHere = document.createElement('p')
    clickHere.id = "click-here"
    clickHere.textContent = "Click Here!! ⬈"
    landingPage.append(clickHere)
})

floridaLogo.addEventListener('mouseout', () => {
    let clickHere = document.querySelector('#click-here')
    clickHere.remove()
})

floridaLogo.addEventListener("click", () => {
    document.getElementById("action-page").style.zIndex = "1";
})

//// Global Variables ////

let currentFM

//// Our Fetch ////

fetch("http://localhost:3000/florida_man")
.then(response => response.json())
.then(fmData => {
    grabTopTen(fmData)
    grabByDate(fmData)
    grabAtRandom(fmData)
    // renderTopTen() // called within other functions
    renderFmDetails(fmData[0]) // used to populate card with 1st place entry, and also called within other functions
    // topTenClick() // called within other functions
    addLikes()
    addDislikes()
})

//// Functions to create and populate the Top Ten List ////

function grabTopTen(fmData){
    fmData
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 10)
    .map(topTen => {
        renderTopTen([topTen])});
}

function renderTopTen(topTen){
    let topTenList = document.querySelector('#top-10')
    topTen.forEach(fm => {
        fmSnippet = document.createElement('li')
        fmSnippet.classList.add("list-item")
        fmSnippet.textContent = fm.snippet
        topTenList.append(fmSnippet)  

        topTenClick(fm)
    })
}

//// Functions to render detail cards from the Top Ten or the Date form or the random button////

function topTenClick(fm) {   
    fmSnippet.addEventListener('click', (e) => {
        renderFmDetails(fm)
    })
}

function grabByDate(fmData){
    let dateSubmitForm = document.querySelector("#form-container")
    dateSubmitForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const dateEntry = e.target['text-box'].value
        fmByDate = fmData.find(fm => fm.date === dateEntry)
        renderFmDetails(fmByDate)
        dateSubmitForm.reset()
    })
}

function grabAtRandom(fmData) {
    let randomButton = document.querySelector('#randomize')
    randomButton.addEventListener('click', (e) => {
        const random = fmData[Math.floor(Math.random() * fmData.length)]
        fmRandom = fmData.find(fm => fm.id === random)
        renderFmDetails(random)
    })

}

function renderFmDetails(fm) {
    currentFM = fm
    // selectors for fm details
    fmDate = document.querySelector('#date')
    fmTitle = document.querySelector('#title')
    fmImage = document.querySelector('#image')
    fmArticle = document.querySelector('#article')
    fmArticleLink = document.querySelector('#link')
    fmLike = document.querySelector('.like')
    fmLikeButton = document.querySelector('#up-arrow')
    fmDislike = document.querySelector('.dislike')
    
    fmDate.textContent = currentFM.date
    fmTitle.textContent = currentFM.title
    fmImage.src = currentFM.image
    fmArticle.textContent = currentFM.Article
    fmArticleLink.href = currentFM.Article_link
    fmLike.textContent = currentFM.likes
    fmLike.id = currentFM.id
    fmDislike.textContent = currentFM.dislikes 
    fmDislike.id = currentFM.id   
}

//// Like Button Functionality ////

function addLikes(){
    fmLikeButton = document.querySelector('#up-arrow')
    fmLikeButton.addEventListener('click', () => {
        let id = currentFM.id
        
        currentFM.likes = currentFM.likes + 1
        renderFmDetails(currentFM)
        let newLikes = currentFM.likes
        
        fetch(`http://localhost:3000/florida_man/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                "likes": newLikes
            }) 
        })
    })
}    

//// Dislike Button Functionality ////

function addDislikes(){
    fmDislikeButton = document.querySelector('#down-arrow')
    fmDislikeButton.addEventListener('click', () => {
        let id = currentFM.id

        currentFM.dislikes = currentFM.dislikes + 1
        renderFmDetails(currentFM)
        let newDislikes = currentFM.dislikes
        
        fetch(`http://localhost:3000/florida_man/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                "dislikes": newDislikes
            }) 
        })
    })
}



