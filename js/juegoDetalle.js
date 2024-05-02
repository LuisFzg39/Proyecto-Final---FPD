const params = new URLSearchParams(window.location.search)
const idFromUrl = params.get('id')

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

createView()