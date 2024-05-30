const localStorage = window.localStorage
const params = new URLSearchParams(window.location.search)
const idFromUrl = params.get('id')
let juegos = []
let games = []

async function getGameData() {
    const response = await fetch("https://raw.githubusercontent.com/LuisFzg39/API-Proyecto/main/juegos.json")
    juegos = await response.json()
    createView()
}

function searchGame(){
    let juego = null
    for(let i = 0; i < juegos.length; i++) {
        const obj = juegos[i]
        if(obj.id == idFromUrl) {
            juego = new Juego(obj.id, obj.name, obj.price, obj.description, obj.year, obj.company, obj.img)
        }
    }
    return juego
}

function createView() {

    const juego = searchGame()

    if(juego) {

        const name = document.getElementById("name")
        const price =  document.getElementById("price")
        const description = document.getElementById("description")
        const year = document.getElementById("year")
        const company = document.getElementById("company")
        const img = document.getElementById("detail-img")
        
        name.innerHTML = juego.name
        price.innerHTML = juego.price
        description.innerHTML = juego.description
        year.innerHTML = "Año de publicación: " + juego.year
        company.innerHTML = "Compañia: " + juego.company
        img.src = juego.img 

    } else {

        alert("No hay coincidencias para el usuario: " + idFromUrl)

    }
}

function addFavorite() {

    const juego = searchGame()

    const loggedUserString = localStorage.getItem("LOGGED-USER")
    const usersListString = localStorage.getItem("USERS")

    if (loggedUserString && juego) {
        let loggedUser = JSON.parse(loggedUserString)
        let usersList = JSON.parse(usersListString)

        
        if (!loggedUser.games) {
            loggedUser.games = []
        }

        
        let alreadyIngames = false;
        for (let i = 0; i < loggedUser.games.length; i++) {
            if (loggedUser.games[i].id === juego.id) {
                alreadyIngames = true
                break
            }
        }

        for (let i = 0; i < usersList.length; i++) {
            if (usersList[i].email === loggedUser.email) {
                usersList[i] = loggedUser
                break
            }
        }

        if (!alreadyIngames) { 
            loggedUser.games.push(juego)
            localStorage.setItem("LOGGED-USER", JSON.stringify(loggedUser))
            localStorage.setItem("USERS", JSON.stringify(usersList))
            alert('Juego añadido a favoritos')

        } else {

            alert('El juego ya esta en favoritos')

        }

    } else {

        alert('Usuario sin registrar o juego no encontrado')

    }
}

getGameData()