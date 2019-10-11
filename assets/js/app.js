// DATA
let data = [
    {
        "id" : "1",
        "title" : "Django Unchained",
        "description" : "Blabla bla description",
        "runtime" : "165",
        "director" : "Quentin Tarantino",
        "likes" : "100",
        "img" : "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg"
    },
    {
        "id" : "2",
        "title" : "Matrix",
        "description" : "Blabla bla description",
        "runtime" : "136",
        "director" : "The Wachowski Brothers",
        "likes" : "63",
        "img" : "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
        "id" : "3",
        "title" : "Joker",
        "description" : "Blabla bla description",
        "runtime" : "193",
        "director" : "Todd Philips",
        "likes" : "23",
        "img" : "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
        "id" : "4",
        "title" : "Star Wars : The Last Jedi",
        "description" : "Blabla bla description",
        "runtime" : "70",
        "director" : "Rian Johnson",
        "likes" : "150",
        "img" : "https://vignette.wikia.nocookie.net/starwars/images/0/0e/TLJ_junior_novelization_final_cover.jpg/revision/latest?cb=20171223163204"
    },
    {
        "id" : "5",
        "title" : "Interstellar",
        "description" : "Blabla bla description",
        "runtime" : "84",
        "director" : "Christopher Nolan",
        "likes" : "140",
        "img" : "https://i.etsystatic.com/17646166/r/il/524d9c/1505079846/il_794xN.1505079846_fq8f.jpg"
    },
    {
        "id" : "6",
        "title" : "The Avengers",
        "description" : "Blabla bla description",
        "runtime" : "72",
        "director" : "Quentin Tarantino",
        "likes" : "120",
        "img" : "http://www.coverwhiz.com/content/The-Avengers.jpg"
    },
    {
        "id" : "7",
        "title" : "Thor : Ragnarok",
        "description" : "Blabla bla description",
        "runtime" : "170",
        "director" : "Quentin Tarantino",
        "likes" : "70",
        "img" : "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg"
    },
    {
        "id" : "8",
        "title" : "Batman : The Dark Knight",
        "description" : "Blabla bla description",
        "runtime" : "172",
        "director" : "Quentin Tarantino",
        "likes" : "20",
        "img" : "https://img01.mgo-images.com/image/thumbnail/v2/content/1MV3625835fdea89978e1a59cd33bc357e9.jpeg"
    },
    {
        "id" : "9",
        "title" : "Matrix : Revolutions",
        "description" : "Blabla bla description",
        "runtime" : "93",
        "director" : "Quentin Tarantino",
        "likes" : "90",
        "img" : "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
    },
    {
        "id" : "10",
        "title" : "Aladdin",
        "description" : "Blabla bla description",
        "runtime" : "83",
        "director" : "Quentin Tarantino",
        "likes" : "15",
        "img" : "https://www.openaircinemas.com.au/wp-content/uploads/2019/06/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_-1.jpg"
    }
]

// SELECTORS


// INIT
init()

// FUNCTIONS
function init() {
    sortArr(data, "")
    show(data)
    registerEventListeners()
}

function show(movies) {
    let output = document.getElementById("output")
    output.innerHTML = ""
    for(movie of movies) {
        output.innerHTML += 
        `
        <div key="${movie.id}" class="movie">
            <img src="${movie.img}">
            <div class="movie-details">
                <div class="details-top">
                    <h2>${movie.title}</h2>
                    <p>${movie.description}</p>
                </div>
                <div class="details-bottom">
                    <p>Runtime : ${movie.runtime}</p>
                    <p>Director : ${movie.director}</p>
                    <p class="likes">Likes : ${movie.likes}</p>
                    <button class="like-button">Like</button>
                </div>
            </div>
        </div>
        `
    }

    
}

function registerEventListeners() {
    // SELECTING LIKE BUTTONS
    let buttons = document.querySelectorAll('.like-button')
    for (button of buttons) {
        button.addEventListener('click', (e) => {
            let movieId = e.target.parentNode.parentNode.parentNode.attributes[0].value
            let countOutput = e.target.parentNode.children[2]
            let count = parseInt(e.target.parentNode.children[2].innerText.split(" ")[2])
            count++
            countOutput.innerHTML = `<p>Likes : ${count}</p>`
            for(movie of data) {
                movie.id == movieId ? movie.likes = `${count}` : 0
            }
        })
    }

    // SELECTING INPUT
    let input = document.getElementById('search')
    input.addEventListener('keyup', (e) => {
        search(input)
    })

    // SELECTING SELECT
    let select = document.getElementById('select')
    select.addEventListener('change', (e) => {
        sortArr(data, select)
    })
}

function search(input) {

    let movies = document.querySelectorAll('.movie') 
    
    for(movie of movies) {
        if(input.value == "") {
        
            movie.classList.remove("hidden")
        
        } else if(movie.children[1].children[0].children[0].innerText.toLowerCase().startsWith(input.value.toLowerCase())) {
    
            movie.classList.remove("hidden")
    
        } else {
    
            movie.classList.add("hidden")
    
        }
    }
}

function sortArr(arr, select) {

    switch(select.value) {
        case "shortest":
            arr.sort((a, b) => {
                if(parseInt(a.runtime) > parseInt(b.runtime)) {
                    return 1
                } else {
                    return -1
                }
            })
            break

        case "longest":
            arr.sort((a, b) => {
                if(parseInt(a.runtime) < parseInt(b.runtime)) {
                    return 1
                } else {
                    return -1
                }
            })
            break

        case "popular":
            arr.sort((a, b) => {
                if(parseInt(a.likes) < parseInt(b.likes)) {
                    return 1
                } else {
                    return -1
                }
            })
            break

        default :
            arr.sort((a, b) => {
                if(a.title > b.title) {
                    return 1
                } else {
                    return -1
                }
            })
            break
    }

    show(data)
    registerEventListeners()
    
}