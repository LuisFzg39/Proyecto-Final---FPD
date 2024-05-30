const localStorage = window.localStorage
const params = new URLSearchParams(window.location.search)
const idFromUrl = params.get('id')
let libros = []
let books = []

async function getBookData() {
    const response = await fetch("https://raw.githubusercontent.com/LuisFzg39/API-Proyecto/main/libros.json")
    libros = await response.json()
    createView()
}

function searchBook(){
    let libro = null
    for(let i = 0; i < libros.length; i++) {
        const obj = libros[i]
        if(obj.id == idFromUrl) {
            libro = new Libro(obj.id, obj.name, obj.price, obj.description, obj.author, obj.year, obj.editorial, obj.img)
        }
    }
    return libro
}

function createView() {

    const libro = searchBook()

    if(libro) {

        const name = document.getElementById("name")
        const price =  document.getElementById("price")
        const description = document.getElementById("description")
        const author = document.getElementById("author")
        const year = document.getElementById("year")
        const editorial = document.getElementById("editorial")
        const img = document.getElementById("detail-img")
        
        name.innerHTML = libro.name
        price.innerHTML = libro.price
        description.innerHTML = libro.description
        author.innerHTML = "Autor: " + libro.author
        year.innerHTML = "Año de publicación: " + libro.year
        editorial.innerHTML = "Editorial: " + libro.editorial
        img.src = libro.img 

    } else {

        alert("No hay coincidencias para el usuario: " + idFromUrl)

    }
}

function addFavorite() {

    const libro = searchBook()

    const loggedUserString = localStorage.getItem("LOGGED-USER")
    const usersListString = localStorage.getItem("USERS")

    if (loggedUserString && libro) {
        let loggedUser = JSON.parse(loggedUserString)
        let usersList = JSON.parse(usersListString)

        
        if (!loggedUser.books) {
            loggedUser.books = []
        }

        
        let alreadyInbooks = false;
        for (let i = 0; i < loggedUser.books.length; i++) {
            if (loggedUser.books[i].id === libro.id) {
                alreadyInbooks = true
                break
            }
        }

        for (let i = 0; i < usersList.length; i++) {
            if (usersList[i].email === loggedUser.email) {
                usersList[i] = loggedUser
                break
            }
        }

        if (!alreadyInbooks) { 
            loggedUser.books.push(libro)
            localStorage.setItem("LOGGED-USER", JSON.stringify(loggedUser))
            localStorage.setItem("USERS", JSON.stringify(usersList))
            alert('Libro añadido a favoritos')

        } else {

            alert('El libro ya esta en favoritos')

        }

    } else {

        alert('Usuario sin registrar o libro no encontrado')

    }
}

getBookData()