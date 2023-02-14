let currentFM

let floridaLogo = document.getElementById("florida-logo");
let listItems = document.querySelectorAll(".list-item");

let landingPage = document.querySelector('#landing-page')
floridaLogo.addEventListener('mouseover', () => {
    let clickHere = document.createElement('p')
    clickHere.id = "click-here"
    clickHere.textContent = "Click Here!!"
    landingPage.append(clickHere)
})

floridaLogo.addEventListener('mouseout', () => {
    let clickHere = document.querySelector('#click-here')
    clickHere.remove()
})

floridaLogo.addEventListener("click", () => {
    document.getElementById("action-page").style.zIndex = "1";
})

fetch("http://localhost:3000/florida_man")
.then(response => response.json())
.then(fmData => {
        grabTopTen(fmData)
        grabByDate(fmData)
        // renderTopTen() // called within other functions
        // renderFmDetails() // called within other functions
        // topTenClick() // called within other functions
    })
        
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
        fmTitle1 = document.createElement('li')
        fmTitle1.classList.add("list-item")
        fmTitle1.textContent = fm.title
        topTenList.append(fmTitle1)  

        topTenClick(fm)
    })
}

function grabByDate(fmData){
    let dateSubmitForm = document.querySelector("#form-container")
    dateSubmitForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const dateEntry = e.target['text-box'].value
        fmByDate = fmData.find(fm => fm.date === dateEntry)
        renderFmDetails(fmByDate)
    })
}

function topTenClick(fm) {   
    fmTitle1.addEventListener('click', (e) => {
        renderFmDetails(fm)
    })
}


function renderFmDetails(fm) {
    currentFM = fm
    // selectors for fm details
    let fmDetails = document.querySelector('#render-card-here')
    let fmDate = document.querySelector('#date')
    let fmTitle2 = document.querySelector('#title')
    let fmImage = document.querySelector('#image')
    let fmArticle = document.querySelector('#article')
    let fmArticleLink = document.querySelector('#link')
    let fmLike = document.querySelector('.like')
    let fmDislike = document.querySelector('.dislike')
    
    fmDate.textContent = currentFM.date
    fmTitle2.textContent = currentFM.title
    fmImage.src = currentFM.image
    fmArticle.textContent = currentFM.Article
    fmArticleLink.href = currentFM.Article_link
    fmLike.textContent = `${currentFM.likes} likes`
    fmDislike.textContent = `${currentFM.dislikes} dislikes`
    
    fmLike.id = currentFM.id
    fmLike.addEventListener('click', (e) => {
        let id = e.target.id

        currentFM.likes++
        let newLikes = currentFM.likes
        fmLike.textContent = `${newLikes} likes`
        
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

    fmDislike.id = currentFM.id
    fmDislike.addEventListener('click', (e) => {
        let id = e.target.id

        currentFM.dislikes++
        let newDislikes = currentFM.dislikes
        fmDislike.textContent = `${newDislikes} dislikes`
        
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



