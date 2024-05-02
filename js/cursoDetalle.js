const params = new URLSearchParams(window.location.search)
const idFromUrl = params.get('id')

function searchCourse(){
    let curso = null
    for(let i = 0; i < cursos.length; i++) {
        const obj = cursos[i]
        if(obj.id == idFromUrl) {
            curso = new Curso(obj.id, obj.name, obj.price, obj.description, obj.year, obj.area, obj.img)
        }
    }
    return curso
}

function createView() {

    const curso = searchCourse()

    if(curso) {

        const name = document.getElementById("name")
        const price =  document.getElementById("price")
        const description = document.getElementById("description")
        const year = document.getElementById("year")
        const area = document.getElementById("area")
        const img = document.getElementById("detail-img")
        
        name.innerHTML = curso.name
        price.innerHTML = curso.price
        description.innerHTML = curso.description
        year.innerHTML = "Año de lanzamiento: " + curso.year
        area.innerHTML = "Area: " + curso.area
        img.src = curso.img 

    } else {

        alert("No hay coincidencias para el usuario: " + idFromUrl)

    }
}

createView()