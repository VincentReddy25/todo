



const userData = []

function addTask() {
    event.preventDefault();
    
    let userInput = document.getElementById("userinput")
    let display = document.getElementById("display")

    display.innerHTML = ""
    userData.push(userInput.value)
    
    for (const i of userData) {
        display.innerHTML += `<li>${i}</li>`
    }

    userInput.value = ""
}


