let container = document.getElementById("game-container")
let listOfGames = []
let juegos = []


async function getGameData() {
    const response = await fetch("https://raw.githubusercontent.com/LuisFzg39/API-Proyecto/main/juegos.json")
    juegos = await response.json()
    createView()
}

function renderView() {

    container.innerHTML = ""
    for(let i = 0; i < listOfGames.length; i++) {
        const juego = listOfGames[i]
        container.innerHTML += juego.createHtml(i)
    }

}

function parseGameData() {

    for(let i = 0; i < juegos.length; i++) {
        const obj = juegos[i]
        const juego = new Juego(obj.id, obj.name, obj.price, obj.description, obj.year, obj.company, obj.img)
        listOfGames.push(juego)
    }
}

function seeGameDetail(position) {

    const userToUse = listOfGames[position]
    window.location.href = "./juegoDetalle.html?id="+userToUse.id+"&name="+userToUse.name

}

function createView() {
    parseGameData()
    renderView()
}

getGameData()

