const localStorage = window.localStorage
let books = []
let games = []
let courses = []

function saveUser() {

    const name = document.getElementById("name").value
    const last_name = document.getElementById("last-name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confirm_pass = document.getElementById("confirm-pass").value

    if(name && last_name && email && password && confirm_pass){

        if(password === confirm_pass){

            const userToSave = {

                name: name,
                last_name: last_name,
                email: email,
                password: password,
                books: books,
                games: games,
                courses: courses
        
            }
    
            const usersListString = localStorage.getItem("USERS")
    
            if(usersListString) {
                let listObject = JSON.parse(usersListString)
                listObject.push(userToSave)
                const listToSave = JSON.stringify(listObject)
                localStorage.setItem("USERS", listToSave)
            } else {
                const usersList = [userToSave]
                const listToSave = JSON.stringify(usersList)
                localStorage.setItem("USERS", listToSave)
            }
    
    
    
            document.getElementById("name").value = ""
            document.getElementById("last-name").value = ""
            document.getElementById("email").value = ""
            document.getElementById("password").value = ""
    
    
            window.location.href = "./login.html";

        }else {

            alert("Error: Las contraseñas no coinciden")

        }
     

    }else {

        alert("Error: Debe llenar todos los espacios")

    }

    
    


}