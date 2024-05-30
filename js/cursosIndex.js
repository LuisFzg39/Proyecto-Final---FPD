let container = document.getElementById("course-container")
let listOfCourses = []
let cursos = []

async function getCourseData() {
    const response = await fetch("https://raw.githubusercontent.com/LuisFzg39/API-Proyecto/main/cursos.json")
    cursos = await response.json()
    createView()
}


function renderView() {

    container.innerHTML = ""
    for(let i = 0; i < listOfCourses.length; i++) {
        const curso = listOfCourses[i]
        container.innerHTML += curso.createHtml(i)
    }

}

function parseCourseData() {

    for(let i = 0; i < cursos.length; i++) {
        const obj = cursos[i]
        const curso = new Curso(obj.id, obj.name, obj.price, obj.description, obj.year, obj.area, obj.img)
        listOfCourses.push(curso)
    }

    console.log(cursos)

}

function seeCourseDetail(position) {

    const userToUse = listOfCourses[position]
    window.location.href = "./cursoDetalle.html?id="+userToUse.id+"&name="+userToUse.name

}

function createView() {
    parseCourseData()
    renderView()
}

getCourseData()

