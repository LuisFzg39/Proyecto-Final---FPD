let container = document.getElementById("book-container")
let listOfBooks = []
let libros = []


async function getBookData() {
    const response = await fetch("https://raw.githubusercontent.com/LuisFzg39/API-Proyecto/main/libros.json")
    libros = await response.json()
    createView()
}

function renderView() {

    container.innerHTML = ""
    for(let i = 0; i < listOfBooks.length; i++) {
        const libro = listOfBooks[i]
        container.innerHTML += libro.createHtml(i)
    }

}

function parseBookData() {

    for(let i = 0; i < libros.length; i++) {
        const obj = libros[i]
        const libro = new Libro(obj.id, obj.name, obj.price, obj.description, obj.author, obj.year, obj.editorial, obj.img)
        listOfBooks.push(libro)
    }

    
}

function seeBookDetail(position) {

    const bookDetail = listOfBooks[position]
    window.location.href = "./libroDetalle.html?id="+bookDetail.id+"&name="+bookDetail.name

}

function createView() {
    parseBookData()
    renderView()
}

getBookData()

