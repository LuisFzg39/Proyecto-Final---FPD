const localStorage = window.localStorage

function validateLoggedUser() {
    const loggedUserString = localStorage.getItem("LOGGED-USER")
    if(loggedUserString) {
        window.location.href = "./categorypage.html"
    }
}

function login() {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const usersListString = localStorage.getItem("USERS")
    if (usersListString) {
        let listObject = JSON.parse(usersListString)
        var found = false
        for (let i = 0; i < listObject.length; i++) {
            const obj = listObject[i]
            if (obj.email === email && obj.password === password) {
                    found = true
                    const objToSave = JSON.stringify(obj)
                    localStorage.setItem("LOGGED-USER", objToSave)
            }
        }

        if(found) {

            window.location.href = "./categorypage.html"

        } else {

            alert("Error: Datos incorrectos")
        }

    } else {

        alert("Error: Datos incorrectos")
    }
}

validateLoggedUser()