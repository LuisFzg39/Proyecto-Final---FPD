let container = document.getElementById("game-container")
let listOfGames = []


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
        const juego = new Juego(obj.id, obj.name, obj.price, obj.description, obj.author, obj.year, obj.editorial, obj.img)
        listOfGames.push(juego)
    }

    
}

function seeDetail(position) {

    const userToUse = listOfGames[position]
    window.location.href = "./juegoDetalle.html?id="+userToUse.id+"&name="+userToUse.name

}

function createView() {
    parseGameData()
    renderView()
}

createView() 

