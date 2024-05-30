const localStorage = window.localStorage
let books = []
let games = []
let courses = []


function displayBooks() {

    const booksList = document.getElementById("body1")
    const loggedUserString = localStorage.getItem("LOGGED-USER");

    if (loggedUserString) {

        const loggedUserString = localStorage.getItem("LOGGED-USER")

        if (loggedUserString) {

            let loggedUser = JSON.parse(loggedUserString)
            for (let i = 0; i < loggedUser.books.length; i++) {
                const obj = loggedUser.books[i]
                const libro = new Libro(obj.id, obj.name, obj.price, obj.description, obj.author, obj.year, obj.editorial, obj.img)
                books.push(libro)
                
            }

        }
      
        booksList.innerHTML = ""
        for(let i = 0; i < books.length; i++) {
            const libro = books[i]
            booksList.innerHTML += libro.createHtml(i)
        }


    } else {

        alert("No user is logged in");

    }
}

function seeBookDetail(position) {

    const bookDetail = books[position]
    window.location.href = "./libroDetalle.html?id="+bookDetail.id+"&name="+bookDetail.name

}

function displayGames() {

    const gamesList = document.getElementById("body2")
    const loggedUserString = localStorage.getItem("LOGGED-USER");

    if (loggedUserString) {

        const loggedUserString = localStorage.getItem("LOGGED-USER")

        if (loggedUserString) {

            let loggedUser = JSON.parse(loggedUserString)
            for (let i = 0; i < loggedUser.games.length; i++) {
                const obj = loggedUser.games[i]
                const juego = new Juego(obj.id, obj.name, obj.price, obj.description, obj.year, obj.company, obj.img)
                games.push(juego)
                
            }

        }
      
        gamesList.innerHTML = ""
        for(let i = 0; i < games.length; i++) {
            const juego = games[i]
            gamesList.innerHTML += juego.createHtml(i)
        }


    } else {

        alert("No user is logged in");

    }
}

function seeGameDetail(position) {

    const gameDetail = games[position]
    window.location.href = "./juegoDetalle.html?id="+gameDetail.id+"&name="+gameDetail.name

}

function displayCourses() {

    const coursesList = document.getElementById("body3")
    const loggedUserString = localStorage.getItem("LOGGED-USER");

    if (loggedUserString) {

        const loggedUserString = localStorage.getItem("LOGGED-USER")

        if (loggedUserString) {

            let loggedUser = JSON.parse(loggedUserString)
            for (let i = 0; i < loggedUser.courses.length; i++) {
                const obj = loggedUser.courses[i]
                const course = new Curso(obj.id, obj.name, obj.price, obj.description, obj.year, obj.area, obj.img)
                courses.push(course)
                
            }

        }
      
        coursesList.innerHTML = ""
        for(let i = 0; i < courses.length; i++) {
            const libro = courses[i]
            coursesList.innerHTML += libro.createHtml(i)
        }


    } else {

        alert("No user is logged in");

    }
}

function seeCourseDetail(position) {

    const courseDetail = courses[position]
    window.location.href = "./cursoDetalle.html?id="+courseDetail.id+"&name="+courseDetail.name

}

displayBooks()
displayGames()
displayCourses()