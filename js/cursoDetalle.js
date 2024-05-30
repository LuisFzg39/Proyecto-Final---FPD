const params = new URLSearchParams(window.location.search)
const idFromUrl = params.get('id')
let cursos = []
let courses = []

async function getCourseData() {
    const response = await fetch("https://raw.githubusercontent.com/LuisFzg39/API-Proyecto/main/cursos.json")
    cursos = await response.json()
    createView()
}


function searchCourse() {
    let curso = null
    for (let i = 0; i < cursos.length; i++) {
        const obj = cursos[i]
        if (obj.id == idFromUrl) {
            curso = new Curso(obj.id, obj.name, obj.price, obj.description, obj.year, obj.area, obj.img)
        }
    }
    return curso
}

function createView() {

    const curso = searchCourse()

    if (curso) {

        const name = document.getElementById("name")
        const price = document.getElementById("price")
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

function addFavorite() {

    const curso = searchCourse()

    const loggedUserString = localStorage.getItem("LOGGED-USER")
    const usersListString = localStorage.getItem("USERS")

    if (loggedUserString && curso) {
        let loggedUser = JSON.parse(loggedUserString)
        let usersList = JSON.parse(usersListString)


        if (!loggedUser.courses) {
            loggedUser.courses = []
        }


        let alreadyIncourses = false;
        for (let i = 0; i < loggedUser.courses.length; i++) {
            if (loggedUser.courses[i].id === curso.id) {
                alreadyIncourses = true
                break
            }
        }

        for (let i = 0; i < usersList.length; i++) {
            if (usersList[i].email === loggedUser.email) {
                usersList[i] = loggedUser
                break
            }
        }

        if (!alreadyIncourses) {
            loggedUser.courses.push(curso)
            localStorage.setItem("LOGGED-USER", JSON.stringify(loggedUser))
            localStorage.setItem("USERS", JSON.stringify(usersList))
            alert('Curso añadido a favoritos')

        } else {

            alert('El curso ya esta en favoritos')

        }

    } else {

        alert('Usuario sin registrar o curso no encontrado')

    }
}

getCourseData()