// DATA
const data = [
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
        "title" : "Django Eria",
        "description" : "Blabla bla description",
        "runtime" : "120",
        "director" : "Quentin Tarantino",
        "likes" : "86",
        "img" : "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg"
    },
    {
        "id" : "3",
        "title" : "Ejango Unchained",
        "description" : "Blabla bla description",
        "runtime" : "193",
        "director" : "Quentin Tarantino",
        "likes" : "86",
        "img" : "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg"
    },
    {
        "id" : "4",
        "title" : "Bjango Unchained",
        "description" : "Blabla bla description",
        "runtime" : "70",
        "director" : "Quentin Tarantino",
        "likes" : "86",
        "img" : "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg"
    },
    {
        "id" : "5",
        "title" : "Kjango Unchained",
        "description" : "Blabla bla description",
        "runtime" : "84",
        "director" : "Quentin Tarantino",
        "likes" : "86",
        "img" : "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg"
    },
    {
        "id" : "6",
        "title" : "Ljango Unchained",
        "description" : "Blabla bla description",
        "runtime" : "72",
        "director" : "Quentin Tarantino",
        "likes" : "86",
        "img" : "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg"
    },
    {
        "id" : "7",
        "title" : "Mjango Unchained",
        "description" : "Blabla bla description",
        "runtime" : "170",
        "director" : "Quentin Tarantino",
        "likes" : "86",
        "img" : "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg"
    },
    {
        "id" : "8",
        "title" : "Zjango Unchained",
        "description" : "Blabla bla description",
        "runtime" : "172",
        "director" : "Quentin Tarantino",
        "likes" : "86",
        "img" : "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg"
    },
    {
        "id" : "9",
        "title" : "Django Unchained",
        "description" : "Blabla bla description",
        "runtime" : "93",
        "director" : "Quentin Tarantino",
        "likes" : "86",
        "img" : "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg"
    },
    {
        "id" : "10",
        "title" : "Django Unchained",
        "description" : "Blabla bla description",
        "runtime" : "83",
        "director" : "Quentin Tarantino",
        "likes" : "86",
        "img" : "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg"
    }
]

// SELECTORS

// INIT

init()


// FUNCTIONS
function init() {
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
            console.log(e.target.parentNode.children[2])
            let countOutput = e.target.parentNode.children[2]
            console.log(countOutput)
            let count = parseInt(e.target.parentNode.children[2].innerText.split(" ")[2])
            count++
            console.log(count)
            countOutput.innerHTML = `<p>Likes : ${count}</p>`
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
    console.log(select.value)

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

        default :
            break
    }

    show(data)
    
}