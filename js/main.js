var elList = document.querySelector(".hero__list2");
var elInput = document.querySelector(".hero__form-input");
var elBtn = document.querySelector(".hero__form-btn");

function renderMovies(array, place) {
    elList.innerHTML = null
    
    for (var item of array) {
        // create elment <li>
        var newLi = document.createElement("li")
        newLi.classList.add("hero__list2-item")
        
        // create elment <div>
        var newDiv = document.createElement("div")
        newDiv.classList.add("class")
        
        // create elment <img>
        var newImg = document.createElement("img")
        
        newImg.setAttribute("src", `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`)
        newImg.classList.add("hero__list2-img")
        newImg.setAttribute("alt", "films")
        
        // create elment <div>
        var newInnerDiv = document.createElement("div")
        
        // create elment <h3>
        var newHeading = document.createElement("h3")
        newHeading.textContent = item.Title
        
        // create elment <p>
        var newP = document.createElement("p")
        newP.textContent = item.movie_year
        
        // create elment <p>
        var newP2 = document.createElement("p")
        newP2.textContent = item.imdb_rating
        
        newInnerDiv.appendChild(newHeading);
        newInnerDiv.appendChild(newP);
        newInnerDiv.appendChild(newP2);
        newDiv.appendChild(newImg);
        newDiv.appendChild(newInnerDiv);
        newLi.appendChild(newDiv);
        place.appendChild(newLi);
    }
}

elBtn.addEventListener("click", function(){
    var newMoviesList = movies.filter(item => item.movie_year==elInput.value)
    renderMovies(newMoviesList, elList)
})