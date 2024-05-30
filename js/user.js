const localStorage = window.localStorage

function loadUserData() {

    let name = document.getElementById("name")
    let last_name = document.getElementById("last-name")
    let password = document.getElementById("password")
    let email = document.getElementById("email")

    const loggedUserString = localStorage.getItem("LOGGED-USER")

    if(loggedUserString) {

        const loggedUser = JSON.parse(loggedUserString)
        name.innerHTML = loggedUser.name
        last_name.innerHTML = loggedUser.last_name
        password.innerHTML = loggedUser.password
        email.innerHTML = loggedUser.email


    } else {

        window.location.href = "./login.html"

    }
}

function closeSession() {
    localStorage.removeItem("LOGGED-USER")
    loadUserData()
}

loadUserData()