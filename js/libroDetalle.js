const params = new URLSearchParams(window.location.search)
const idFromUrl = params.get('id')

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

createView()